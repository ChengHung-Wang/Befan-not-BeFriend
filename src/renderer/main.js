import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Elements
Vue.use(ElementUI);

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const customTitlebar = require('custom-electron-titlebar');

new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#fff'),
  icon: require('./assets/logo_singal.png')
});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


let blabla = [
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
  [0,1, 2, 3, 4, 5 ,6 ,7, 8],
];
blabla[6][8];