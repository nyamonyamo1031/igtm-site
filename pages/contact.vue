<template>
<div class="sub-contents contact-sub">
  <Breadcrumb :breadcrumb=this.breadcrumb />
    <h1 class="sub-contents__title">
        <div class="sub-contents__title-eng">CONTACT US</div>
        <div class="sub-contents__title-jp">お問い合わせ</div>
    </h1>
    <p class="contact-sub__message">Webサイトの作成、デザインからコーディングまで幅広くご対応させていただきます。<br>
        既存サイトをもっとよくしたいなどのご要望も対応可能です。<br>
        また、Webアプリケーション開発案件の対応も行っております。<br>
        こちらのお問い1合わせよりなんでもご相談ください。<br>
        お問い合わせ後メールにて連絡させていただきます。</p>
        <Contact />
</div>
</template>

<script lang="ts">
export default {
  head: {
    title: 'iGtm お問い合わせ| Webサイト作成、Web開発までやる夫婦',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '私たちはWebサイト作成、Web開発行う夫婦です。新規のWebサイトの作成、既存Webサイトのコンテンツ追加、改修などのご要望があればこちらのお問い合わせからご相談ください。'
      }
    ],
  },
  data(){
    return{
      breadcrumb:"お問い合わせ"

    }
  }
}
</script>

<style lang="scss">
.contact-sub{
    &__message{
        text-align: center;
    }
}

</style>
