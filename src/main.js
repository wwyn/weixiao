import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
Vue.use(VueRouter);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')