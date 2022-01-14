<template>
  <div class="cake">
    <div class="plate"></div>
    <div class="layer layer-bottom"></div>
    <div class="layer layer-middle"></div>
    <div class="layer layer-top"></div>
    <div class="icing"></div>
    <div class="drip drip1"></div>
    <div class="drip drip2"></div>
    <div class="drip drip3"></div>
    <div style="top: -36px; left: 55%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -36px; left: 45%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -33px; left: 35%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -30px; left: 25%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -23px; left: 15%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -33px; left: 65%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -27px; left: 75%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -21px; left: 85%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -8px; left: 92%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: -8px; left: 8%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 10px; left: 8%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 10px; left: 92%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 36px; left: 55%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 36px; left: 45%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 33px; left: 35%;" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 30px; left: 25%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 23px; left: 15%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 33px; left: 65%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 27px; left: 75%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
        <div style="top: 21px; left: 85%" class="candle">
          <div class="flame"><div class="inner"></div></div>
          <div class="wick"></div>
        </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
})
export default class Cake extends Vue {
}
</script>

<style lang="scss" scoped>
.cake {
  position: relative;
  width: 250px;
  height: 200px;

  $vanilla: #f0e4d0;
  $chocolate: #553c13;

  @mixin foodColoring($color) {
    background-color: $color;
    box-shadow:
      0 2px 0px lighten($color, 5%),
      0 4px 0px darken($color, 8.2%),
      0 6px 0px darken($color, 8.4%),
      0 8px 0px darken($color, 8.6%),
      0 10px 0px darken($color, 8.8%),
      0 12px 0px darken($color, 9%),
      0 14px 0px darken($color, 9.2%),
      0 16px 0px darken($color, 9.4%),
      0 18px 0px darken($color, 9.6%),
      0 20px 0px darken($color, 9.8%),
      0 22px 0px darken($color, 10%),
      0 24px 0px darken($color, 10.2%),
      0 26px 0px darken($color, 10.4%),
      0 28px 0px darken($color, 10.6%),
      0 30px 0px darken($color, 10.8%);
  }

  & > * {
    position: absolute;
  }

  .plate {
    width: 270px;
    height: 110px;
    position: absolute;
    bottom: -10px;
    left: -10px;
    background-color: #ccc;
    border-radius: 50%;
    box-shadow:
      0 2px 0 darken(#ccc, 10%),
      0 4px 0 darken(#ccc, 10%),
      0 5px 40px rgba(black, 0.5);
  }

  .layer {
    position: absolute;
    display: block;
    width: 250px;
    height: 100px;
    border-radius: 50%;
    @include foodColoring($chocolate);
  }

  .layer-top { top: 0px; }
  .layer-middle { top: 33px; }
  .layer-bottom { top: 66px; }

  .icing {
    top: 2px;
    left: 5px;
    background-color: $vanilla;
    width: 240px;
    height: 90px;
    border-radius: 50%;

    &:before {
      content: "";
      position: absolute;
      top: 4px;
      right: 5px;
      bottom: 6px;
      left: 5px;
      background-color: lighten($vanilla, 3%);
      box-shadow:
          0 0 4px lighten($vanilla, 5%),
          0 0 4px lighten($vanilla, 5%),
          0 0 4px lighten($vanilla, 5%);
      border-radius: 50%;
      z-index: 1;
    }
  }

  .drip {
    display: block;
    width: 50px;
    height: 60px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: $vanilla;
  }

  .drip1 {
    top: 53px;
    left: 5px;
    transform: skewY(15deg);
    height: 48px;
    width: 40px;
  }

  .drip2 {
    top: 69px;
    left: 181px;
    transform: skewY(-15deg);
  }

  .drip3 {
    top: 54px;
    left: 90px;
    width: 80px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .candle {
    background-color: #7B020B;
    width: 16px;
    height: 50px;
    border-radius: 8px / 4px;
    top: -20px;
    left: 50%;
    margin-left: -8px;
    z-index: 10;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 8px;
      border-radius: 50%;
      background-color: lighten(#7B020B, 10%);
    }

    .wick {
      position: absolute;
      background-color:black;
      width: 1px;
      height: 7px;
      top: -2px;
      left: 90%;
      margin-left: -7.5px;
    }
  }

  .flame {
    position: absolute;
    background-color: orange;
    width: 15px;
    height: 35px;
    border-radius: 10px 10px 10px 10px / 25px 25px 10px 10px;
    top: -34px;
    left: 50%;
    margin-left: -7.5px;
    z-index: 10;
    box-shadow:
        0 0 10px rgba(orange, 0.5),
        0 0 20px rgba(orange, 0.5),
        0 0 60px rgba(orange, 0.5),
        0 0 80px rgba(orange, 0.5);
    transform-origin: 50% 90%;
    animation: flicker 1s ease-in-out alternate infinite;

    .inner{
      width: 5px;
      height: 10px;
      background-color: white;
      border-radius: 5px 5px 5px 5px / 20px 20px 5px 5px;
      z-index: 11;
      margin-top: 22px;
      margin-left:5px;
    }
  }

  @keyframes flicker {
    0% {
      transform: skewX(5deg);
      box-shadow:
        0 0 10px rgba(orange, 0.2),
        0 0 20px rgba(orange, 0.2),
        0 0 60px rgba(orange, 0.2),
        0 0 80px rgba(orange, 0.2)
    }
    25% {
      transform: skewX(-5deg);
      box-shadow:
        0 0 10px rgba(orange, 0.5),
        0 0 20px rgba(orange, 0.5),
        0 0 60px rgba(orange, 0.5),
        0 0 80px rgba(orange, 0.5)
    }
    50% {
      transform: skewX(10deg);
      box-shadow:
        0 0 10px rgba(orange, 0.3),
        0 0 20px rgba(orange, 0.3),
        0 0 60px rgba(orange, 0.3),
        0 0 80px rgba(orange, 0.3)
    }
    75% {
      transform: skewX(-10deg);
      box-shadow:
        0 0 10px rgba(orange, 0.4),
        0 0 20px rgba(orange, 0.4),
        0 0 60px rgba(orange, 0.4),
        0 0 80px rgba(orange, 0.4)
    }
    100% {
      transform: skewX(5deg);
      box-shadow:
        0 0 10px rgba(orange, 0.5),
        0 0 20px rgba(orange, 0.5),
        0 0 60px rgba(orange, 0.5),
        0 0 80px rgba(orange, 0.5)
    }
  }
}
</style>
