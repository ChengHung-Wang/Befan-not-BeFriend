import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Setting from "../components/Setting";
import jiyiSkills_108_section2 from "../components/projects/jiyiSkills_108_section2";
import jiyiSkills_109_section2 from "../components/projects/jiyiSkills_109_section2";
import jiyiSkills_109_section2_1 from "../components/projects/jiyiSkills_109_section2_1"
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
    },
    {
      path: '/project/109-2-public',
      name: 'jiyiSkills_109_section2',
      component: jiyiSkills_109_section2
    },
    {
      path: '/project/109-2',
      name: 'jiyiSkills_109_section2_1',
      component: jiyiSkills_109_section2_1
    }
  ]
})
