<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>管理員管理</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0;">管理員管理</h3>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="username" label="用戶名" align="center"></el-table-column>
      <el-table-column prop="nickname" label="暱稱" align="center"></el-table-column>
      <el-table-column prop="phone" label="手機號碼" align="center"></el-table-column>
      <el-table-column prop="email" label="電子郵箱" header-align="center"></el-table-column>
      <el-table-column prop="enable" label="是否啟用" align="center">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.enable"
              @change="handleChangeEnable(scope.$index, scope.row.id, scope.row.enable)"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#999">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button circle icon="el-icon-edit" size="mini" @click="handleEdit(scope.row.id)"></el-button>
          <el-button circle icon="el-icon-delete" size="mini" type="danger"
                     @click="openDeleteConfirm(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    openDeleteConfirm(id) {
      this.$confirm('此操作將永久刪除該管理員, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(id);
      }).catch(() => {
      });
    },
    handleEdit(id) {
      console.log('將編輯id=' + id + "的管理員數據……");
      this.$message.error('嘗試編輯id=' + id + '的管理員數據，但是，此功能尚未實現！');
    },
    handleDelete(id) {
      console.log('將刪除id=' + id + "的管理員數據……");
      let url = 'http://localhost:9081/admins/' + id + '/delete';
      this.axios
          .create({headers:{'Authorization':localStorage.getItem('jwt')}})
          .delete(url).then((response) => {
        let json = response.data;
        if (json.code == 20000) {
          this.$message({
            message: '刪除管理員成功！ ',
            type: 'success'
          });
        } else {
          this.$message.error(response.data.message);
        }
        this.loadAdmins();
      }).catch(() => {
        // 執行到此處，通常是沒有權限，例如沒有攜帶JWT，被服務器端視為未登錄，或當前登錄的賬號確實無權限
        this.$message.error('刪除管理員失敗，服務器繁忙，請稍後再次嘗試！');
      });
    },
    handleChangeEnable(admin) {
      const enableText = ['禁用', '啟用'];
      const originState = admin.enable;
      const toState = (admin.enable + 1) % 2;
      // 這裡可以添加向後端發送請求的代碼來更新資料庫中的管理員狀態
      // 在此示例中，我們只是在前端更新狀態
      admin.enable = toState;
      // 顯示消息，告訴用戶狀態已更新
      this.$message.success(`成功將ID為 ${admin.id} 的管理員從【${enableText[originState]}】改為【${enableText[toState]}】`);
    },
    loadAdmins() {
      console.log('loadAdmins()');
      let url = 'http://localhost:9081/admins';
      console.log('url = ' + url);
      let jwt = localStorage.getItem('jwt');
      console.log('jwt = ' + jwt);
      this.axios
          .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let json = response.data;
        if (json.code == 20000) {
          this.tableData = json.data;
        } else {
          this.$message.error(response.data.message);
        }
      });
    }
  },
  created() {
    // created >>> 已創建，將在mounted、顯示頁面之前執行
    console.log('vue created');
  },
  mounted() {
    // mounted >>> 已掛載，將在created之後、顯示頁面之前執行
    console.log('vue mounted');
    this.loadAdmins();
  }
}
</script>

<style scoped>

</style>