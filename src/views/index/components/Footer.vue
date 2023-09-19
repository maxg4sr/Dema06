<template>
  <el-container>
      <!-- Feature Section Begin -->
      <section class="features spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <br>
                <h2>我們的特色婚禮</h2>
                <img :src="require('@/img/icon/ti.png')" alt="">
              </div>
            </div>
          </div>
          <div class="feature__gallery">
            <div class="grid-sizer"></div>
            <div class="fg__item photography set-bg">
              <img :src="require('@/img/features/feature-1.jpg')">
              <div class="fg__item__text">
                <span>證婚儀式</span>
                <h2>國內外儀式</h2>
              </div>
            </div>
            <div class="fg__item honeymoon mid_item set-bg custom-bg"
                 :style="{ backgroundImage: 'url(' + require('@/img/wedding-dress/wd-12.jpg') + ')' }">
              <div class="fg__item__text">
                <span>新娘秘書</span>
                <h2>這裡可以找到喜愛的風格</h2>
              </div>
            </div>
            <div class="fg__item music large_item set-bg custom-bg"
                 :style="{ backgroundImage: 'url(' + require('@/img/wedding-dress/wd-17.jpg') + ')' }">
              <div class="fg__item__text">
                <span>蜜月之旅</span>
                <h2>美麗渡假勝地<br>體驗心身靈享受</h2>
              </div>
            </div>
            <div class="fg__item event large_item set-bg custom-bg"
                 :style="{ backgroundImage: 'url(' + require('@/img/wedding-ceremony/wc-03.jpg') + ')' }">
              <div class="fg__item__text">
                <span>海外婚禮</span>
                <h2>管距離多遠使命必達</h2>
              </div>
            </div>
            <div class="fg__item couple mid_item set-bg custom-bg"
                 :style="{ backgroundImage: 'url(' + require('@/img/wedding-dress/wd-01.jpg') + ')' }">
              <div class="fg__item__text">
                <span>婚紗外拍</span>
                <h2>我們有專業的攝影團隊</h2>
              </div>
            </div>
            <div class="fg__item photography set-bg custom-bg"
                 :style="{ backgroundImage: 'url(' + require('@/img/features/feature-6.jpg') + ')' }">
              <div class="fg__item__text">
                <span>求婚驚喜</span>
                <h2>任何想的到想不到的<br>我們通通可以做到</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Feature Section End -->

      <!-- Counter Section Begin -->
      <section class="features spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <br>
                <h2>統計數字</h2>
                <img :src="require('@/img/icon/ti.png')" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="counter spad set-bg" data-setbg="img/counter-bg.jpg">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="counter__item">
                <img :src="require('@/img/icon/ci-1.png')" alt="">
                <transition name="counter-fade" mode="out-in">
                  <h2 class="counter_num" :key="counter1">{{ counter1 }}</h2>
                </transition>
                <p>預約瀏覽數</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="counter__item">
                <img :src="require('@/img/icon/ci-2.png')" alt="">
                <transition name="counter-fade" mode="out-in">
                  <h2 class="counter_num" :key="counter2">{{ counter2 }}</h2>
                </transition>
                <p>享婚新人數</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="counter__item">
                <img :src="require('@/img/icon/ci-3.png')" alt="">
                <transition name="counter-fade" mode="out-in">
                  <h2 class="counter_num" :key="counter3">{{ counter3 }}</h2>
                </transition>
                <p>婚宴場數</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="counter__item">
                <img :src="require('@/img/icon/ci-4.png')" alt="">
                <transition name="counter-fade" mode="out-in">
                  <h2 class="counter_num" :key="counter4">{{ counter4 }}</h2>
                </transition>
                <p>派對次數</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="counter-container"></div>
    <el-footer style="flex-shrink: 0">
      <footer-all/>
    </el-footer>

  </el-container>
</template>

<script>
import FooterAll from "@/views/footer/FooterAll";

export default {
  name: "Footer",
  components: {FooterAll},
  timer: "Counter",
  data() {
    return {
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0
    };
  },
  mounted() {
    this.startCounting();
  },
  methods: {
    startCounting() {
      this.animateCounter("counter1", 18365);
      this.animateCounter("counter2", 1568);
      this.animateCounter("counter3", 2573);
      this.animateCounter("counter4", 1894);
      // 启动其他计数器...
    },
    animateCounter(counterName, targetValue) {
      const duration = 5000; // 动画持续时间（毫秒）
      const steps = 100; // 动画步数
      const increment = targetValue / steps;

      let currentValue = 0;
      let stepCount = 0;

      const counterInterval = setInterval(() => {
        if (stepCount >= steps) {
          clearInterval(counterInterval);
          this[counterName] = targetValue;
        } else {
          currentValue += increment;
          this[counterName] = Math.round(currentValue);
          stepCount++;
        }
      }, duration / steps);
    }
  }
};
</script>

<style scoped>
@import "/src/css/bootstrap.min.css";
@import "/src/css/font-awesome.min.css";
@import "/src/css/elegant-icons.css";
@import "/src/css/owl.carousel.min.css";
@import "/src/css/nice-select.css";
@import "/src/css/magnific-popup.css";
@import "/src/css/slicknav.min.css";
@import "/src/css/style.css";

/* ... 其他樣式 ... */

.feature__gallery {
  /* ... 其他樣式 ... */
}

.fg__item__text {
  position: absolute;
  bottom: 10%;
  left: 10%;
  right: 10%; /* 保持左右 10% 的間距 */
  color: black;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fg__item__text span,
.fg__item__text h2 {
  color: #FCFCFC;
  font-size: 20px;
}

.custom-bg .fg__item__text {
  margin-right: 10px; /* 根据需要微调的值 */
}

/* 對齊所有圖片的底部 */
.fg__item.event,
.fg__item.couple {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* 對齊底部的圖片 */
.fg__item.event.custom-bg {
  margin-top: -253px; /* 調整底部對齊的距離 */
}

.fg__item.couple.custom-bg {
  margin-top: -127px; /* 調整底部對齊的距離 */
}

.counter__item {
  margin-top: -100px;
}

.counter-container {
  height: 60vh;
  width: 2224px;
  margin-left: 150px;
  margin-top: -950px;
  background-size: auto 100% ;
  background-position: center top;
  background-image: url('/src/img/counter-bg.jpg');
}
.el-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 设置容器最小高度为视窗高度 */
}

/*.features {*/
/*  flex-grow: 1; !* 使特色婚礼部分占据剩余空间 *!*/
/*}*/

.el-footer {
  position: sticky; /* 使底部固定在底部 */
  bottom: 0;
  flex-shrink: 0; /* 避免占用多余空间 */
}

/* 设置 footer-all 在底部 */
footer-all {
  position: sticky;
  bottom: 0;
  z-index: 1; /* 确保固定组件在内容上方 */
}

</style>
