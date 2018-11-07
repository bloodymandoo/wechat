<template>
  <scroller class="messageList">
    <Message
    v-for="item in messageList"
    :key="item.id"
    :message="item"
    ></Message>
  </scroller>
</template>

<script>
import Message from '@/pages/message/Message'
export default {
  name: 'MessageList',
  data () {
    return {
      // messageList: [
      //   {
      //     id: 0,
      //     img: 'aa',
      //     title: 'bb',
      //     detail: 'cc',
      //     isAlarm: false
      //   }
      // ]
    }
  },
  computed: {
    messageList () {
      let arr = new Array(30)
      arr = arr.join(' ').split(' ')
      arr = arr.map(function (item, index) {
        return {
          id: index,
          img: require('@/assets/logo.png'),
          title: '焦点资讯',
          detail: '微课:[学习vue]',
          time: '昨天20:42',
          isAlarm: false
        }
      })
      return arr
    }
  },
  components: {
    Message
  }
}
</script>

<style lang="scss" scoped>
.messageList{
  height:1px;
  flex:1;
}
</style>
