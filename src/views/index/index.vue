<template>
  <div class="home show-background">

    <HeaderAll/>
    <Main/>
    <Footer/>


  </div>
</template>

<script>
import HeaderAll from "@/views/header/HeaderAll";
import Main from "@/views/index/components/Main";
import Footer from "@/views/index/components/Footer";


export default {
  name: "index",
  components: {
    HeaderAll,
    Main,
    Footer,
  }
}
</script>

<style scoped>

</style>