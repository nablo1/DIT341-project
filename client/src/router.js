import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Item from './views/Item.vue'
import Login from './views/Login.vue'
import AddItem from './views/AddItem.vue'
import EditItem from './views/EditItem.vue'
import Account from './views/Account.vue'
import Orders from './views/Orders.vue'
import AddOrder from './views/AddOrder.vue'
import EmpLogin from './views/EmpLogin.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/menu/:id',
      name: 'item',
      component: Item
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-to-menu',
      name: 'additem',
      component: AddItem
    },
    {
      path: '/menu/:id/edit',
      name: 'edititem',
      component: EditItem
    },
    {
      path: '/users/:id',
      name: 'account',
      component: Account
    },
    {
      path: '/users/:id/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/new-order',
      name: 'add-order',
      component: AddOrder
    },
    {
      path: '/empLogin',
      name: 'emp-login',
      component: EmpLogin
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresUserAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresEmpAuth)) {
    if (localStorage.getItem('jwtemp') == null) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
