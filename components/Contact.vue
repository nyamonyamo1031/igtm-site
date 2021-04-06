<template>

    <div class="contact-form">
      <div class="contact-form__item">
        <div class="contact-form__title">お名前 <span class="required">必須</span></div>
        <input type="text" v-model="contactName" required maxlength='100'>
        <div class="contact-form__error" v-if="validateNameFlag">
          <p>{{validateNameMessage}}</p>
        </div>
      </div>
      <div class="contact-form__item">
        <div class="contact-form__title">メールアドレス <span class="required">必須</span></div>
        <input type="email" v-model="contactMail" required  maxlength='100'>
        <div class="contact-form__error" v-if="validateMailFlag">
          <p>{{validateMailMessage}}</p>
        </div>
      </div>
      <div class="contact-form__item">
        <div class="contact-form__title">お問い合わせ内容 <span class="required">必須</span></div>
        <textarea v-model="contactText" ols="30" rows="10" required  maxlength='10000'></textarea>    
        <div class="contact-form__error" v-if="validateTextFlag">
          <p>{{validateTextMessage}}</p>
        </div>
      </div>
      <div class="contact-form__privacy-policy">
        <NuxtLink to="/privacy" class="link" target="_blank">個人情報保護方針</NuxtLink>への同意<span class="required">必須</span>
        <input type="checkbox" value="checkbox" v-model="contactCheckbox">
        <div class="contact-form__error" v-if="validateCheckboxFlag">
          <p>個人情報保護方針への同意をチェックしてください</p>
        </div>
      </div>
      <div class="button-wrap button-wrap--center">
        <div class="button button--blue" @click="validateConfirmation" >確認画面へ</div>
      </div>

    <ModalContactConf 
    v-if="modalViewFlag"
    :contactName=this.contactName
    :contactMail=this.contactMail
    :contactText=this.contactText
    @modalClose="contactModalStus"
    v-on:keyup.esc="modalViewFlag = false"
     />
  </div>

</template>

<style lang="scss">

/*--- contact ---*/
.contact-form{
        max-width:60rem ;
        margin: 0 auto;
    &__item{
        margin-bottom: 2rem;

    }
    &__title{
        font-weight: bold;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        
    }
    &__item input{
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 5rem;
        width: 100%;
        padding:1rem;
        box-sizing: border-box;
    }
    &__item textarea{
        display: block;
        height: 15rem;
        width: 100%;
        padding: 1rem;  
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    &__privacy-policy{
        margin-bottom: 2rem;
        font-weight: bold;
    }
    &__privacy-policy input[type="checkbox"]{
        margin: 0 1rem;
        
          box-sizing: border-box;
    } 
    &__error{
      color: #ff0000;
      border: #ff0000 1px solid;
      padding: 1.0rem;
      margin:1.5rem 0 4rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
}

@media screen and (max-width:900px) {
  /*--- contact-form ---*/
  .contact-form{
    &__item{
        flex-direction: column;
      }
    &__title{
        width: 100%;
        text-align: left;
        padding: 0 1.4rem 0 0 ;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data(){
    return{
      modalViewFlag: false ,
      contactName: "",
      contactMail: "",
      contactText: "",
      contactCheckbox: "",
      validateNameFlag:false,
      validateMailFlag:false,
      validateTextFlag:false,
      validateCheckboxFlag:false,
      validateNameMessage:"",
      validateMailMessage:"",
      validateTextMessage:""
    }
  },
  methods:{
    showViewModal:function(){
      this.modalViewFlag = true
    },
    contactModalStus:function(){
      this.contactName= ""
      this.contactMail= ""
      this.contactText= ""
      this.contactCheckbox= ""
      this.modalViewFlag = false
    },
    validateConfirmation:function(){
     //エラー表示する
     //多分ここ書き換えることになる。
      const validateConfName = this.validateName()
      const validateConfMail = this.validateMail()
      const validateConfText = this.validateText()
      const validateConfCheckbox = this.validateCheckbox()

     if (validateConfName && validateConfMail &&validateConfText &&validateConfCheckbox){
       this.showViewModal()
     }
      
      //this.showViewModal()
    },
    //nameのバリデーションチエック
    validateName:function(){
      //初期設定
      let validateCheckFlag = false
      this.validateNameFlag = true
      if(this.checkBlank(this.contactName)){
        this.validateNameFlag=false
        validateCheckFlag = true
      }else{
        this.validateNameMessage="お名前を入力してください"
      }
      if(!this.checkWordCount(100,this.contactName)){
        this.validateNameMessage="100文字いないで入力してください"
        validateCheckFlag = false
        this.validateNameFlag = true
      }
      return validateCheckFlag
    },
    //mailのバリデーションチエック
    validateMail:function(){
      let validateCheckFlag = false
      this.validateMailFlag = true
      if(this.checkBlank(this.contactMail)){
        this.validateMailFlag=false
        validateCheckFlag = true
          if(!this.checkMailRegexp(this.contactMail)){
            console.log("checkMailRegexp")
            this.validateMailMessage="正しい形式のメールアドレスを入力してください"
            this.validateMailFlag=true
            validateCheckFlag = false
          }
      }else{
        this.validateMailMessage="メールアドレスを入力してください"
      }
     if(!this.checkWordCount(100,this.contactMail)){
        console.log("checkWordCount")
        validateCheckFlag = false
        this.validateMailFlag=true
        this.validateMailMessage="100文字いないで入力してください"
      }
      return validateCheckFlag
    },  
    //Textのバリデーションチエック
    validateText:function(){
      //初期設定
      let validateCheckFlag = false
      this.validateTextFlag = true
      if(this.checkBlank(this.contactText)){
        this.validateTextFlag=false
        validateCheckFlag = true
      }else{
        this.validateTextMessage="お問い合わせを入力してください"
      }
      if(!this.checkWordCount(1000,this.contactText)){
        this.validateTextMessage="10000文字いないで入力してください"
        validateCheckFlag = false
        this.validateTextFlag = true
      }
      return validateCheckFlag
    },
    //Checkboxのバリデーションチエック
    validateCheckbox:function(){
      let validateCheckFlag :boolean
      if(!this.contactCheckbox){
        this.validateCheckboxFlag=true
        validateCheckFlag = false
      }else{
         this.validateCheckboxFlag=false
        validateCheckFlag = true
      }
      return validateCheckFlag
    },
    checkWordCount:function(maxlength: number,formKind: string){
      let checkWord = false
      if(formKind.length<=maxlength){
          checkWord =true
      }
      return checkWord
    },
    checkBlank:function(formKind: string){
      let checkBlankFlag = false
        if(formKind!=""){
            checkBlankFlag =true
        }
        return checkBlankFlag
    },
    checkMailRegexp:function(formKind: string){
      let checkMailRegexpFlag = false
      const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
      if(regexp.test(formKind)) {
          //正しい形式のメールアドレスの場合　checkMailRegexpFlagはtrueとなる。
          checkMailRegexpFlag = true
      }else{
        console.log("正しくない")
      }
      return checkMailRegexpFlag
    }
  }
})
</script>

