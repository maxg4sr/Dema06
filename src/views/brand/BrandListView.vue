<template>
  <div>
    <!-- 麵包屑組件 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/admin/brand/list">品牌管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>品牌列表</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0px;">品牌列表</h3>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
      <el-table-column prop="name" label="品牌名稱" width="150" align="center"></el-table-column>
      <el-table-column prop="pinyin" label="品牌拼音" width="180" align="center"></el-table-column>
      <el-table-column prop="keyword" label="關鍵字" align="center"></el-table-column>
      <el-table-column prop="productCount" label="商品數量" width="80" align="center"></el-table-column>
      <el-table-column prop="sales" label="銷量" width="80" align="center"></el-table-column>

      <!--  一列兩行的寫法  -->
      <el-table-column label="好評 / 評論數量" width="150" align="center">
        <template slot-scope="scope">
          <span v-text="scope.row.positiveCommentCount"></span> / <span v-text="scope.row.commentCount"></span>
        </template>
      </el-table-column>

      <!--  固定寫法  -->
      <el-table-column prop="enable" label="是否啟用" width="80" align="center">
        <template slot-scope="scope">
          <el-switch
              v-model="scope.row.enable"
              :active-value="1"
              :inactive-value="0"
              active-color="#13ce66"
              inactive-color="#999">
          </el-switch>
        </template>
      </el-table-column>

      <!--  複製網站上既可    -->
      <el-table-column label="操作" width="80" align="center">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.row.id)"><i class="el-icon-edit"></i>編輯</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="openDeleteConfirm(scope.row.id)"><i class="el-icon-delete"></i>刪除</el-button>
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
      this.$confirm('此操作將永久刪除該品牌, 是否繼續?', '提示', {
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
      console.log("根據id=" + id + "刪除品牌...");
      // let url = "http://localhost:9080/brands/" + id + "/delete";
      this.axios
          // .create({headers: {'Authorization': localStorage.getItem('jwt')}})
          .post(url).then((response) => {
        if (response.data.code == 20000) {
          this.$message({
            message: '刪除品牌成功!',
            type: 'success'
          });
        } else {
          this.$message.error(response.data.message);
        }
        //重新加載品牌列表(自動更新畫面)
      this.loadBrands();

      })
    },
    loadBrands: function () {
      // let url = "http://localhost:9080/brands";
      this.axios
          // .create({headers: {'Authorization': localStorage.getItem('jwt')}})
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
    this.loadBrands();
  }
}
</script>
