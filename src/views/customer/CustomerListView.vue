<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>客戶管理</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0;">訂單管理</h3>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="date" label="申請日期" header-align="center"></el-table-column>
      <el-table-column prop="name" label="客戶名稱" align="center"></el-table-column>
      <el-table-column prop="person" label="新郎 或 新娘" align="center"></el-table-column>
      <el-table-column prop="age" label="年齡" align="center"></el-table-column>
      <el-table-column prop="phone" label="手機號碼" align="center"></el-table-column>
      <el-table-column prop="line" label="line帳號" align="center"></el-table-column>
      <el-table-column prop="email" label="email" header-align="center"></el-table-column>
      <el-table-column prop="project" label="選擇方案" header-align="center"></el-table-column>
      <el-table-column prop="how" label="如何得知我們" header-align="center"></el-table-column>
      <el-table-column prop="message" label="想跟我們說什麼" header-align="center"></el-table-column>
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
  name: "CustomerListView",
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
      this.$confirm('此操作將永久刪除該訂單, 是否繼續?', '提示', {
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
      console.log("根據id=" + id + "刪除訂單...");
      let url = "http://localhost:9080/orders/" + id + "/delete";
      this.axios
          .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .post(url).then((response) => {
        if (response.data.code == 20000) {
          this.$message({
            message: '刪除訂單成功!',
            type: 'success'
          });
        } else {
          this.$message.error(response.data.message);
        }

        //重新加載品牌列表(自動更新畫面)
        this.loadOrders();

      })
    },
    loadOrders: function () {
      let url = "http://localhost:9080/orders";
      this.axios
          .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .get(url).then((response) => {
        let json = response.data;
        if (json.code == 20000) {
          this.tableData = json.data;
        } else {
          this.$message.error(json.message);
        }
      })
    }
  },
  created() {
    console.log("created - 已創建")
  },
  mounted() {
    console.log("mounted - 已掛載")
    this.loadOrders();
  }
}
</script>