<template>
  <el-container>
    <el-header class="header">
      <div class="header_logo">
        <router-link to ="/views/index"><img :src="require('@/img/home_page.jpg')" class="a1" alt="logo"></router-link>
      </div>
      <nav class="header__menu mobile-menu">
        <ul class="navigation">
          <li><router-link to="/views/index">HOME</router-link></li>
          <li><router-link to="/views/services">SERVICES</router-link></li>
          <li><router-link to="/views/team">TEAM</router-link></li>
          <li><router-link to="/views/blog">BLOG</router-link></li>
          <li><router-link to="/views/about">ABOUT</router-link></li>
        </ul>
      </nav>
      <div class="header__right">
      <SocialMediaIcons/>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

      </div>
    </el-header>
  </el-container>
</template>

<script>
import SocialMediaIcons from "@/views/social/SocialMediaIcons";


export default {
  name: "HeaderAll",
  components:{
    SocialMediaIcons
  },
};
</script>

<style>

/*@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");*/

/*@import "src/css/font-awesome.min.css";*/

@import "~@fortawesome/fontawesome-free/css/all.css";

/* Header component styles */
el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 50px;
}

/*設置導航欄的位置*/
.navigation {
  list-style: none;
  display: flex;
  margin-top: -80px;
  justify-content: center;
}

/*文字間距*/
.navigation li {
  margin-right: 30px;
}

/*文字大小*/
.navigation li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: normal;
}

/*設置圖片*/
.a1 {
  width: 220px; /* 設定寬度 */
  height: auto; /* 高度自適應，保持圖片比例 */
}

/*右導航欄設定*/
.header__right {
  text-align: right;
  margin-top: -140px;
  margin-right: -20px;
}

.header__right__social a {
  font-size: 16px;
  color: #444444;
  margin-right: 20px;
}

.header__right__search a {
  font-size: 15px;
  color: #444444;
}

.header__menu {
  text-align: center;
  padding: 20px 0;
}
/* 調整標頭高度 */


</style>