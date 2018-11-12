<template>
  <div id="login" :style="{background:'url('+imgurl+') no-repeat center'}">
    <div id="lang" :class="isLogin?'hide':'show'">
      <router-link to="Language">语言</router-link>
    </div>
    <div id="btn" :class="isLogin?'hide':'show'">
      <button class="login" @click="goPage('LoginDetail')">登录</button>
      <button class="register" @click="goPage('RegisterDetail')">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: ['isLogin'],
  data () {
    return {
      imgurl: require('@/assets/image/login/login.png')
    }
  },
  methods: {
    goPage: function (href) {
      console.log(this)
      this.$router.push(href)
    }
  }
}
</script>

<style lang="scss" scoped>
#login{
  height:100%;
  width:100%;
  position: relative;
  #lang{
    position: absolute;
    top:0;
    right:0;
    padding:px2rem(30);
    font-size:px2rem(30);
  }
  #btn{
    width:100%;
    position: absolute;
    bottom:px2rem(40);
    left:0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .login{
      background-color:green;
      border:none;
      box-shadow: none;
      outline: none;
      color:white;
      padding:px2rem(40) px2rem(120);
      border-radius:  px2rem(10);
      font-size:px2rem(37.5);
      &:active{
        opacity: 0.5;
      }
    }
    .register{
      background-color:white;
      border:none;
      box-shadow: none;
      outline: none;
      color:#333;
      padding:px2rem(40) px2rem(120);
      border-radius: px2rem(10);
      font-size:px2rem(37.5);
      &:active{
        opacity: 0.5;
      }
    }
  }
}
</style>
