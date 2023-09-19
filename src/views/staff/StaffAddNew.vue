<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/admin' }">首頁</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/admin/administrator/list">員工管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>添加員工</el-breadcrumb-item>
    </el-breadcrumb>

    <h3 style="margin: 20px 0;">添加員工</h3>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
      <el-form-item label="員工名字:" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="暱稱:" prop="nickname">
        <el-input v-model="ruleForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="手機號碼:" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="電子郵箱:" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="頭像:" prop="avatar">
        <el-input v-model="ruleForm.avatar"></el-input>
      </el-form-item>
      <el-form-item label="簡介:" prop="description">
        <el-input v-model="ruleForm.description"></el-input>
      </el-form-item>
      <el-form-item label="月薪:" prop="salary">
        <el-input v-model="ruleForm.salary"></el-input>
      </el-form-item>
      <el-form-item label="是否啟用:" prop="enable">
        <el-switch
            v-model="ruleForm.enable"
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
        nickname: '',
        phone: '',
        email: '',
        avatar: '',
        description: '',
        salary:'',
        enable: 1
      },
      rules: {
        name: [
          {required: true, message: '請輸入用戶名', trigger: 'blur'},
          {min: 3, max: 15, message: '長度在 3 到 15 個字符', trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          let url = "http://localhost:9080/staffs/add-new";
          console.log(url);
          console.log(this.ruleForm);
          this.axios
              .create({headers: {'Authorization': localStorage.getItem('jwt')}})
              .post(url, this.ruleForm).then((response) => {
            console.log(response);

            // 判斷
            if (response.data.code == 20000) {
              this.$message({
                message:'添加員工成功!',
                type:'success'
              });
              this.resetForm(formName);
            }else {
              this.$message.error(response.data.message);
            }
          }).catch(function (error) {
            console.log('響應結果為失敗！');
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