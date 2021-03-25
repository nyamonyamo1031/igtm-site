<template>
  <div class="page">
    <Header />
    <div class="main">
    <Nuxt />
    </div>
    <Footer />
    <Totop />
  </div>
</template>

<style lang="scss">
.page{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
.main{
    padding-top:7.5rem;
}
</style>