<template>
  <div class="birthday">
    <!-- 进入页面 -->
    <div v-if="!hasAuth" class="entry-container">
      <label
        for="question">
        你最想对陈庆耀说的三个字是：
      </label>
      <input
        v-model="answer"
        id="question"
        autofocus
        @change="validateAnswer"
      />
    </div>
    <!-- 主页面 -->
    <div v-else class="main-container">
      <div class="balloon-wrapper">
        <balloon class="normal-balloon" color="rgba(182, 15, 97, 0.9)" content="☺"/>
        <balloon class="normal-balloon" color="rgba(242, 112, 45, 0.9)" content="生" />
        <balloon class="normal-balloon" color="rgba(45, 181, 167, 0.9)" content="日" />
        <balloon class="normal-balloon" color="rgba(190, 61, 244, 0.9)" content="快" />
        <balloon class="normal-balloon" color="rgba(180, 224, 67, 0.9)" content="乐" />
        <balloon class="normal-balloon" color="rgba(242, 194, 58, 0.9)" content="！" />
      </div>
      <div id="musicPlayer" @click="playMusic"></div>
      <video id="videoEle" controls loop>
        <source src="audio/birthday/happy_birthday.mp3" />
      </video>
      <div class="cake-prince-wrapper">
        <div id="speechBubble">
          <span>成长不期而遇，生日如期而至。</span><br>
          <span>祝我家亲爱的小川生日快乐！</span><br>
          <span>希望你往后的每一天都能开开心心，幸福快乐！</span><br>
          <span>希望你永远健康、青春、美丽！</span><br>
          <span>希望我们能携手一起渡过彼此往后的每一个生日。</span><br>
          <span>虽然我们无法阻止时光的流逝，</span><br>
          <span>我们可以一起在岁月中创造属于我们的美好回忆，</span><br>
          <span>用心去体验生命中的每一个瞬间。</span><br>
          <span>愿我们都能在岁月中变得更强大、更自信、更从容。</span><br>
          <span>等我们都老去的时候，还能手牵着手，看着落日晚霞，回忆曾经的那些美好，不枉此生。</span>
        </div>
        <div id="littlePrince"></div>
        <cake id="cake" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable no-alert */
import { Options, Vue } from 'vue-class-component';
import anime from 'animejs';

import Cake from '@/components/birthday/cake.vue';
import Balloon from '@/components/birthday/balloon.vue';

@Options({
  components: {
    Cake,
    Balloon,
  },
})
export default class Birthday extends Vue {
  // 是否有权限
  hasAuth = false;

  // 问题答案
  answer = '';

  // 音乐播放器
  musicPlayer: HTMLDivElement|undefined;

  // video组件
  videoEle: HTMLAudioElement|undefined;

  // 小王子
  littlePrince: HTMLDivElement|undefined;

  // 蛋糕
  cake: HTMLDivElement|undefined;

  // 普通气球
  normalBalloons: NodeList|undefined;

  // 是否播放音乐
  isPlayMusic = false;

  // 说话框
  speechBubble: HTMLElement|null = null;

  // 说话定时器
  speakInterval: number|undefined;

  /**
   * 初始化页面
   */
  init():void {
    document.title = '生日快乐';
    const iconEl = document.getElementById('icon') as HTMLLinkElement;
    if (iconEl) {
      iconEl.href = 'img/birthday/favicon.ico';
    }
  }

  /**
   * 校验答案
   */
  validateAnswer():void {
    if (this.answer === '我爱你') {
      this.hasAuth = true;
      this.$nextTick(async () => {
        await this.startAnimate();
        this.speak();
      });
    } else {
      alert('曾经有一份真诚的爱情摆在你的面前，但是你没有珍惜。等到了失去的时候才后悔莫及，尘世间最痛苦的事莫过于此。如果上天可以给你一个机会再来一次的话，你会对他说三个字：_______');
    }
  }

  /**
   * 初始化动画元素
   */
  initStaff():void {
    this.normalBalloons = document.querySelectorAll('.normal-balloon');
    this.videoEle = document.getElementById('videoEle') as HTMLAudioElement;
    this.musicPlayer = document.getElementById('musicPlayer') as HTMLDivElement;
    this.littlePrince = document.getElementById('littlePrince') as HTMLDivElement;
    this.cake = document.getElementById('cake') as HTMLDivElement;
    this.speechBubble = document.getElementById('speechBubble');
  }

  /**
   * 播放音乐
   */
  playMusic():void {
    if (!this.videoEle) return;
    if (this.isPlayMusic) {
      this.videoEle.pause();
      this.isPlayMusic = false;
    } else {
      this.videoEle.play();
      this.isPlayMusic = true;
    }
  }

  /**
   * 音乐播放器动画
   */
  animateMusicPlayer():anime.AnimeInstance {
    this.playMusic();
    return anime({
      targets: this.musicPlayer,
      bottom: 18,
      duration: 1000,
      easing: 'linear',
    });
  }

  /**
   * 气球动画
   */
  animateBalloon():anime.AnimeTimelineInstance {
    const balloonTimeline = anime.timeline({
      easing: 'linear',
      duration: 3000,
    });

    if (this.normalBalloons) {
      this.normalBalloons.forEach((balloon: Node, index: number) => {
        balloonTimeline.add({
          targets: balloon,
          keyframes: [
            { top: 30 },
          ],
        }, 1000 + index * 1000);
      });
    }

    return balloonTimeline;
  }

  /**
   * 小王子和蛋糕动画
   */
  animateCakeAndPeople():anime.AnimeInstance {
    return anime({
      targets: this.littlePrince?.parentElement,
      left: '50%',
      duration: 3000,
      easing: 'linear',
    });
  }

  /**
   * 开始动画
   */
  async startAnimate():Promise<void> {
    this.initStaff();
    await this.animateMusicPlayer().finished;
    await this.animateBalloon().finished;
    return this.animateCakeAndPeople().finished;
  }

  /**
   * 说祝福
   */
  speak(): void {
    if (!this.speechBubble) return;
    const words = this.speechBubble.innerHTML;
    let process = 0;
    this.speechBubble.innerHTML = '';
    this.speechBubble.style.opacity = '1';
    clearInterval(this.speakInterval);
    this.speakInterval = setInterval(() => {
      const current = words.slice(process, process + 1);
      if (current === '<') {
        process = words.indexOf('>', process) + 1;
      } else {
        process += 1;
      }
      if (this.speechBubble) {
        this.speechBubble.innerHTML = `${words.slice(0, process)}${process % 2 === 0 ? '_' : ''}`;
        if (process >= words.length) {
          clearInterval(this.speakInterval);
          this.speechBubble.innerHTML = words;
        }
      }
    }, 100);
  }

  mounted():void {
    this.init();
  }
}
</script>

<style lang="scss" scoped>
.birthday {
  $balloon-width: 104px;
  $balloon-height: 140px;
  $balloon-gap: 20px;
  $balloon-origin-margin-left: calc($balloon-width  / -2);

  $music-player-height: calc(400 / 2) * 1px;
  $music-player-width: calc(300 / 2) * 1px;

  $prince-width: 300px;
  $prince-height: 400px;

  $cake-width: 250px;
  $cake-height: 200px;

  $speech-bubble-width: 400px;
  $speech-bubble-height: 300px;

  $cake-prince-wrapper-width: $prince-width + $cake-width;

  position: relative;
  height: 100vh;
  background-image: radial-gradient(#374566, #010203);
  overflow: hidden;

  .entry-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #fff;
  }

  .main-container {
    position: relative;
    .normal-balloon {
      position: fixed;
      bottom: -$balloon-height - 10px;
      left: 50%;
      margin-left: $balloon-origin-margin-left;

      &:nth-child(1) {
        margin-left: $balloon-origin-margin-left + (-$balloon-width * 2.5 - 50px);
      }

      &:nth-child(2) {
        margin-left: $balloon-origin-margin-left + (-$balloon-width * 1.5 - 30px);
      }

      &:nth-child(3) {
        margin-left: $balloon-origin-margin-left + (-$balloon-width * 0.5 - 10px);;
      }

      &:nth-child(4) {
        margin-left: $balloon-origin-margin-left + ($balloon-width * 0.5 + 10px);
      }

      &:nth-child(5) {
        margin-left: $balloon-origin-margin-left + ($balloon-width * 1.5 + 30px);
      }

       &:nth-child(6) {
        margin-left: $balloon-origin-margin-left + ($balloon-width * 2.5 + 50px);
      }
    }

    #musicPlayer {
      position: fixed;
      left: 50%;
      margin-left: calc($music-player-width / -2) + ($balloon-width * 2.5 + 50px);
      bottom: -$music-player-height;
      width: $music-player-width;
      height: $music-player-height;
      background: url('~@/assets/img/birthday/music-player.png') center center/100% 100% no-repeat;
      cursor: pointer;
    }

     #videoEle {
      display: none;
    }

    .cake-prince-wrapper {
      position: fixed;
      width: $cake-prince-wrapper-width;
      bottom: 20px;
      left: -$cake-prince-wrapper-width;
      margin-left: calc($cake-prince-wrapper-width / -2);

      #littlePrince {
        position: absolute;
        bottom: 0;
        left: 0;
        width: $prince-width;
        height: $prince-height;
        background: url('~@/assets/img/birthday/little-prince.png')
          center center/100% 100% no-repeat;
      }

      #cake {
        position: absolute;
        bottom: 20px;
        left: $prince-width - 60px;
      }
    }

    #speechBubble {
      position: absolute;
      bottom: 30px;
      left: -$speech-bubble-width + 40px;
      opacity: 0;
      width: $speech-bubble-width;
      height: $speech-bubble-height;
      background: #ffe;
      border-radius: 20px;
      text-align: left;
      padding: 10px;
      line-height: 26px;
      font-size: 16px;
      transition: 0.3s all;

      &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: #ffe;
        border-right: 0;
        margin-top: -20px;
        margin-right: -20px;
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
