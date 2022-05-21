<template>
  <div class="SuccessView">
      <HeaderFe />
      <div class="d-flex success-checkout align-items-center justify-content-center">
        <div class="col col-lg-4 text-center">
            <img src="img/success-buy.png" alt="" width="294">
            <h3 class="mt-4">
                Sukses Terbayar!
            </h3>
            <p class="mt-2">
                Silakan tunggu update terbaru dari kami via email yang sudah Anda daftarkan sebelumnya.
            </p>
            <router-link to="/" class="primary-btn pd-cart mt-3">Back to Home</router-link>
        </div>
    </div>
      <PartnerLogo />
      <FooterFe />
  </div>
</template>

<script>
import HeaderFe from '@/components/HeaderFe.vue'
import PartnerLogo from '@/components/ParnerLogo.vue'
import FooterFe from '@/components/FooterFe.vue'
export default {
    name: "SuccessView",
    components: { HeaderFe,PartnerLogo,FooterFe }
}
</script>

<style>

</style>