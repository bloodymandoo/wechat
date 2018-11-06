import Vue from 'vue'
import Router from 'vue-router'
import BaseP from '@/pages/base/BaseP'
import FindList from '@/pages/find/FindList'
import FriendsList from '@/pages/friends/FriendsList'
import MessageList from '@/pages/message/MessageList'
import My from '@/pages/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BaseP,
      children: [
        {
          path: '/',
          redirect: '/MessageList'
        },
        {
          path: '/MessageList',
          name: 'MessageList',
          component: MessageList
        },
        {
          path: '/FriendsList',
          name: 'FriendsList',
          component: FriendsList
        },
        {
          path: '/FindList',
          name: 'FindList',
          component: FindList
        },
        {
          path: '/My',
          name: 'My',
          component: My
        }
      ]
    }
  ]
})
