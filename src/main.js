import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'//添加的代碼
import 'element-ui/lib/theme-chalk/index.css'//添加的代碼
import axios from 'axios'//添加的代碼
import cssStyle from "./css/cssStyle.vue";//引入樣式組件



// import '/src/css/bootstrap.min.css';
// import '/src/css/font-awesome.min.css';
// import '/src/css/elegant-icons.css';
// import '/src/css/owl.carousel.min.css';
// import '/src/css/nice-select.css';
// import '/src/css/magnific-popup.css';
// import '/src/css/slicknav.min.css';
// import '/src/css/style.css';


axios.defaults.baseURL = 'http://localhost:9080'
axios.defaults.withCredentials = true;
Vue.prototype.axios = axios//添加的代碼,固定的寫法
Vue.use(ElementUI)//添加的代碼
Vue.config.productionTip = false
Vue.component('cssStyle' ,cssStyle);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
