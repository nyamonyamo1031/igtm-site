<template>
<div class="sub-contents portfolio">
  <Breadcrumb :breadcrumb=this.breadcrumb />
    <h1 class="sub-contents__title">
        <div class="sub-contents__title-eng">PORTFOLIO</div>
        <div class="sub-contents__title-jp">ポートフォリオ</div>
    </h1>
    <p>ポートフォリオは現在準備中です。</p>
    <div style="padding:0 0 40rem 0">
        
    </div>
 
</div>
</template>
<script lang="ts">
export default {
  head: {
    title: 'iGtm ポートフォリオ | Webサイト作成、Web開発までやる夫婦',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '私たちがお客様に提供できるWebサイト、Webサイトのデザイン、Webサービスをポートフォリオとして掲載しました。'
      }
    ],
  },
  data(){
    return{
      breadcrumb:"ポートフォリオ"
    }
  }
}
</script>

<style lang="scss">
.portfolio{
    p{
        text-align: center;
    }
}
</style>
