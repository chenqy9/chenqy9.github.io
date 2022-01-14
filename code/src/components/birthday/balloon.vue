<template>
  <div
    class="balloon"
    :style="{
      background: color,
      'box-shadow': `inset 10px 10px 10px ${color}`,
    }">
    <span class="balloon__content">{{ content }}</span>
    <span
      class="balloon__tail" :style="{
        color: color,
      }"
    >
      ▲
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

@Options({
  props: {
    color: {
      type: String,
      default: 'red',
    },
    content: {
      type: String,
      default: '',
    },
  },
})
export default class Balloon extends Vue {
  color!: string;

  content!: string;
}
</script>

<style lang="scss" scoped>
.balloon {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 140px;
  border-radius: 0;
  border-radius: 80% 80% 80% 80%;
  padding: 10px;
  transform-origin: bottom center;
  animation: balloon 6s ease-in-out infinite;

  &__content {
    color: #fff;
    font-size: 60px;
    font-weight: bold;
  }

  &__tail {
    position: absolute;
    bottom: -11px;
    font-size: 20px;
  }

  @keyframes balloon {
    0%, 100% {
      -webkit-transform: translateY(0) rotate(-6deg);
    }

    50% {
        -webkit-transform: translateY(-20px) rotate(8deg);
    }
  }
}
</style>
