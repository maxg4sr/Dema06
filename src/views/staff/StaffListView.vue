<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>員工列表</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0;">員工列表</h3>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="name" label="員工名字" align="center"></el-table-column>
      <el-table-column prop="nickname" label="暱稱" align="center"></el-table-column>
      <el-table-column prop="phone" label="手機號碼" align="center"></el-table-column>
      <el-table-column prop="email" label="電子郵箱" header-align="center"></el-table-column>
      <el-table-column prop="avatar" label="頭像" align="center"></el-table-column>
      <el-table-column prop="description" label="簡介" align="center"></el-table-column>
      <el-table-column prop="salary" label="月薪" align="center"></el-table-column>
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
    handleEdit(id) {
      console.log("根據id=" + id + "編輯品牌...");
    },
    //提示彈框 是否刪除
    openDeleteConfirm(id) {
      this.$confirm('此操作將永久刪除該員工, 是否繼續?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.handleDelete(id);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消刪除'
        });
      });
    },
    handleDelete(id) {
      console.log("根據id=" + id + "刪除員工...");
      let url = "http://localhost:9080/staffs/" + id + "/delete";
      this.axios
          .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .post(url).then((response) => {
        if (response.data.code == 20000) {
          this.$message({
            message: '刪除員工成功!',
            type: 'success'
          });
          //重新加載品牌列表(自動更新畫面)
          this.loadStaffs();
        } else {
          this.$message.error(response.data.message);
        }
      })
    },
    loadStaffs() {
      console.log('loadStaffs()');
      let url = "http://localhost:9080/staffs/";
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
          this.$message.error(json.message);
        }
      });
    }
  },
  created() {
    console.log("created - 已創建")
  },
  mounted() {
    console.log("mounted - 已掛載")
    this.loadStaffs();
  }
}
</script>