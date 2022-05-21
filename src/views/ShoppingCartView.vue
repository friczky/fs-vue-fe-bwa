<template>
  <div class="ShoppingCart">
    <HeaderFe />
    <ShoppingCartFe />
    <ParnerLogo/>
    <FooterFe/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderFe from '@/components/HeaderFe.vue'
import ParnerLogo from '@/components/ParnerLogo.vue'
import ShoppingCartFe from '@/components/ShoppingCartFe.vue'
import FooterFe from '@/components/FooterFe.vue'
export default {
  name: 'ShoppingCart',
  components: {
    HeaderFe,
    ShoppingCartFe,
    ParnerLogo,
    FooterFe
}
}
</script>
