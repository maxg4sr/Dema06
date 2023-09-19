<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item>履歷管理</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0;">履歷列表</h3>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="100" align="center"></el-table-column>
      <el-table-column prop="chineseName" label="中文姓名" align="center"></el-table-column>
      <el-table-column prop="currentAddress" label="目前住家地址" align="center"></el-table-column>
      <el-table-column prop="phoneNumber" label="手機電話" header-align="center"></el-table-column>
      <el-table-column prop="email" label="電子信箱" header-align="center"></el-table-column>
      <el-table-column prop="resume" label="履歷附件" header-align="center"></el-table-column>
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
  name: "ResumeAdmin",
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit(id) {
      console.log("根據id=" + id + "編輯履歷名單...");
    },
    //提示彈框 是否刪除
    openDeleteConfirm(id) {
      this.$confirm('此操作將永久刪除該註冊資料, 是否繼續?', '提示', {
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
      console.log("根據id=" + id + "刪除註冊資料...");
      let url = "http://localhost:9080/resumes/" + id + "/delete";
      this.axios
          .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .post(url).then((response) => {
        if (response.data.code == 20000) {
          this.$message({
            message: '刪除資料成功!',
            type: 'success'
          });
        } else {
          this.$message.error(response.data.message);
        }

        //重新加載品牌列表(自動更新畫面)
        this.loadResumes();

      })
    },
    loadResumes: function () {
      let url = "http://localhost:9080/resumes/";
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
    this.loadResumes();
  }
}
</script>

<style scoped>

</style>