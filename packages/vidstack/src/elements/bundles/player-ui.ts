import { defineCustomElement } from 'maverick.js/element';

import { MediaAirPlayButtonElement } from '../define/buttons/airplay-button-element';
import { MediaCaptionButtonElement } from '../define/buttons/caption-button-element';
import { MediaFullscreenButtonElement } from '../define/buttons/fullscreen-button-element';
import { MediaGoogleCastButtonElement } from '../define/buttons/google-cast-button-element';
import { MediaLiveButtonElement } from '../define/buttons/live-button-element';
import { MediaMuteButtonElement } from '../define/buttons/mute-button-element';
import { MediaPIPButtonElement } from '../define/buttons/pip-button-element';
import { MediaPlayButtonElement } from '../define/buttons/play-button-element';
import { MediaSeekButtonElement } from '../define/buttons/seek-button-element';
import { MediaToggleButtonElement } from '../define/buttons/toggle-button-element';
import { MediaCaptionsElement } from '../define/captions-element';
import { MediaChapterTitleElement } from '../define/chapter-title-element';
import { MediaControlsElement } from '../define/controls-element';
import { MediaControlsGroupElement } from '../define/controls-group-element';
import { MediaGestureElement } from '../define/gesture-element';
import { MediaLayoutElement } from '../define/layouts/layout-element';
import { MediaAudioRadioGroupElement } from '../define/menus/audio-radio-group-element';
import { MediaCaptionsRadioGroupElement } from '../define/menus/captions-radio-group-element';
import { MediaChaptersRadioGroupElement } from '../define/menus/chapters-radio-group-element';
import { MediaMenuButtonElement } from '../define/menus/menu-button-element';
import { MediaMenuElement } from '../define/menus/menu-element';
import { MediaMenuItemElement } from '../define/menus/menu-item-element';
import { MediaMenuItemsElement } from '../define/menus/menu-items-element';
import { MediaMenuPortalElement } from '../define/menus/menu-portal-element';
import { MediaQualityRadioGroupElement } from '../define/menus/quality-radio-group-element';
import { MediaRadioElement } from '../define/menus/radio-element';
import { MediaRadioGroupElement } from '../define/menus/radio-group-element';
import { MediaSpeedRadioGroupElement } from '../define/menus/speed-radio-group-element';
import { MediaPosterElement } from '../define/poster-element';
import { MediaSliderChaptersElement } from '../define/sliders/slider-chapters-element';
import { MediaSliderElement } from '../define/sliders/slider-element';
import { MediaSliderPreviewElement } from '../define/sliders/slider-preview-element';
import { MediaSliderThumbnailElement } from '../define/sliders/slider-thumbnail-element';
import { MediaSliderValueElement } from '../define/sliders/slider-value-element';
import { MediaSliderVideoElement } from '../define/sliders/slider-video-element';
import { MediaTimeSliderElement } from '../define/sliders/time-slider-element';
import { MediaVolumeSliderElement } from '../define/sliders/volume-slider-element';
import { MediaSpinnerElement } from '../define/spinner-element';
import { MediaThumbnailElement } from '../define/thumbnail-element';
import { MediaTimeElement } from '../define/time-element';
import { MediaTooltipContentElement } from '../define/tooltips/tooltip-content-element';
import { MediaTooltipElement } from '../define/tooltips/tooltip-element';
import { MediaTooltipTriggerElement } from '../define/tooltips/tooltip-trigger-element';

defineCustomElement(MediaLayoutElement);
defineCustomElement(MediaControlsElement);
defineCustomElement(MediaControlsGroupElement);
defineCustomElement(MediaPosterElement);
// Tooltips
defineCustomElement(MediaTooltipElement);
defineCustomElement(MediaTooltipTriggerElement);
defineCustomElement(MediaTooltipContentElement);
// Buttons
defineCustomElement(MediaPlayButtonElement);
defineCustomElement(MediaMuteButtonElement);
defineCustomElement(MediaCaptionButtonElement);
defineCustomElement(MediaFullscreenButtonElement);
defineCustomElement(MediaPIPButtonElement);
defineCustomElement(MediaSeekButtonElement);
defineCustomElement(MediaAirPlayButtonElement);
defineCustomElement(MediaGoogleCastButtonElement);
defineCustomElement(MediaToggleButtonElement);
// Sliders
defineCustomElement(MediaSliderElement);
defineCustomElement(MediaVolumeSliderElement);
defineCustomElement(MediaTimeSliderElement);
defineCustomElement(MediaSliderChaptersElement);
defineCustomElement(MediaSliderPreviewElement);
defineCustomElement(MediaSliderValueElement);
defineCustomElement(MediaSliderThumbnailElement);
defineCustomElement(MediaSliderVideoElement);
// Menus
defineCustomElement(MediaMenuElement);
defineCustomElement(MediaMenuButtonElement);
defineCustomElement(MediaMenuPortalElement);
defineCustomElement(MediaMenuItemsElement);
defineCustomElement(MediaMenuItemElement);
defineCustomElement(MediaAudioRadioGroupElement);
defineCustomElement(MediaCaptionsRadioGroupElement);
defineCustomElement(MediaSpeedRadioGroupElement);
defineCustomElement(MediaQualityRadioGroupElement);
defineCustomElement(MediaChaptersRadioGroupElement);
defineCustomElement(MediaRadioGroupElement);
defineCustomElement(MediaRadioElement);
// Display
defineCustomElement(MediaGestureElement);
defineCustomElement(MediaThumbnailElement);
defineCustomElement(MediaCaptionsElement);
defineCustomElement(MediaLiveButtonElement);
defineCustomElement(MediaTimeElement);
defineCustomElement(MediaChapterTitleElement);
defineCustomElement(MediaSpinnerElement);
