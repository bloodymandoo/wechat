<template>
   <scroller class="friendList">
    <Friend
    v-for="item in friendList"
    :key="item.id"
    :friend="item"
    ></Friend>
  </scroller>
</template>

<script>
import Friend from '@/pages/friends/Friend'
export default {
  name: 'FriendsList',
  data () {
    return {
      // friendList: []
    }
  },
  computed: {
    friendList () {
      let arr = new Array(30)
      arr = arr.join(' ').split(' ')
      arr = arr.map(function (item, index) {
        return {
          id: index,
          img: require('@/assets/logo.png'),
          name: '令狐冲'
        }
      })
      return arr
    }
  },
  components: {
    Friend
  }
}
</script>

<style scoped>

</style>
