<template>
<footer class="footer">
    <div class="footer__inner">
        <div class="footer__logo">
            <NuxtLink to="/">
            <img src="~/assets/image/footer_logo_03.png" alt="logo" title="logo">
                </NuxtLink>
        </div>
        <div class="footer__nav">
            <ul class="footer__nav-list">
                <li class="footer__nav-list-item">
                    <NuxtLink to="/" class="footer__nav-link">
                        トップ
                    </NuxtLink>
                </li>
                <li class="footer__nav-list-item">
                    <NuxtLink to="/portfolio" class="footer__nav-link">
                        ポートフォリオ
                    </NuxtLink>
                </li>
                <li class="footer__nav-list-item">
                    <NuxtLink to="/privacy" class="footer__nav-link">
                        個人情報保護方針
                    </NuxtLink>
                </li>
                <li class="footer__nav-list-item">
                    <NuxtLink to="/contact" class="footer__nav-link">
                        お問い合わせ
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="footer__sns">
            <div class="footer__sns-item">
                <a href="https://twitter.com/c_nyamo" target="_blank">
                    <i class="fab fa-twitter footer__icon"></i>
                </a>
            </div>
            <div class="footer__sns-item">
                <a href="https://github.com/nyamonyamo1031" target="_blank">
                    <i class="fab fa-github footer__icon"></i>
                </a>
            </div>
        </div>
        <div class="footer__copylight">
            <small class="footer__copylight">&copy; iGtm</small>
        </div>
    </div>  
</footer>
</template>

<style lang="scss">
 .footer{
    background: #273233;
    color: #fff;
    padding: 4rem 2rem;
    &__inner{

    }
    &__logo{
        margin-bottom: 2rem;
    }
    &__nav-list{
        display: flex;
        align-items: center;
        justify-content: center;margin-bottom: 2rem;
    }
    &__nav-list-item{
        text-align: center;
        
        padding: 1rem;
    }
    &__nav-link{
        color: #fff;
    }
    &__copylight{
        text-align: center;
    }
    &__sns{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__sns-item{
        padding: 1rem 1.5rem;
    }
    &__icon{
        color: #fff;
        font-size: 2.5rem;
    }
    &__copylight{
    font-size: 1.4rem;
    }
    &__logo img {
        width: 113px;
    }
}

@media screen and (max-width:900px) {
    /*--- .footer ---*/
    .footer .footer__nav-list{
        flex-direction: column;
        margin-bottom: 0;
    }
}
</style>