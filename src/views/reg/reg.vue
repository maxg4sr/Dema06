<template>
  <div class="reg">
    <h1>歡迎來到註冊頁面</h1>
    <h2>現在註冊即享優惠價格</h2>
    <el-card style="width: 600px;height: 550px;margin: 0 auto;background-color: rgba(255,255,255,0.3)">
      <el-form style="width: 400px;margin: 30px auto" label-width="60px">
        <el-form-item class="form-item-label" label="名字:">
          <el-input type="text" v-model="user.name" placeholder="請輸入您的真實姓名">請輸入您的真實姓名</el-input>
        </el-form-item>
        <el-form-item class="form-item-label" label="電話:">
          <el-input type="phone" v-model="user.phone" placeholder="請輸入手機電話號碼">請輸入手機電話號碼</el-input>
        </el-form-item>
        <el-form-item class="form-item-label" label="性別:">
          <el-select v-model="user.gender" placeholder="請選擇性別" style="width: 100%">
            <div style="text-align: left">
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </div>
          </el-select>
        </el-form-item>
        <el-form-item class="form-item-label" label="年齡:">
          <el-input type="age" v-model="user.age" placeholder="請輸入年齡">請輸入年齡</el-input>
        </el-form-item>
        <el-form-item class="form-item-label" label="line:">
          <el-input type="line" v-model="user.line" placeholder="請輸入line帳號">請輸入Line帳號</el-input>
        </el-form-item>
        <el-form-item class="form-item-label" label="email:">
          <el-input type="line" v-model="user.email" placeholder="請輸入email帳號">請輸入email</el-input>
        </el-form-item>
        <el-form-item class="form-item-label" label="日期:">
          <el-input type="date" v-model="user.date" placeholder="請輸入申請日期">請輸入申請日期</el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="position: relative;right: 35px" type="primary" @click="reg()">註冊</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>

  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      user: {
        name: "",
        phone: "",
        gender: "",
        age: "",
        line: "",
        email:"",
        date: ""
      },
    };
  },
  methods: {
    reg() {
      axios.post("/reg", this.user).then(response => {
        // if (response.data == 1) {
          this.$message.success("註冊成功，即將跳轉到首頁！");
          setTimeout(()=>{
          this.$router.push("/views/index");
        },3000);

        // } else if (response.data == 2) {
        //   this.$message.error("名字已存在!");
        // } else if (response.data == 3) {
        //   this.$message.error("電話號碼已重複!");
        // } else {
        //   this.$message.error("日期已經申請過!");
        // }
      });
    },
    resetForm() {
      // 重置表單內容
      this.user.name = "";
      this.user.phone = "";
      this.user.gender = "";
      this.user.age = "";
      this.user.line = "";
      this.user.email="";
      this.user.date = "";
    }
  }
};
</script>

<style>
body {
  margin: 0;
  background-size: cover;
  text-align: center;
  background-image: url("/src/img/reg/bg5.jpg");
}

h1 {
  font-size: 72px;
  color: white;
  margin-bottom: 0;
}

img {
  width: 100px;
}

h2 {
  font-size: 32px;
  color: white;
  margin: 0;
}

.form-item-label label {
  font-size: 20px;
  margin: auto;
  color: black;
}
</style>