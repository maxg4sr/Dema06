<template>
  <el-container>
    <el-header style="height: 100px">
      <div class="header_logo">
        <a href="#"><img src="/img/home_page.jpg" class="a1"></a>
      </div>
      <nav class="header__menu mobile-menu">
        <ul class="navigation">
          <li><a href="index.html">HOME</a></li>
          <li><a href="services.html">SERVICES</a></li>
          <li><a href="team.html">TEAM</a></li>
          <li><a href="blog-details.html">BLOG</a></li>
          <li><a href="about.html">ABOUT</a></li>
        </ul>
      </nav>
      <div class="col-lg-2 col-md-1">
        <div class="header__right">
          <div class="header__right__social">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </div>
          <div class="header__right__search">
            <a href="#" class="search-switch"><i class="fa fa-search"></i></a>
          </div>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>

/*@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");*/

/*@import "src/css/font-awesome.min.css";*/

@import "~@fortawesome/fontawesome-free/css/all.css";

/* Header component styles */
.navigation {
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: center;
}

el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 100px;
}

.navigation li {
  margin-right: 24px;
}

.navigation li a {
  text-decoration: none;
  color: #333;
  font-size: 40px;
}

.a1 {
  width: 200px; /* 设置宽度 */
  height: auto; /* 高度自适应，保持图片比例 */
}

.header__right {
  text-align: right;
  padding: 30px 0;
}

.header__right__social {
  display: inline-block;
}

.header__right__social a {
  font-size: 16px;
  color: #444444;
  margin-right: 20px;
}

.header__right__search {
  display: inline-block;
  position: relative;
  padding-left: 20px;
}

.header__right__search::before {
  position: absolute;
  left: 0;
  top: 4px;
  height: 15px;
  width: 1px;
  background: #e1e1e1;
  content: "";
}

.header__right__search a {
  font-size: 15px;
  color: #444444;
}

.header__menu {
  text-align: center;
  padding: 20px 0;
}
</style>