import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from './views/Menu.vue'
import Contact from './views/Contact.vue'
import Item from './views/Item.vue'
import Login from './views/Login.vue'
import AddItem from './views/AddItem.vue'
import EditItem from './views/EditItem.vue'
import Account from './views/Account.vue'

Vue.use(Router)

export default new Router({
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
      path: '/contact',
      name: 'contact',
      component: Contact
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
    }
  ]
})
