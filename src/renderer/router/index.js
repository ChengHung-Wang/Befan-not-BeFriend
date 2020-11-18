import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
// import LandingPage from "../components/LandingPage";
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
