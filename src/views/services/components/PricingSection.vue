<template>
  <!-- Pricing Section Begin -->
  <section class="pricing spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <p class="p1">服務與定價</p>
            <img :src="require('@/img/icon/ti.png')" alt="">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="pricing__item">
            <h5>Dream唯一</h5>
            <h2>$ 52099 up</h2>
            <div class="pricing__icon"></div>
            <ul>
              <li class="l1">服務項目:</li>
              <li>活動主持人(菁英團隊)</li>
              <li>活動精心策畫師 (菁英團隊)</li>
              <li>婚禮MV(成長/愛情/婚紗 3選1)</li>
              <li>婚禮紀錄(攝影/錄影 2選1)</li>
              <li class="l2">原價$66000 + 10%服務費</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="pricing__item">
            <h5>Dream驚喜</h5>
            <h2>$ 82099 up</h2>
            <div class="pricing__icon"></div>
            <ul>
              <li class="l1">服務項目:</li>
              <li>活動主持人(資深團隊)</li>
              <li>活動精心策畫師 (資深團隊)</li>
              <li>婚禮MV(成長/愛情/婚紗 3選2)</li>
              <li>婚禮紀錄(攝影 & 錄影)</li>
              <li>婚禮怖置(公版 13選1)</li>
              <li class="l2">原價$99000 + 10%服務費</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div class="pricing__item">
            <h5>Dream豪華獨家專案</h5>
            <h2>$ 178299 up</h2>
            <div class="pricing__icon"></div>
            <ul>
              <li class="l1">服務項目:</li>
              <li>活動主持人(總監團隊)</li>
              <li>活動精心策畫師 (總監團隊)</li>
              <li>婚禮MV(成長/愛情/婚紗 3選2)</li>
              <li>婚禮紀錄(攝影/錄影/SDE 3選2)</li>
              <li>婚禮怖置(公版 13選1 )</li>
              <li>婚禮怖置客製化logo設計</li>
              <li class="l2">原價$220000 + 10%服務費</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Pricing Section End -->
</template>

<script>
export default {
  name: "PricingSection"
}
</script>

<style scoped>

.p1 {
  font-size: 50px;
  color: black;

}

h5 {
  font-size: 30px;
  color: black;
}

h2 {
  font-family: Microsoft JhengHei;
  color: #b21f2d;
}

.l2{
  font-size: 20px;
  color: blue;
}

.l1{
  font-size: 30px;
  color: black;
}

ul li {
  font-size: 20px;
  color: black;
}

.pricing__icon {
  /* 設定背景圖片 */
  height: 30px;
  width: auto;
  margin-left: 10px;
  margin-top: 40px;
  background-image: url("~@/img/icon/pricing-icon.png");
  background-size: contain; /* 調整背景圖片大小以保持比例，並使其完全容納在容器內 */
  background-repeat: no-repeat; /* 避免圖片重複 */
  background-position: center center; /* 將圖片置中 */
}
</style>