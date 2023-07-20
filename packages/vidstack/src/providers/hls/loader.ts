import { isString } from 'maverick.js/std';

import type { MediaSrc } from '../../core';
import { HLS_VIDEO_EXTENSIONS, HLS_VIDEO_TYPES } from '../../utils/mime';
import { preconnect } from '../../utils/network';
import { isHLSSupported } from '../../utils/support';
import type { MediaProviderLoader } from '../types';
import { VideoProviderLoader } from '../video/loader';
import type { HLSProvider } from './provider';

export class HLSProviderLoader
  extends VideoProviderLoader
  implements MediaProviderLoader<HLSProvider>
{
  static supported = isHLSSupported();

  preconnect() {
    preconnect('https://cdn.jsdelivr.net', 'preconnect');
  }

  override canPlay({ src, type }: MediaSrc) {
    return (
      HLSProviderLoader.supported &&
      isString(src) &&
      (HLS_VIDEO_EXTENSIONS.test(src) || HLS_VIDEO_TYPES.has(type))
    );
  }

  override async load(context) {
    if (__SERVER__) {
      throw Error('[vidstack] can not load hls provider server-side');
    }

    if (__DEV__ && !this.target) {
      throw Error(
        '[vidstack] `<video>` element was not found - did you forget to include `<media-provider>`?',
      );
    }

    return new (await import('./provider')).HLSProvider(this.target, context);
  }
}
