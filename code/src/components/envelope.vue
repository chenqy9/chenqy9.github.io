<template>
  <div class="envelope">
    <div class="envelope__wrapper">
      <div class="envelope__cover">
        <div
          :class="{
            'envelope__seal': true,
            'envelope__seal--closed': !isOpened,
          }"
          @click="open">
        </div>
      </div>
      <div class="envelope__content">
        <p>CBA球迷</p>
        <p>致CBA顺德赛区组委会的一封信</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';

@Options({
})
export default class Envelope extends Vue {
  isOpened = false;

  open():void {
    this.isOpened = true;
    this.$emit('open');
  }
}
</script>

<style lang="scss" scoped>
@use "sass:math";

.envelope {
  position: relative;
  height: 100%;
  width: 100%;
  padding: 5px;
  background: linear-gradient(45deg, #f25953 12.5%, #fbfaf5 12.5%, #fbfaf5 25%,
   #5590d6 25%, #5590d6 37.5%, #fbfaf5 37.5%, #fbfaf5 50%, #f25953 50%,
   #f25953 62.5%, #fbfaf5 62.5%, #fbfaf5 75%, #5590d6 75%, #5590d6 87.5%,
   #fbfaf5 87.5%, #fbfaf5 100%);
  background-size: 70px 70px;

  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: #fbfaf5;
  }

  &__cover {
    position: relative;
    height: 90px;
    border-bottom-left-radius: 100px 200px;
    border-bottom-right-radius: 100px 200px;
    box-shadow: 0 5px 3px -5px #888,
    5px 0 3px -5px #888,
    -5px 0 3px -5px #888;
  }

  &__seal {
    $seal-width: 90px;
    $seal-height: 90px;

    position: absolute;
    left: 50%;
    top: 100%;
    width: $seal-width;
    height: $seal-height;
    margin-left: math.div(-$seal-width, 2);
    margin-top: math.div(-$seal-height, 2);
    background: url('~@/assets/img/icon-basketball.png') center center/100% 100% no-repeat;

    &--closed {
      animation: heartBeat;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    p {
      margin: 0;
    }
  }
}
</style>
