<template>
  <div class="home">
    <HeaderFe />
    <CarouselFe />
    <WomenBanner />
    <InstagramSection />
    <ParnerLogo/>
    <FooterFe/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderFe from '@/components/HeaderFe.vue'
import CarouselFe from '@/components/CarouselFe.vue'
import WomenBanner from '@/components/WomenBanner.vue'
import InstagramSection from '@/components/InstagramSection.vue'
import ParnerLogo from '@/components/ParnerLogo.vue'
import FooterFe from '@/components/FooterFe.vue'
export default {
  name: 'HomeView',
  components: {
    HeaderFe,
    CarouselFe,
    WomenBanner,
    InstagramSection,
    ParnerLogo,
    FooterFe
}
}
</script>
