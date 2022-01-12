<template>
  <div class="birthday">
    happy birthday
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Birthday extends Vue {
  mounted():void {
    document.title = '生日快乐';
    const iconEl = document.getElementById('icon') as HTMLLinkElement;
    if (iconEl) {
      iconEl.href = 'img/birthday/favicon.ico';
    }
  }
}
</script>
