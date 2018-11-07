<template>
  <div class="message">
    <div class="left">
      <img :src="message.img"/>
    </div>
    <div class="center">
      <h3 class="title">{{message.title}}</h3>
      <p class="detail">{{message.detail}}</p>
    </div>
    <div class="right">
      <span class="time">{{message.time}}</span>
      <i :class="message.isAlarm?'alarm':''"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: ['message']
}
</script>

<style lang="scss" scoped>
.message{
  @include messageHei;
  border-bottom:solid gray 1px;
  display:flex;
  flex-direction:row;
  padding:5px 20px;
  .left{
    height:100%;
    @include center;
    // width:px2rem(160);
    img{
      height:px2rem(120);
      width:px2rem(120);
    }
  }
  .center{
    height:100%;
    padding:0 10px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    flex:1;
    h3{
      padding:5px 0;
    }
  }
  .right{
    height:100%;
    width:px2rem(180);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-end;
    .time{
      height:50%;
      @include center;
    }
    i{
      height:50%;
      @include center;
    }
  }
}
</style>
