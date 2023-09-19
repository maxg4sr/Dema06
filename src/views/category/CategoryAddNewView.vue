<template>
  <div>
    <!-- 麵包屑組件 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/admin/category/list">類別管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>添加類別</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0px">添加類別</h3>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">

      <el-form-item label="類別父級id" prop="parentId">
        <el-input v-model="ruleForm.parentId"></el-input>
      </el-form-item>

      <el-form-item label="類別名稱" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="類別logo的URL" prop="icon">
        <el-input v-model="ruleForm.icon"></el-input>
      </el-form-item>

      <el-form-item label="關鍵字" prop="keywords">
        <el-input v-model="ruleForm.keywords"></el-input>
      </el-form-item>

      <el-form-item label="排序值" prop="sort">
        <el-input v-model="ruleForm.sort"></el-input>
      </el-form-item>

      <el-form-item label="是否啟用" prop="enable">
        <el-switch
            v-model="ruleForm.enable"
            active-value="1"
            inactive-value="0"
            active-color="#13ce66"
            inactive-color="#999">
        </el-switch>
      </el-form-item>

      <el-form-item label="是否顯示在導航欄" prop="isDisplay">
        <el-switch
            v-model="ruleForm.isDisplay"
            active-value="1"
            inactive-value="0"
            active-color="#13ce66"
            inactive-color="#999">
        </el-switch>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即創建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        parentId: '',
        icon: '',
        keywords: '',
        sort: '',
        enable: true,
        isDisplay:true

      },
      rules: {
        name: [
          {required: true, message: '請輸入類別名稱', trigger: 'blur'},
          {min: 2, max: 15, message: '長度在 2 到 15 個字', trigger: 'blur'}
        ],
        //通過正則表達式驗證
        sort: [
          {pattern: /^[0-9]{1}[0-9]?$/, message: '必須在0~99之間的數值', trigger: 'blur'},
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // let url = "http://localhost:9080/categories/add-new";
          console.log(url);
          console.log(this.ruleForm);
          this.axios.post(url, this.ruleForm).then((response) => {
            console.log(response);

            // 判斷
            if (response.data.code == 20000) {
              this.$message({
                message: '添加類別成功!',
                type: 'success'
              })
            } else {
              this.$message.error(response.data.message);
            }
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>