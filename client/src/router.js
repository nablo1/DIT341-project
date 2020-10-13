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
import EmpLogin from './views/EmpLogin.vue'
import Cart from './views/Cart.vue'
import EditUser from './views/EditUser.vue'
import Register from './views/Register.vue'
import AllOrders from './views/AllOrders.vue'

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
      path: '/users/:id/edit',
      name: 'edit-user',
      component: EditUser
    },
    {
      path: '/users/:id/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/empLogin',
      name: 'emp-login',
      component: EmpLogin
    },
    {
      path: '/users/:id/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/all-orders',
      name: 'all-orders',
      component: AllOrders
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
