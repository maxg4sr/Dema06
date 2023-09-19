<template>
  <div class="submit-button">
    <div class="resume-submission">
      <div>
        <h2 style="text-align: center;color: black">歡迎投遞履歷</h2>
      </div>
      <form @submit.prevent="showConfirmationDialog" enctype="multipart/form-data" name="resumeForm">
        <div class="input-container">
          <label for="chineseName">中文姓名:</label>
          <input type="text" id="chineseName" v-model="chineseName" required>
        </div>

        <div class="input-container">
          <label for="englishName">英文姓名:</label>
          <input type="text" id="englishName" v-model="englishName" required>
        </div>

        <div class="input-container">
          <label for="birthDate">出生年月日:</label>
          <input type="date" id="birthDate" v-model="birthDate" required>
        </div>

        <div class="input-container">
          <label for="currentAddress">目前住家地址:</label>
          <input type="text" id="currentAddress" v-model="currentAddress" required>
        </div>

        <div class="input-container">
          <label for="phoneNumber">手機電話:</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber" required>
        </div>

        <div class="input-container">
          <label for="email">信箱:</label>
          <input type="email" id="email" v-model="email" required>
        </div>

<!--        <div class="input-container">-->
<!--          <label for="resume">履歷:</label>-->
<!--          <input type="file" id="resume" ref="resumeInput" @change="handleFileChange" name="resume">-->
<!--        </div>-->
        <div class="input-container button-container">
          <button type="submit">提交</button>
          <button type="button" @click="resetForm">重置</button>
        </div>
      </form>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      // 表單數據...
      chineseName: "",
      englishName: "",
      birthDate: "",
      currentAddress: "",
      phoneNumber: "",
      email: "",
      // resume: null
    };
  },
  methods: {
    showConfirmationDialog() {
      this.$confirm("確定要提交嗎？", "提示", {
        confirmButtonText: "確定",
        cancelButtonText: "取消",
        type: "warning",
      })
          .then(() => {
            this.submitResume();
          })
          .catch(() => {

          });
    },
    submitResume() {
      // 在用戶確認後執行表單提交邏輯
      let formData = new FormData();
      formData.append("chineseName", this.chineseName);
      formData.append("englishName", this.englishName);
      formData.append("birthDate", this.birthDate);
      formData.append("currentAddress", this.currentAddress);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("email", this.email);
      // formData.append("resume", this.resume);
      axios
          .post("/submitResume", formData)
          .then((response) => {
            // 處理後端響應
            // 例如，您可以在這里處理成功提交後的操作
            this.showThankYouMessage();
          })
          .catch((error) => {
            // 處理請求錯誤
            console.error("提交失敗：", error);
          });
    },
    showThankYouMessage() {
      this.$message.success("感謝提交，即將跳轉到首頁！");
      setTimeout(() => {
        this.$router.push("/views/team");
      }, 1000);
    }
    ,
    resetForm() {
      // 重置表單數據
      this.chineseName = "";
      this.englishName = "";
      this.birthDate = "";
      this.currentAddress = "";
      this.phoneNumber = "";
      this.email = "";
      // this.resume = null;
      // 重置文件選擇輸入
      if (this.$refs.resumeInput) {
        this.$refs.resumeInput.value = "";
      }
    }
    ,
    handleFileChange(event) {
      this.resume = event.target.files[0];
    },
  }
}
;
</script>

<style scoped>

.resume-submission {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-container {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.input-container label {
  width: 120px;
  margin-right: 10px;
  font-size: 18px;
  text-align: right;
}

.input-container input,
.input-container textarea {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
}

.submit-button {
  background-image: url("/src/img/team/workteam-022.jpg");
  min-height: 100vh;
  background-size: cover;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}
</style>
