<template>
   <scroller class="friendList">
     <Friend
    v-for="item in friendData"
    :key="item.id"
    :friend="item"
    ></Friend>
    <Friend
    v-for="item in friendList"
    :key="item.id"
    :friend="item"
    ></Friend>
  </scroller>
</template>

<script>
import Friend from '@/pages/friends/Friend'
import friendData from '@/pages/friends/friendData'
export default {
  name: 'FriendsList',
  data () {
    return {
      friendData: friendData
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
