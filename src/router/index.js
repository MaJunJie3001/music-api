import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:()=>import("../views/home/home")
    },{
      path: '/login',
      name: 'login',
      component:()=>import("../views/login/login")
    },{
      path: '/register',
      name: 'register',
      component:()=>import("../views/register/register")
    },{
      path:'/',
      redirect:"/register"
    }
    
  ]
})
