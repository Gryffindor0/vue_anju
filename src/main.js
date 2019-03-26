// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入页脚组件
import IndexNav from './components/Index/IndexNav'
import NavMain from './components/Nav/NavMain'
import FooterMain from './components/Nav/FooterMain'
import Global from './components/Global'

//注册成为全局组建
Vue.component('index-nav',IndexNav);
Vue.component('nav-main',NavMain);
Vue.component('footer-main',FooterMain);
Vue.prototype.Global=Global;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
