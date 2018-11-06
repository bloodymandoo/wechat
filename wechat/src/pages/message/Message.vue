<template>
  <div class="message">
    <div class="left">
      <img :src="message.img"/>
    </div>
    <div class="center">
      <p class="title">{{message.title}}</p>
      <span class="detail">{{message.detail}}</span>
    </div>
    <div class="right">
      <span class="time">{{message.time}}</span>
      <i v-show="message.isAlarm" class=""></i>
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
}
</style>
