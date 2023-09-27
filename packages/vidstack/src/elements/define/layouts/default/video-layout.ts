import { html } from 'lit-html';
import { computed } from 'maverick.js';

import { useDefaultLayoutContext } from '../../../../components';
import { $signal } from '../../../lit/directives/signal';
import {
  DefaultCaptionButton,
  DefaultChaptersMenu,
  DefaultFullscreenButton,
  DefaultMuteButton,
  DefaultPIPButton,
  DefaultPlayButton,
  DefaultSettingsMenu,
  DefaultTimeGroup,
  DefaultTimeSlider,
  DefaultVolumeSlider,
} from './shared-layout';

export function DefaultVideoLayoutLarge() {
  const { menuGroup } = useDefaultLayoutContext();
  return html`
    ${DefaultVideoGestures()}${DefaultBufferingIndicator()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      ${$signal(computed(DefaultControlsGroupTop))}

      <div class="vds-controls-spacer"></div>

      <media-controls-group class="vds-controls-group">${DefaultTimeSlider()}</media-controls-group>

      <media-controls-group class="vds-controls-group">
        ${DefaultPlayButton({ tooltip: 'top start' })}
        ${DefaultMuteButton({ tooltip: 'top' })}${DefaultVolumeSlider()}${DefaultTimeGroup()}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        ${DefaultCaptionButton({ tooltip: 'top' })}
        ${$signal(computed(() => (menuGroup() === 'bottom' ? DefaultVideoMenus() : null)))}
        ${DefaultPIPButton()} ${DefaultFullscreenButton({ tooltip: 'top end' })}
      </media-controls-group>
    </media-controls>
  `;
}

function DefaultControlsGroupTop() {
  const { menuGroup } = useDefaultLayoutContext(),
    children =
      menuGroup() === 'top'
        ? html`
            <div class="vds-controls-spacer"></div>
            ${DefaultVideoMenus()}
          `
        : null;

  return html`
    <media-controls-group class="vds-controls-group">${children}</media-controls-group>
  `;
}

export function DefaultVideoLayoutSmall() {
  return html`
    ${DefaultVideoGestures()}${DefaultBufferingIndicator()}
    <media-captions class="vds-captions"></media-captions>

    <div class="vds-scrim"></div>

    <media-controls class="vds-controls">
      <media-controls-group class="vds-controls-group">
        <div class="vds-controls-spacer"></div>
        ${DefaultCaptionButton({ tooltip: 'bottom' })}
        ${DefaultVideoMenus()}${DefaultMuteButton({ tooltip: 'bottom end' })}
      </media-controls-group>

      <div class="vds-controls-group">${DefaultPlayButton({ tooltip: 'top' })}</div>

      <media-controls-group class="vds-controls-group">
        ${DefaultTimeGroup()}
        <media-chapter-title class="vds-chapter-title"></media-chapter-title>
        <div class="vds-controls-spacer"></div>
        ${DefaultFullscreenButton({ tooltip: 'top end' })}
      </media-controls-group>

      <media-controls-group class="vds-controls-group">${DefaultTimeSlider()}</media-controls-group>
    </media-controls>

    <div class="vds-start-duration">
      <media-time class="vds-time" type="duration"></media-time>
    </div>
  `;
}

function DefaultBufferingIndicator() {
  return html`
    <div class="vds-buffering-indicator">
      <svg class="vds-buffering-icon" fill="none" viewBox="0 0 120 120" aria-hidden="true">
        <circle class="vds-buffering-track" cx="60" cy="60" r="54" stroke="currentColor"></circle>
        <circle
          class="vds-buffering-track-fill"
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          pathLength="100"
        ></circle>
      </svg>
    </div>
  `;
}

function DefaultVideoMenus() {
  const { menuGroup, smQueryList } = useDefaultLayoutContext(),
    $side = () => (menuGroup() === 'top' || smQueryList.matches ? 'bottom' : 'top'),
    $tooltip = computed(() => `${$side()} ${menuGroup() === 'top' ? 'end' : 'center'}` as const),
    $placement = computed(() => `${$side()} end` as const);
  return html`
    ${DefaultChaptersMenu({ tooltip: $tooltip, placement: $placement, portal: true })}
    ${DefaultSettingsMenu({ tooltip: $tooltip, placement: $placement, portal: true })}
  `;
}

function DefaultVideoGestures() {
  return html`
    <div class="vds-gestures">
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
      <media-gesture class="vds-gesture" event="pointerup" action="toggle:controls"></media-gesture>
      <media-gesture
        class="vds-gesture"
        event="dblpointerup"
        action="toggle:fullscreen"
      ></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
      <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
    </div>
  `;
}
