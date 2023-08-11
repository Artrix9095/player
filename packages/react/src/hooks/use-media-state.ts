import type { RefObject } from 'react';
import { useSignal, useSignalRecord, useStateContext } from 'maverick.js/react';
import { mediaState, type MediaState } from 'vidstack/local';
import type { MediaPlayerInstance } from '../components/primitives/instances';

/**
 * This hook is used to subscribe to a single media state.
 *
 * @docs {@link https://vidstack.io/docs/react/player/core-concepts/state#reading}
 */
export function useMediaState<T extends keyof MediaState>(
  prop: T,
  ref?: RefObject<MediaPlayerInstance | null>,
): MediaState[T] {
  const $state = useStateContext(mediaState);

  if (__DEV__ && !$state && !ref) {
    console.warn(
      `[vidstack] \`useMediaState\` requires \`RefObject<MediaPlayerInstance>\` argument if called` +
        ' outside the `<MediaPlayer>` component',
    );
  }

  return useSignal((ref?.current?.$state || $state)[prop]);
}

/**
 * This hook is used to subscribe to the current media state on the nearest parent player.
 *
 * @docs {@link https://vidstack.io/docs/react/player/core-concepts/state#reading}
 */
export function useMediaStore(ref?: RefObject<MediaPlayerInstance | null>): Readonly<MediaState> {
  const $state = useStateContext(mediaState);

  if (__DEV__ && !$state && !ref) {
    console.warn(
      `[vidstack] \`useMediaStore\` requires \`RefObject<MediaPlayerInstance>\` argument if called` +
        ' outside the `<MediaPlayer>` component',
    );
  }

  return useSignalRecord(ref?.current?.$state || $state);
}
