<template>
  <div>
    <!--  布局容器 組件 -->
    <el-container>
      <el-header class="layout-header" style="height: 50px">
        <a href="http://localhost:8080/admin/" class="icon-link"><i class="el-icon-s-fold"></i></a>
        <span class="text1">Dream Come True 後台管理系統</span>
        <!-- 登出按鈕 -->
          <el-button class="logout-button"type="text" @click="showLogoutConfirm">登出</el-button>


        <!--  整個頁面的上半部分 - 頂欄部分   -->
      </el-header>
      <!--  整個頁面的下半部分 - 是一個容器  -->
      <el-container class="layout-body">
        <!--  下半部分左側 - 左邊欄 (菜單欄)  -->
        <el-aside class="layout-aside">
          <!-- el-menu表示整個菜單 -->
          <!-- router屬性(不給值即表示router="true")：可將各菜單項的index作為URL進行跳轉-->
          <!-- :default-active="this.$router.currentRoute.path" 可以同步左右菜單欄選項-->
          <el-menu router :default-active="this.$router.currentRoute.path" class="el-menu-vertical-demo">
            <!--@open="handleOpen" - 不需要 -->
            <!--@close="handleClose"> - 不需要 -->

            <!-- 管理員管理:管理員列表，添加管理員-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>管理員管理</span>
              </template>
              <el-menu-item index="/admin/admin/list">管理員列表</el-menu-item>
              <el-menu-item index="/admin/admin/add-new">添加管理員</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <!-- template用於配置包含子菜單的父級項-->
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>員工管理</span>
              </template>
              <!-- el-menu-item 表示菜單項-->
              <el-menu-item index="/admin/staff/list">員工列表</el-menu-item>
              <el-menu-item index="/admin/staff/add-new">添加員工</el-menu-item>
            </el-submenu>


            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>客戶管理</span>
              </template>
              <el-menu-item index="/admin/order/list">訂單管理</el-menu-item>
              <el-menu-item index="/admin/reg/list">註冊管理</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>線上客服</span>
              </template>
<!--              <el-menu-item index="/im">履歷列表</el-menu-item>-->
              <el-menu-item index="/chat/service"> <i class="el-icon-chat-dot-round"></i>聊天室</el-menu-item>
<!--              <el-menu-item index="/admin/brand/list">品牌列表</el-menu-item>-->
            </el-submenu>

<!--            <el-submenu index="5">-->
<!--              <template slot="title">-->
<!--                <i class="el-icon-s-custom"></i>-->
<!--                <span>其他管理</span>-->
<!--              </template>-->
<!--              <el-menu-item index="/admin/staff-new">添加員工</el-menu-item>-->
<!--              <el-menu-item index="/admin/staff-list">員工列表</el-menu-item>-->
<!--            </el-submenu>-->

          </el-menu>
        </el-aside>
        <!--  下半部分右側 - 主體部分  router-view實現具體顯示  -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    showLogoutConfirm() {
      this.$confirm('確定要登出嗎？', '登出', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 執行登出操作
        this.logout();
      }).catch(() => {
        // 取消登出
      });
    },
    showLoggedOutMessage() {
      this.$message({
        type: 'info',
        message: '您已經登出了！'
      });
    },
    logout() {
      // 執行登出操作
      // 清除本地存儲的 JWT token
      localStorage.removeItem('jwtToken');
      // 導航到登入頁面或首頁
      this.$router.push('/'); // 或其他適當的路由
    }
  }
}
</script>

<style>

* {
  margin: 0;
}

.layout-header {
  background-color: #C4E1FF;
  color: #3C3C3C;
}

.layout-body {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
}

.layout-aside {
  background-color: #00E3E3;
}

.centered-content {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.el-icon-s-fold {
  color: #12487d;
  font-size: 25px;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.text1 {
  vertical-align: center;
  font-size: 23px;
  color: #3C3C3C;
}

.icon-link {
  margin-right: 10px;
}

.logout-button {
  color: #3C3C3C;
  font-size: 30px;
}

</style>