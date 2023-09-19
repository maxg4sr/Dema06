<template>
  <!-- Request Begin -->
  <section class="request request--services spad">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="request__form">
            <div class="section-title">
              <h3 class="form-title">
                預約表單 <br>
                Make a request</h3>
              <p class="form-note">* 表示必填問題</p>
            </div>
            <!-- 使用 @submit 阻止默认的表单提交，调用 submitForm 方法 -->
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                  <input type="text" class="form-control" placeholder="姓名*" v-model="formData.name">
                  <select class="form-control" v-model="formData.person">
                    <option value="">主要聯絡人*</option>
                    <option value="新郎">新郎</option>
                    <option value="新娘">新娘</option>
                  </select>
                  <input type="text" class="form-control" placeholder="Age*" v-model="formData.age">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                  <input type="text" class="form-control" placeholder="連絡電話*" v-model="formData.phone">
                  <input type="text" class="form-control" placeholder="Line*" v-model="formData.line">
                  <input type="text" class="form-control"  style="margin-top: -5px" placeholder="Email*" v-model="formData.email">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                  <select class="form-control" v-model="formData.project">
                    <option value="">專案選擇*</option>
                    <option value="輕鬆專案">輕鬆專案</option>
                    <option value="標準專案">標準專案</option>
                    <option value="豪華獨家專案">豪華獨家專案</option>
                  </select>
                  <input type="text" class="form-control" placeholder="參加人數 & 地點*" v-model="formData.location">
                  <label class="datetime-label" for="datetime">選擇日期和時間:</label>
                  <input type="datetime-local" id="datetime" class="form-control" v-model="formData.date">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 px-2">
                  <select class="form-control" v-model="formData.how">
                    <option value="">如何知道Dream Come True*</option>
                    <option value="親友推薦">親友推薦</option>
                    <option value="廠商推薦">廠商推薦</option>
                    <option value="傳單">傳單</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Google Search">Google Search</option>
                    <option value="其他">其他</option>
                  </select>
                </div>
                <div class="col-lg-12 px-2 text-center">
                  <textarea class="form-control" placeholder="想和我們說什麼？" v-model="formData.message"></textarea>
                  <button type="submit" class="site-btn">提交</button> <!-- 使用 type="submit" 触发表单提交 -->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Request End -->
</template>

<script>
import axios from "axios";

export default {
  name: "RequestFormSection",
  data() {
    return {
      formData: {
        name: "",
        person: "",
        age: "",
        phone: "",
        line: "",
        email: "",
        project: "",
        location: "",
        date: "",
        how: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // 使用Axios发送POST请求到后端
      axios
          .post("/submitForm", this.formData)
          .then((response) => {
            this.showThankYouMessage();
          })
          .catch((error) => {
            console.error("請求失败:", error);
            // 在此处添加您的错误处理逻辑，例如显示错误消息
            this.$notify({
              type: 'error',
              message: '請求失敗，請稍後重試',
            });
          });
    },
    showThankYouMessage() {
      this.$notify({
        type: 'success',
        message: '感謝您的提交,我們會盡快與您聯絡！'

      });
    },
  }
}
</script>

<style scoped>
.request {
  /* 在這裡定義容器樣式，如果有的話 */
}

.request__form {
  /* 在這裡定義表單區域的樣式 */
}

.section-title {
  /* 在這裡定義標題區域的樣式 */
}

.form-title {
  color: white;
  font-size: 40px;
  text-align: center;
}

.form-note {
  color: white;
  font-size: 30px;
}

.form-control {
  width: 100%;
  height: auto;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 17px;
}

.datetime-label {
  /* 調整日期和時間標籤的樣式 */
}

.site-btn {
  /* 按鈕的樣式設定 */
}
</style>
