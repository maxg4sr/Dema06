<template>
  <div>
    <HeaderAll/>
    <BlogDetails/>
    <FooterAll/>
  </div>

</template>

<script>
import HeaderAll from "@/views/header/HeaderAll";
import Test from "@/views/blog/components/test";
import FooterAll from "@/views/footer/FooterAll";
import BlogDetails from "@/views/blog/components/BlogDetails";
import BlogContent from "@/views/blog/components/BlogContent";
import BlogSidebar from "@/views/blog/components/BlogSidebar";


export default {
  name: "blog",
  components: {
    BlogSidebar,
    BlogContent,
    BlogDetails,
    FooterAll,
    Test,
    HeaderAll,

  }
}
</script>

<style scoped>


</style>