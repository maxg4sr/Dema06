<template>
  <div>
    <!-- 表單組件 -->
    <div style="width: 600px; background: #fff; margin: 50px auto; padding: 30px 60px;">
      <h3 style="text-align: center; margin: 10px 0;">管理員登錄</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用戶名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密碼" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登入</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '請輸入用戶名稱', trigger: 'blur'},
          {min: 2, max: 16, message: '長度在 2 到 16 個字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '請輸入用密碼', trigger: 'blur'},
          {min: 2, max: 16, message: '長度在 2 到 16 個字符', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // 發送axios異步請求
          let url = "http://localhost:9081/admins/login";
          let data = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          // 同源 - 跨域
          this.axios.post(url, data).then((response) => {
            // if (response.data == 1) {
            //   // 消息提示組件
            //   this.$message({
            //     message: '登入成功',
            //     type: 'success'
            //   });
            // }else if (response.data == 2) {
            //   this.$message.error('用戶名不存在');
            // }else {
            //   this.$message.error('密碼錯誤');
            // }
            if (response.data.code == 20000) {
              this.$message({
                message: '登入成功!',
                type: 'success'
              })
              //jwt響應並存入localStorage當中
              let jwt = response.data.data;
              localStorage.setItem('jwt', jwt);
              // 跳轉到主頁
              this.$router.push('/admin');
            } else {
              this.$message.error('登入失敗!用戶名或是密碼錯誤')
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
<style>
body {
  background: #409EFF;
}

</style>