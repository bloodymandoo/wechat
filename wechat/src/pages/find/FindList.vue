<template>
  <scroller class="findList">
    <div class="content">
      <div class="find"
      v-for="(item,key,index) in findList"
      :key="index"
      >
      <div class="item" v-for="it in item" :key="it.name">
        <div class="left">
          <img :src="it.img" />
        </div>
        <div class="center">
          <h3>{{it.name}}</h3>
        </div>
        <div class="right">
          <div class="news">
            {{it.news}}
          </div>
        </div>
        </div>
      </div>
    </div>
  </scroller>
</template>

<script>
import findData from './findData'
export default {
  name: 'FindList',
  data () {
    return {
      findList: findData
    }
  },
  components: {
    findData
  }
}
</script>

<style lang="scss" scoped>
.findList{
  flex:1;
  height:1px;
  background-color:#e4e4e4;
  .content{
    padding:20px 0;
  }
  .find{
    margin-bottom:20px;
    background-color:white;
    padding:0 px2rem(37.5);
    .item{
      border-bottom:solid #e4e4e4 1px;
      display: flex;
      flex-direction: row;

      height:px2rem(120);
      .left{
        height:px2rem(120);
        width:px2rem(120);
        @include center;
        img{
          height:px2rem(80);
          width:px2rem(80);
        }
      }
      .center{
        width:px2rem(320);
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .find:last-child{
    margin-bottom:0;
  }
}
</style>
