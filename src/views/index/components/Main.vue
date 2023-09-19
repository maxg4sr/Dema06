<template>
  <el-container>
        <el-main>
          <section class="hero">
              <div class="hero__text">
<!--                <img :src="require('@/img/hero.png')" alt="">-->
                <h4 style="color: aquamarine">歡迎來到Dream Come True</h4>
                <h2>打造你的完美婚禮</h2>
                <p>從心出發  只講究  不將就  打造一期一會的享婚人生</p>
              </div>
          </section>
        </el-main>

  </el-container>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped>

.hero {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(~@/img/hero.png);
}

.hero__text {
  max-width: 50%;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
}




</style>