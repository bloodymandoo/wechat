<template>
  <div class="friend">
    <div class="left">
      <img :src="friend.img"/>
    </div>
    <div class="right">
      <h3 class="title">{{friend.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Friend',
  props: ['friend']
}
</script>

<style lang="scss" scoped>
.friend{
  @include friendHei;
  border-bottom:solid gray 1px;
  display:flex;
  flex-direction:row;
  padding:5px 20px;
  .left{
    height:100%;
    @include center;
    img{
      height:px2rem(100);
      width:px2rem(100);
    }
  }
  .right{
    height:100%;
    padding:0 10px;
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: flex-start;
    flex:1;
    h3{
      padding:5px 0;
    }
  }
}
</style>
