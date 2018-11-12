import Vue from 'vue'
import Router from 'vue-router'
import LoginBase from '@/pages/login/LoginBase'
import BaseP from '@/pages/base/BaseP'
import FindList from '@/pages/find/FindList'
import FriendsList from '@/pages/friends/FriendsList'
import MessageList from '@/pages/message/MessageList'
import My from '@/pages/my/My'
import Login from '@/pages/login/Login'
import Language from '@/pages/login/Language'
import LoginDetail from '@/pages/login/LoginDetail'
import RegisterDetail from '@/pages/login/RegisterDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/LoginBase'
    },
    {
      path: '/LoginBase',
      component: LoginBase,
      children: [
        {
          path: '/',
          redirect: 'Login'
        },
        {
          path: 'Login',
          name: 'Login',
          component: Login
        },
        {
          path: 'LoginDetail',
          name: 'LoginDetail',
          component: LoginDetail
        },
        {
          path: 'RegisterDetail',
          name: 'RegisterDetail',
          component: RegisterDetail
        },
        {
          path: 'Language',
          name: 'Language',
          component: Language
        }
      ]
    },
    {
      path: '/BaseP',
      component: BaseP,
      children: [
        {
          path: '/',
          redirect: 'MessageList'
        },
        {
          path: 'MessageList',
          name: 'MessageList',
          component: MessageList
        },
        {
          path: 'FriendsList',
          name: 'FriendsList',
          component: FriendsList
        },
        {
          path: 'FindList',
          name: 'FindList',
          component: FindList
        },
        {
          path: 'My',
          name: 'My',
          component: My
        }
      ]
    }
  ]
})
