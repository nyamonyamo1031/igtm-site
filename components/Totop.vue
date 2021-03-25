<template>
    <div class="to-top">
        <nuxt-link v-scroll-to="'#header'" to> 
            <font-awesome-icon :icon="['fas', 'angle-up']" />
        </nuxt-link>
    </div>
</template>

<style lang=scss>
.to-top{
    position: fixed;
    bottom: 30px;
    right: 40px;
    height: 50px;
    width: 50px;
    box-sizing: border-box;
    background: #FE657F;
    font-size: 3rem;
    text-align: center;
    padding: 0.2rem 0 0 0;
    border-radius: 5px;

    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    a{
        display: block;
        color: #fff;
    }
}

@media screen and (max-width:900px) {
    /*--- contents ---*/
    .to-top{
        bottom: 10px;
        right: 10px;
        height: 35px;
        width: 35px;
        box-sizing: border-box;
        background: #FE657F;
        font-size: 2rem;
        text-align: center;
        padding: 0.2rem 0 0 0;
    }
}
</style>
