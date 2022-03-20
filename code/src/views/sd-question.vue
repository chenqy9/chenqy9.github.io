<template>
  <div class="sd-question">
    <!-- <div class="bg-header"></div> -->
    <img class="bg-header" src="~@/assets/img/bg-answer-cover.jpeg">
    <div v-show="!isStart && !isAllRight" class="cover">
      <div class="title">
        <p>“顺德承办CBA赛事”</p>
        <p>趣味问答</p>
      </div>
      <div class="start-btn" @click="start">
        开始答题
      </div>
    </div>
    <div v-show="isStart && !isAllRight" class="exam">
      <div class="exam__wrapper">
        <div class="question">
          <span class="index">{{ currentQuestionIndex + 1 }}、</span>
          <span class="content">{{ questions[currentQuestionIndex].q }}</span>
        </div>
        <ul class="choice" :key="currentQuestionIndex">
          <li v-for="(item, index) of questions[currentQuestionIndex].c" :key="index">
            <input
              type="radio"
              name="answer"
              :value="item.value"
              :id="`q-${index}`"
              @click="choose"
            >
            <label :for="`q-${index}`">{{ item.value }}、{{ item.label }}</label>
          </li>
        </ul>
        <div v-show="currentAnswer !== ''" class="message">
          <span v-show="isRight" class="message__right">恭喜你，答对了！</span>
          <span v-show="!isRight" class="message__error">抱歉，答错了，再试一次吧！</span>
        </div>
        <div
          v-show="isRight && currentQuestionIndex < questions.length"
          class="btn-next"
          @click="next">
          下一题
        </div>
      </div>
    </div>
    <div v-show="isAllRight" class="result">
      <p>真棒！你成功答对了所有题目！</p>
      <p>耗时：<span class="cost-time">{{ totalTime }}</span> 秒</p>
      <p>快邀请你的朋友来一起PK吧！</p>
    </div>
    <img class="bg-footer" src="~@/assets/img/bg-letter-basketball.png">
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';

@Options({
})
export default class SdQuestion extends Vue {
  isStart = false;

  currentQuestionIndex = 0;

  currentAnswer = '';

  questions = [
    {
      q: '2021-2022赛季CBA联赛常规赛第三阶段的承办城市是？',
      c: [
        {
          value: 'A',
          label: '顺德',
        },
        {
          value: 'B',
          label: '沈阳和顺德',
        },
        {
          value: 'C',
          label: '沈阳',
        },
      ],
      a: 'B',
    },
    {
      q: 'CBA联赛常规赛第三阶段顺德赛区有多少支球队参加？',
      c: [
        {
          value: 'A',
          label: '10支',
        },
        {
          value: 'B',
          label: '15支',
        },
        {
          value: 'C',
          label: '20支',
        },
      ],
      a: 'A',
    },
    {
      q: 'CBA联赛常规赛第三阶段顺德赛区举行了多少场比赛？',
      c: [
        {
          value: 'A',
          label: '40场',
        },
        {
          value: 'B',
          label: '50场',
        },
        {
          value: 'C',
          label: '60场',
        },
      ],
      a: 'B',
    },
    {
      q: '以下哪支球队没有前来顺德赛区参赛？',
      c: [
        {
          value: 'A',
          label: '广东宏远',
        },
        {
          value: 'B',
          label: '北京首钢',
        },
        {
          value: 'C',
          label: '上海久事',
        },
      ],
      a: 'C',
    },
    {
      q: '以下哪些称号不是顺德的标签？',
      c: [
        {
          value: 'A',
          label: '世界美食之都',
        },
        {
          value: 'B',
          label: '全国龙舟之乡',
        },
        {
          value: 'C',
          label: '南国瓷都',
        },
      ],
      a: 'C',
    },
    {
      q: '以下哪道甜品最能代表顺德？',
      c: [
        {
          value: 'A',
          label: '双皮奶',
        },
        {
          value: 'B',
          label: '提拉米苏',
        },
        {
          value: 'C',
          label: '绿豆沙',
        },
      ],
      a: 'A',
    },
    {
      q: '以下哪个景区不在顺德区内？',
      c: [
        {
          value: 'A',
          label: '逢简水乡',
        },
        {
          value: 'B',
          label: '长隆欢乐世界',
        },
        {
          value: 'C',
          label: '华侨城欢乐海岸plus',
        },
      ],
      a: 'B',
    },
    {
      q: '以下那家企业总部不在顺德？',
      c: [
        {
          value: 'A',
          label: '美的',
        },
        {
          value: 'B',
          label: '碧桂园',
        },
        {
          value: 'C',
          label: '格力',
        },
      ],
      a: 'C',
    },
    {
      q: '顺德已经连续多少年蝉联全国百强区之首？',
      c: [
        {
          value: 'A',
          label: '8年',
        },
        {
          value: 'B',
          label: '10年',
        },
        {
          value: 'C',
          label: '12年',
        },
      ],
      a: 'B',
    },
    {
      q: '2021年，顺德工业总产值达到？',
      c: [
        {
          value: 'A',
          label: '6000亿',
        },
        {
          value: 'B',
          label: '8000亿',
        },
        {
          value: 'C',
          label: '超过1万亿',
        },
      ],
      a: 'C',
    },
  ]

  startTime = 0;

  endTime = 0;

  isAllRight = false;

  get isRight():boolean {
    return this.currentAnswer === this.questions[this.currentQuestionIndex].a;
  }

  get totalTime():string {
    return ((this.endTime - this.startTime) / 1000).toFixed(2);
  }

  start():void {
    this.isStart = true;
    this.startTime = new Date().getTime();
  }

  choose(event: Event):void {
    const target = event.target as HTMLInputElement;
    this.currentAnswer = target.value;
  }

  next(): void {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.isAllRight = this.isRight;
      this.endTime = new Date().getTime();
      return;
    }
    if (this.isRight || this.questions) {
      this.currentAnswer = '';
      this.currentQuestionIndex += 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.sd-question {
  position: relative;
  height: 100%;
  width: 100%;
  background: skyblue;
  font-size: 18px;

  .bg-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    opacity: 0.8;
  }

  .bg-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: auto;
    height: 280px;
    opacity: 0.5;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
  }

  .start-btn, .btn-next {
    margin-top: 20px;
    background-color: #3bb3e0;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    text-decoration: none;
    color: #fff;
    position: relative;
    padding: 10px 20px;
    padding-right: 50px;
    background-image: -webkit-gradient( linear, left bottom, left top,
    color-stop(0, rgb(44,160,202)), color-stop(1, rgb(62,184,229)) );
    border-radius: 5px;
    box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;

    &::before {
      background-color: #2591b4;
      background-image: url('~@/assets/img/right_arrow.png');
      background-repeat: no-repeat;
      background-position: center center;
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -9px;
      border-radius: 50%;
      box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
    }
  }

  .btn-next {
    position: absolute;
    z-index: 1000;
    width: 142px;
    left: 50%;
    transform: translateX(-50%);
  }

  .exam {
    position: absolute;
    padding: 20px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    line-height: 1.5em;

    &__wrapper {
      height: 250px;
    }

    .choice {
      width: 100%;
      padding-left: 20px;
      list-style: none;

      li {
        & + li {
          margin-top: 10px;
        }

        label {
          margin-left: 10px;
        }
      }
    }

    .message {
      padding-left: 20px;

      &__right {
        color: green;
      }

      &__error {
        color: red;
      }
    }
  }

  .result {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cost-time {
      font-weight: bold;
    }
  }
}
</style>
