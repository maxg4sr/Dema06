<template>
  <!-- Footer Section Begin -->
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <div class="footer__subscribe">
              <div class="footer__subscribe__text">
                <!--                <h4>訂閱我們得到最新消息</h4>-->
                <p style="font-size: 20px">
                  <router-link to="/views/reg">點我立即註冊將得到10%優惠回饋</router-link>
                </p>
                <br>
              </div>
<!--              <div class="footer__subscribe__form">-->
<!--                <form action="#">-->
<!--                  <input type="text" placeholder="點右鍵連接線上客服">-->
<!--                  <button type="submit"><i class="fa fa-send-o"></i>點右鍵連接線上客服</button>-->
<!--                </form>-->
                <div><p class="p1">
                  <router-link to="/chat/service/">
                    <button type="submit">點我連接線上客服<i class="fa fa-send-o"></i></button>
                  </router-link>
                </p>
                </div>
<!--              </div>-->
              <div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="footer__social">
              <SocialMediaIcons/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="footer__logo">
            <router-link to="/views/index" @click="scrollTo()">
              <img :src="require('@/img/home_page.jpg')" alt=""></router-link>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="footer__widget">
            <ul>
              <h5>open time</h5>
              <li>Mon - Fri: 8:00am - 7:00pm</li>
              <li>Closed on weekend</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="footer__widget">
            <ul>
              <h5>Email & Phone</h5>
              <li>SupportMarried@gmail.com</li>
              <li>+ 886 212-683-9756</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="footer__widget">
            <h5>Address & Contact</h5>
            <p>799 W 6th St Hoisington, Kansas 121 Sparrow Hawk, Alberta</p>
          </div>
        </div>
      </div>
      <div class="footer__copyright">
        <div class="row">
          <div class="col-lg-7 col-md-7">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            <p class="footer__copyright__text">
              &copy; {{ currentYear }} © Dream Come True Corp.
              <br>All Rights Reserved 琴瑟之好科技股份有限公司版權所有
            </p>
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </div>
        </div>
      </div>
    </div>
    <!-- Back to Top Button -->
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
import SocialMediaIcons from "@/views/social/SocialMediaIcons";
import Chat from "@/views/chatroom/chat";

export default {
  name: "FooterAll",
  components: {
    Chat,
    SocialMediaIcons
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    scrollTo() {
      // 滾動到頁面頂部
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 添加平滑滾動效果
      });
    }
  }
};
</script>

<style scoped>
/*@import "/src/css/bootstrap.min.css";*/
/*@import "/src/css/font-awesome.min.css";*/
/*@import "/src/css/elegant-icons.css";*/
/*@import "/src/css/owl.carousel.min.css";*/
/*@import "/src/css/nice-select.css";*/
/*@import "/src/css/magnific-popup.css";*/
/*@import "/src/css/slicknav.min.css";*/
/*@import "/src/css/style.css";*/


.footer-wrapper {
  max-width: 1200px; /* 根据你的内容宽度进行调整 */
  margin: 0 auto; /* 水平居中 */
}

body {
  background-image: url('/src/img/counter-bg.jpg');
  background-size: cover;
  background-position: center top;
}

h5 {
  font-size: 20px;
}
.p1{
  font-size: 20px;
  /*text-align: right;*/
  margin-left: 450px;
}

</style>
