<template>
<div class="sub-contents privacy">
  <Breadcrumb :breadcrumb=this.breadcrumb />
    <h1 class="sub-contents__title">
        <div class="sub-contents__title-eng">PRIVACY</div>
        <div class="sub-contents__title-jp">個人情報保護方針</div>
    </h1>
    <Privacy/>
 
</div>
</template>
<script lang="ts">
export default {
  head: {
    title: 'iGtm 個人情報保護方針 | Webサイト作成、Web開発までやる夫婦',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '個人情報保護方針のdescriptionを記載します。'
      }
    ],
  },
  data(){
    return{
      breadcrumb:"個人情報保護方針"
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
