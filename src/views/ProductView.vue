<template>
  <div class="product">
    <HeaderFe />
    <ProductFe />
    <ParnerLogo />
    <FooterFe />
  </div>
</template>

<script>
import HeaderFe from '@/components/HeaderFe.vue'
import FooterFe from '@/components/FooterFe.vue'
import ProductFe from '@/components/ProductFe.vue'
import ParnerLogo from '@/components/ParnerLogo.vue'
export default {
    name:'ProductView',
    components:{
    HeaderFe,
    FooterFe,
    ParnerLogo,
    ProductFe,
}
}
</script>

<style>

</style>