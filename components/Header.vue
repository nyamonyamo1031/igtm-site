<template>

<header class="header" id="header">
    <div class="header__inner">
        <div class="header__logo">
            <NuxtLink to="/" class=" header__nav-link">
            <img src="~/assets/image/header_logo_04.png" alt="logo" title="logo">
            </NuxtLink>
        </div>
        <input type="checkbox" id="sp-menu" class="header__sp-menu-check">
        <label class="header__sp-menu" for="sp-menu"></label>
        <div class="header__nav">
            <ul class="header__nav-list">
                    <li class="header__nav-list-item">
                    <NuxtLink to="/" class="header__nav-link">
                            トップ<i class="fad fa-humidity"></i>
                        </NuxtLink>
                    </li>
                    
                    <li class="header__nav-list-item">
                    <NuxtLink to="/portfolio" class="header__nav-link">
                            ポートフォリオ
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-item">
                        <NuxtLink to="contact" class="header__nav-link">
                        お問い合わせ
                        </NuxtLink>
                    </li>
                    <li class="header__nav-list-item">
                    <div class="header__sns">
                        <div class="header__sns-item">
                            <a href="https://twitter.com/c_nyamo" target="_blank">
                                <font-awesome-icon :icon="['fab', 'twitter']" :class="['header__icon']" ></font-awesome-icon>
                            </a>
                        </div>
                        <div class="header__sns-item">
                            <a href="https://github.com/nyamonyamo1031" target="_blank">
                                <font-awesome-icon :icon="['fab', 'github']"  :class="['header__icon']" ></font-awesome-icon>
                            </a>
                        </div>
                    </div>
                    </li>
            </ul>
        </div>
    </div>
</header>
</template>
<style lang="scss">

.header{
    position: relative;
    background-color: #fff;
    box-shadow: 0 4px 6px 0 rgba(12, 0, 46 ,0.06);
    position: fixed;
    width: 100%;
    height: 7.5rem;
    z-index: 100;

    &__inner{
      display: flex;
      max-width: 100rem;
      margin: 0 auto;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 4rem;
      box-sizing: border-box;
    }

    a{
        display: block;
    }

    &__logo img{
      width: 90px;
    }
    
    &__nav-list{
      display: flex;
      align-items: center;
    }

    &__nav-list-item + .header__nav-list-item{
      margin-left: 4rem;
    }

    &__nav-link{
      color: #273233;
      font-size: 1.8rem;
      font-weight: bold;
    }

    &__sp-menu{
      display: none;
    }

    &__sp-menu-check{
      display: none;
    }
    &__sns{
      display: flex;
    }
    &__sns-item + .header__sns-item {
      margin-left: 2rem;
    }
    &__icon{
    font-size: 3rem;
  }
}

@media screen and (max-width:900px) {
  .header .header__nav{
      display: none;
  }
  .header .header__inner{
      padding: 0 1.5rem;
      height: 100%;
  }
  .header .header__sp-menu{
      display: block;
      height: 30px;
      width: 35px;
      border-top: solid 3px #000;
      box-sizing: border-box;
      border-bottom: solid 3px #000;
      position: relative;
  }
  .header .header__sp-menu::after{
      content: "";
      width: 0;
      display: block;
      background: #000;
      height: 3px;
      top: 48%;
      position: absolute;
  }
  .header .header__sp-menu::before{
      content: "";
      width: 100%;
      display: block;
      background: #000;
      height: 3px;
      top: 48%;
      position: absolute;
  }
  .header .header__nav-list{
      flex-direction: column;
  }
  .header .header__nav-list-item{
      margin: 0;
      text-align: center;
      width: 100%;
  }
  .header .header__nav-list-item + .header__nav-list-item {
      border-top: 1px dotted #000;
      margin: 0;
  }


  .header .header__sns{
      justify-content: center;
  }

  .header .header__nav-link{
      display: block;
      padding: 1.5rem;
  }
  .header .header__icon{
      padding: 1.5rem;
  }
  /*--- ハンバーガーメニューを押したら --- */
  .header .header__sp-menu-check:checked + .header__sp-menu{
      border: solid 0px #000;
  }
  .header .header__sp-menu-check:checked + .header__sp-menu::after{
      content: "";
      width: 100%;
      transform: translate(0,-50%) rotate(-45deg);
  }
  .header .header__sp-menu-check:checked + .header__sp-menu::before{
      content: "";
      transform: translate(0,-50%) rotate(45deg);
  }
  .header .header__sp-menu-check:checked + .header__sp-menu + .header__nav{
      display: block;
      position: absolute;
      top: 100%;
      background: #fff;
      width: 100%;
      left: 0;
  }

}
</style>