import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import BackIndex from '@/views/backIndex'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
    	path: 'backIndex',
    	name: 'BackIndex',
    	component: BackIndex
    }
  ]
})
