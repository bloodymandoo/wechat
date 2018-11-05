<template>
  <header>
    <h2>微信</h2>
    <div class="right">
      <i class="search"></i>
      <i class="add"></i>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
header{
  @include navHei;
  padding:0 px2rem(20);
  background-color:$headerBgColor;
  color:$headerColor;
  display: flex;
  flex-direction: row;
  h2{
    height:100%;
    @include center;
  }
  .right{
    flex:1;
    display: flex;
    flex: row;
    justify-content: flex-end;
  }
}
</style>
