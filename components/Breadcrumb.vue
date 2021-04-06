<template>
<div class="breadcrumb">
  <ul class="breadcrumb__list">
      <li class="breadcrumb__list-item">
        <NuxtLink to="/" class="breadcrumb__link">
            トップ
        </NuxtLink>
      </li>
      <li class="breadcrumb__list-item">{{breadcrumb}}</li>
  </ul>
</div>

</template>

<style lang="scss">
.breadcrumb{
  &__list{
    display: flex;
  }
  &__list-item + .breadcrumb__list-item::before{
    content: ">";
    margin: 0 1rem;
    font-weight: bold;
  }
  &__link{
    font-weight: bold;
    border-bottom: 1px solid #000;
  }
  
}
@media screen and (max-width:900px) {
.breadcrumb{
    &__list{
      display: block;
    }
  }
}
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    breadcrumb: String
  },
})
</script>

