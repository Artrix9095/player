import { peek, tick } from 'maverick.js';
import { DOMEvent, type InferEventDetail, type InferEventInit } from 'maverick.js/std';

import type { MediaContext } from '../api/media-context';
import type { MediaEvents } from '../api/media-events';

export class MediaPlayerDelegate {
  constructor(private _handle: (event: Event) => void, private _media: MediaContext) {}

  _dispatch<Type extends keyof MediaEvents>(
    type: Type,
    ...init: InferEventDetail<MediaEvents[Type]> extends void | undefined | never
      ? [init?: Partial<InferEventInit<MediaEvents[Type]>>]
      : [init: InferEventInit<MediaEvents[Type]>]
  ) {
    if (__SERVER__) return;
    this._handle(new DOMEvent<any>(type, init?.[0]));
  }

  async _ready(
    info: {
      duration: number;
      seekable: TimeRanges;
      buffered: TimeRanges;
    },
    trigger?: Event,
  ) {
    if (__SERVER__) return;

    const { $state, logger } = this._media;

    if (peek($state.canPlay)) return;

    this._dispatch('can-play', { detail: info, trigger });
    tick();

    if (__DEV__) {
      logger
        ?.infoGroup('-~-~-~-~-~-~-~-~- ✅ MEDIA READY -~-~-~-~-~-~-~-~-')
        .labelledLog('Media Store', { ...$state })
        .labelledLog('Trigger Event', trigger)
        .dispatch();
    }

    if ($state.canPlay() && $state.autoplay() && !$state.started()) {
      await this._attemptAutoplay();
    }
  }

  private async _attemptAutoplay() {
    const { player, $state } = this._media;

    $state.autoplaying.set(true);

    try {
      await player.play();
      this._dispatch('autoplay', { detail: { muted: $state.muted() } });
    } catch (error) {
      this._dispatch('autoplay-fail', {
        detail: {
          muted: $state.muted(),
          error: error as Error,
        },
      });
    } finally {
      $state.autoplaying.set(false);
    }
  }
}
