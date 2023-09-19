<template>
    <div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6">
          <div class="main">
            <el-row>
              <el-input
                  placeholder="請輸入自己的暱稱"
                  prefix-icon="el-icon-user-solid"
                  v-model="name"
                  style="width:50%"
              ></el-input>
              <el-button type="primary" @click="conectWebSocket()">建立連接</el-button>
              <el-button type="danger">斷開連接</el-button>
            </el-row>
            <el-row>
              <el-input
                  placeholder="請輸入對方的頻道號碼"
                  prefix-icon="el-icon-phone"
                  v-model="aisle"
                  style="width:40%"
              ></el-input>
            </el-row>
            <div class="message">
              <div v-for="(value,key,index) in messageList" :key="index">
                <el-tag v-if="value.name==name" type="success" style="float:right">我：{{value.msg}}</el-tag>
                <br />
                <el-tag v-if="value.name!=name" style="float:left">{{value.name}}：{{value.msg}}</el-tag>
                <br />
              </div>
            </div>
            <el-row>
              <el-input
                  placeholder="請輸入要發送的訊息"
                  prefix-icon="el-icon-s-promotion"
                  v-model="messageValue"
                  style="width:50%"
              ></el-input>
              <el-button type="primary" @click="sendMessage()">發送</el-button>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>

<script>
export default {
  name: "chat",
  data() {
    return {
      name: "", // 暱稱
      websocket: null, // WebSocket對象
      aisle: "", // 對方頻道號
      messageList: [], // 消息列表
      messageValue: "" // 消息内容
    };
  },
  methods: {
    conectWebSocket: function() {
      console.log("建立連接");
      if (this.name === "") {
        this.$alert("請輸入自己的暱稱", "提示", {
          confirmButtonText: "確定",
          callback: action => {}
        });
      } else {
        //判断当前浏览器是否支持WebSocket
        if ("WebSocket" in window) {
          this.websocket = new WebSocket(
              "ws://localhost:9080/websocket/" + this.name
          );
        } else {
          alert("不支持建立socket連接");
        }
        //連接發生錯誤的回呼方法
        this.websocket.onerror = function() {

        };
        //連接成功建立的回呼方法
        this.websocket.onopen = function(event) {

        };
        //接收到訊息的回呼方法
        const that = this;
        this.websocket.onmessage = function(event) {
          try {
            const object = JSON.parse(event.data);
            console.log(object);
            if (object.type == 0) {
              // 提示連接成功
              console.log("連接成功");
              that.showInfo(object.people, object.aisle);
            }
            if (object.type == 1) {
              //接受消息
              console.log("接受消息");
              that.messageList.push(object);
            }
          } catch (error) {
            console.error("無法解析 JSON 數據:", error);
            // 在這裡處理無法解析的情況，例如顯示錯誤訊息或採取其他適當的操作
          }
        };
        //連接關閉的回調方法
        this.websocket.onclose = function() {};
        //監聽窗口關閉事件，當窗口關閉時，主動去關閉websocket連接，防止連接還沒斷開就關閉窗口，server端會拋異常。
        window.onbeforeunload = function() {
          this.websocket.close();
        };
      }
    },
    // 傳送訊息
    sendMessage: function() {
      const socketMsg = {msg: this.messageValue, toUser: this.aisle};
      if (this.aisle == "") {
        //群聊
        socketMsg.type = 0;
      } else {
        //單聊
        socketMsg.type = 1;
      }
      this.websocket.send(JSON.stringify(socketMsg));
    },
    showInfo: function(people, aisle) {
      this.$notify({
        title: "當前在線人數：" + people,
        message: "您的頻道號碼：" + aisle,
        duration: 0
      });
    }
  }
};
</script>

<style scoped>
.main {
  position: relative;
  top: 20px;
}
.message {
  position: relative;
  overflow:auto;
  top: 5px;
  width: 66%;
  height: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 5px;
}
</style>

}