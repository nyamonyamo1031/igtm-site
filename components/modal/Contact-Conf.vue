<template>
<div>
  <div class="open-modal"></div>
  <div class="modal">
    <div class="contact-conf" v-if="cntactConfFlag">
        <div class="send-error" v-if="sendErrorFlag">
          <p>エラーが発生しました。</p>
        </div>
        <div class="modal__title">確認画面</div>
        <p>こちらで送信します。よろしいですか?</p>
        <div class="contact-conf__list">
          <div class="contact-conf__list-item">
            <div class="contact-conf__title">お名前</div>
            <div class="contact-conf__content"><p>{{ contactName }}</p></div>
          </div>
          <div class="contact-conf__list-item">
            <div class="contact-conf__title">メールアドレス</div>
            <div class="contact-conf__content">{{ contactMail }}</div>
          </div>
          <div class="contact-conf__list-item">
            <div class="contact-conf__title">お問い合わせ内容</div>
            <div class="contact-conf__content contact-conf__content--text">{{ contactText }}</div> 
          </div>
        </div>
        <div class="button-wrap button-wrap--row button-wrap--center">
            <div class="button button--black" @click="closeViewModal">修正する</div>
              <form type="post" @submit.prevent="contactSend">
                <input type="hidden" name="entry.1564609640" v-bind:value=contactName id="name"> 
                <input type="hidden" name="entry.1311768031" v-bind:value=contactMail > 
                <input type="hidden" name="entry.1703325099" v-bind:value=contactText > 
                <input type="submit" value="送信する" class="button button--pink">
            </form>
        </div>
      </div>
      <div class="contact-done" v-if="cntactDoneFlag">
        <div class="modal__title">お問い合わせ完了</div>
        <p>お問い合わせ完了しました。</p>
        <p>担当者からご連絡させていただきます。</p>
        <div class="button-wrap button-wrap--row button-wrap--center">
            <div class="button button--black" @click="closeViewModal">戻る</div>
        </div>
      </div>
  </div>
</div>
</template>
<style lang="scss">
.contact-conf{
  width:100%;
    &__list-item{
      padding: 1.0rem 0;
    }
    &__list-item+ .contact-conf__list-item{
      border-top: 1px solid #ccc;
      
      
    }
    &__title{
      font-weight: bold;
      font-size:1.6rem;
    }
    &__content{
      white-space: pre-wrap;
    }
    &__content--text{
      overflow: scroll;
      height: auto;
      max-height: 100px;
    }
}

</style>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data(){
    return{
      sendErrorFlag:false,
      cntactConfFlag:true,
      cntactDoneFlag:false,
    }
  },
  props: {
    contactName: String,
    contactMail: String,
    contactText: String
  },


  methods: {
    closeViewModal:function(){
      //この関数が実行されたら、html要素にopen-modalを削除する
      //　document.getElementById('page').classList.remove("open-modal")
      //親のcomponentに
      this.$emit('modalClose')
    },
    contactSend:function(){
     const submitParams = new FormData()
      submitParams.append('entry.1564609640', this.contactName);
      submitParams.append('entry.1311768031', this.contactMail);
      submitParams.append('entry.1703325099', this.contactText);

      //送信されずエラーの場合の処理を作る
     const GOOGLE_FORM_ACTION =  location.origin + '/formsapi/forms/u/6/d/e/1FAIpQLSflfwwo4enTrdoZ8HwVCSLgUHz17GfcLsSquaHx300QDkSjFw/formResponse'
     try{
      axios.post(GOOGLE_FORM_ACTION, submitParams)
        .then(res => {
          console.log("データ送信されました")
          this.contactDone()
          // this.$router.push('/')
        })
     }catch(e){
       console.log("dddd")
     }

    },
    //送信完了された場合実行される関数
    contactDone:function(){
      this.cntactConfFlag=false
      this.cntactDoneFlag=true
    }
  }

})


</script>

