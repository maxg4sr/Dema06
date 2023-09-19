<template>
  <div>
    <!-- 404 error page -->
    <div class="NotFound404">
    <section>
      <h1 aria-label="404"></h1>
      <h2 class="err-text">Oh~網頁找不到喔</h2>
      <p>Hm, the page you were looking for doesn't seem to exist anymore.</p>
      <router-link to="/views/index" class="back-to-home-link">Back to Home</router-link>
    </section>
    <!--//Error-Page-->
    </div>
  </div>
</template>


<script>
export default {
  name: "NotFound404"
}
</script>

<style scoped>

.NotFound404 {
  min-height: 100vh;
  background-size: contain; /* 背景圖片等比例縮放，完全包含在容器內 */
  text-align: center;
  background-image: url("/src/img/404/NotFound404-03.jpg");
  background-repeat: no-repeat; /* 避免背景圖片重複 */
  background-position: center center; /* 將圖片置中 */
  margin: 0;
}

.back-to-home-link:hover {
  color: red;
}
</style>