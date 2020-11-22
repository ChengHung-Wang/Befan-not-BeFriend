import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Setting from "../components/Setting";
import jiyiSkills_108_section2 from "../components/projects/jiyiSkills_108_section2";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/project/108-2',
      name: 'jiyiSkills_108_section2',
      component: jiyiSkills_108_section2
    }
  ]
})
