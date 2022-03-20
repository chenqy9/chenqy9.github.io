<template>
  <div class="sd-cba">
    <div
      v-if="isEnvelopeShow"
      :style="{
        'animation-duration': envelopeAnimateDuration + 'ms',
      }"
      :class="{
        'envelope-wrapper': true,
        'envelope-wrapper--opened': isEnvelopeOpened,
      }">
      <envelope @open="openEnvelope" />
    </div>
    <div v-if="isEnvelopeOpened" class="letter-wrapper">
      <letter ref="letter" />
    </div>
    <div v-show="isEnvelopeOpened" class="music-player" @click="toggleMusic"></div>
    <audio ref="audio" style="display:none" src="audio/bgm_qsws.mov" preload="auto" loop />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';
import Envelope from '../components/envelope.vue';
import Letter from '../components/letter.vue';

@Options({
  components: {
    Envelope,
    Letter,
  },
})
export default class SdCba extends Vue {
  isEnvelopeOpened = false;

  isEnvelopeShow = true;

  isPlayMusic = false;

  envelopeAnimateDuration = 2000;

  toggleMusic():void {
    const musicPlayer = this.$refs.audio as HTMLAudioElement;
    if (!this.isPlayMusic) {
      musicPlayer.play();
      this.isPlayMusic = true;
    } else {
      musicPlayer.pause();
      this.isPlayMusic = false;
    }
  }

  openEnvelope():void {
    this.isEnvelopeOpened = true;
    setTimeout(() => {
      this.isEnvelopeShow = false;
      this.toggleMusic();
      const letter = this.$refs.letter as Letter;
      letter.write();
    }, this.envelopeAnimateDuration);
  }
}
</script>

<style lang="scss" scoped>
.sd-cba {
  position: relative;
  height: 100%;
  width: 100%;

  @keyframes spin {
    100% {
      transform:rotate(360deg);
    }
  }

  .envelope-wrapper {
    position: relative;
    z-index: 20;
    height: 100%;
    padding: 5px;

    &--opened {
      animation: slideOutDown;
    }
  }

  .letter-wrapper {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .music-player {
    position: fixed;
    z-index: 100;
    top: 10px;
    right: 10px;
    height: 30px;
    width: 30px;
    background: url('~@/assets/img/icon-music-player.png') center center/ 100% 100% no-repeat;
    animation: spin 4s linear infinite;
  }
}
</style>
