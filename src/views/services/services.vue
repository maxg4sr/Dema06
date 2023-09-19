<template>
  <div>
    <HeaderAll/>
    <Breadcrumb />
    <ServicesSection />
    <PricingSection />
    <RequestFormSection />
    <FooterAll />
  </div>
</template>

<script>
import Breadcrumb from "@/views/services/components/Breadcrumb.vue";
import ServicesSection from "@/views/services/components/ServicesSection.vue";
import PricingSection from "@/views/services/components/PricingSection.vue";
import RequestFormSection from "@/views/services/components/RequestFormSection.vue";
import HeaderAll from "@/views/header/HeaderAll";
import FooterAll from "@/views/footer/FooterAll";


export default {
  components: {
    FooterAll,
    HeaderAll,
    Breadcrumb,
    ServicesSection,
    PricingSection,
    RequestFormSection,
  }
  // 你可以在這裡添加父組件的數據和方法
}
</script>