<template>
  <div>
    <HeaderAll/>
    <el-container>
      <el-main>
        <div class="about__text">
          <img :src="require('@/img/about/about-sigh01.jpg')" alt="" class="ceo-sigh" style="">
          <img :src="require('@/img/about/about-ceo03.png')" alt="" class="ceo-image">
          <i><p class="ceo-title">Dream Come True總監 CEO / 創辦人</p></i>
          <div class="h2">
            <h2>從心出發 只講究 不將就
            <br>打造一期一會的享婚人生!
            </h2>
            </div>
          <div>
          <p class="p1">
            Dream Come True成立於 2005年
            <br>是一家頂級高端婚禮策劃、派對策劃的服務公司
            <br>為所有生活中值得的事慶賀，把平凡變得難忘、用儀式感紀念重要的事，
            <br>提供專業客製化服務，以及團隊式的經營為打造您的夢想婚禮與派對！
            <br>讓我們一起打造難忘且無價的美好回憶!
          </p>
          </div>
        </div>
      </el-main>
    </el-container>
    <FooterAll/>
  </div>
</template>

<script>
import HeaderAll from "@/views/header/HeaderAll";
import FooterAll from "@/views/footer/FooterAll";

export default {
  name: "about",
  components: {
    HeaderAll,
    FooterAll
  }
}
</script>

<style scoped>
.ceo-title {
  width: initial;
  color: black;
  font-size: 20px;
  text-align: center; /* 文字水平置中 */
}

.ceo-image {
  margin-left: 900px; /* 圖片水平置中 */
  width: 20%;
  top: 0; /* 使圖片置頂 */
}

.ceo-sigh {
  position: absolute;
  width: 10%;
  margin-left: 1300px;
  margin-top: 600px;
}
.h2{
  position: relative; top: -200px;
  margin-top:-300px
}

.p1{
  font-size: 20px;
  position: relative; top: -220px;
}

</style>