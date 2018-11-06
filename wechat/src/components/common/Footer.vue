<template>
  <footer>
    <nav>
      <div v-for="item in list" :key="item.index" :class="item.index==$store.state.base.activeIndex?'green':''" @click="tabClick(item.index)">
        <i :class="item.icon"></i>
        <p>{{item.name}}</p>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      list: [
        {
          index: 0,
          icon: '',
          name: '微信',
          url: '/MessageList'
        },
        {
          index: 1,
          icon: '',
          name: '通讯录',
          url: '/FriendsList'
        },
        {
          index: 2,
          icon: '',
          name: '发现',
          url: '/FindList'
        },
        {
          index: 3,
          icon: '',
          name: '我',
          url: '/My'
        }
      ]
    }
  },
  methods: {
    tabClick: function (index) {
      this.$store.commit('update_activeP', {index: index})
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
  @include navHei;
  border-top:solid $footerBorColor 1px;
  nav{
    height:100%;
    display:flex;
    flex-direction: row;
    div{
      height:100%;
      flex:1;
      @include center;
    }
    .green{
      color:green;
    }
  }
}
</style>
