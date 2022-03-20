<template>
  <div class="letter">
    <div ref="letter" class="letter__content">
      <p>
        CBA顺德赛区组委会：
      </p>
      <p>
        今年3月，2021-2022赛季CBA联赛常规赛第三阶段在顺德激情开战。
        22天的赛期里，CBA联赛的10支球队在顺德为广大球迷奉献了50场精彩的比赛，一场场篮球盛宴让顺德掀起了运动热潮。
      </p>
      <p>
        我是CBA的小球迷，也是一名新顺德人。
        得知CBA常规赛第三阶段要来顺德举办，我感到无比激动。
        为了近距离感受CBA赛事，我购买了北控VS广东的球票。
        进场前，工作人员详细检查了我的48小时核酸检测、行程卡等信息。
        进场后，热情的志愿者将我引导到观赛区域。
        找到自己的座位后，我领取到了“嚟顺德 一定得“的KT板。
        在赛事开场、暂停和中场休息期间，广大球迷朋友们热情地举起KT板挥舞，为心爱的球队加油助威，展现出超高的素质和良好的形象。
      </p>
      <p>
        在此，感谢CBA顺德赛区组委会，在疫情防控不可松懈的背景下，顺德有勇气有魄力承办大型体育赛事，其中的艰辛可想而知。
        是你们在做好疫情防控的基础上，全力以赴做好管理和服务工作，为CBA赛事的顺利进行提供了强有力的支持和保障，也让广大球迷在家门口感受到了CBA赛事的热情与火爆！
      </p>
      <p>CBA顺德球迷</p>
      <p>2022年3月23日</p>
    </div>
    <div class="letter__bg"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';

@Options({
})
export default class letter extends Vue {
  writeInterval: number|undefined;

  letter: HTMLElement|undefined;

  letterElements: Element[] = [];

  letterContents: string[] = [];

  write():void {
    if (!this.letter) return;
    this.letter.style.opacity = '1';
    let currentElementIndex = 0;
    let process = 0;

    this.writeInterval = setInterval(() => {
      if (currentElementIndex >= this.letterElements.length) {
        clearInterval(this.writeInterval);
        return;
      }
      const currentElement = this.letterElements[currentElementIndex];
      const currentText = this.letterContents[currentElementIndex];
      if (process >= currentText.length) {
        currentElement.innerHTML = currentText;
        currentElementIndex += 1;
        process = 0;
        return;
      }
      process += 1;
      currentElement.innerHTML = `${currentText.slice(0, process)}${process % 2 === 0 ? '_' : ''}`;
    }, 100);
  }

  mounted():void {
    this.letter = this.$refs.letter as HTMLElement;
    this.letterElements = [...this.letter.children];
    this.letterElements.forEach((element) => {
      this.letterContents.push(element.innerHTML);
      element.innerHTML = '';
    });
  }
}
</script>

<style lang="scss">
.letter {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgb(255, 250, 239);
  border: 3px solid rgb(255, 206, 136);
  font-size: 17px;
  overflow: auto;

  &__bg {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url('~@/assets/img/bg-letter-basketball.png') left bottom/100% auto no-repeat;
    opacity: 0.2;
  }

  &__content {
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    opacity: 0;

    p {
      line-height: 1.5em;
      text-indent: 2em;

      &:first-child {
        text-indent: 0;
      }

      &:nth-last-child(1),  &:nth-last-child(2) {
        text-align: right;
      }
    }
  }
}
</style>
