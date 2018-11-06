<template>
  <section>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list" :key="item.path">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MessageList from '@/pages/message/MessageList'
import FriendsList from '@/pages/friends/FriendsList'
import FindList from '@/pages/find/FindList'
import My from '@/pages/my/My'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'Section',
  data () {
    return {
      list: [
        {
          path: '/MessageList',
          component: MessageList
        },
        {
          path: '/FriendsList',
          component: FriendsList
        },
        {
          path: '/FindList',
          component: FindList
        },
        {
          path: '/My',
          component: My
        }
      ]
    }
  },
  components: {
    MessageList,
    FriendsList,
    FindList,
    My
  },
  mounted () {
    this.$store.dispatch('init_swiper', {name: 'swiper-container'})
  }
}
</script>

<style lang="scss" scoped>
section{
  flex:1;
  .swiper-container{
    height:100%;
    width:100%;
    .swiper-wrapper{
      height:100%;
      width:100%;
      display: flex;
      flex-direction: row;
      .swiper-slide{
        height:100%;
        width:100% !important;
        display: flex;
      }
    }
  }
}
</style>
