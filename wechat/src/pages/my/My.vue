<template>
  <scroller class="my">
    <div class="content">
      <div class="myDetail">
        <div class="pic">
          <img :src="myDetail.pic"/>
        </div>
        <div class="info">
          <h3>{{myDetail.name}}</h3>
          <p>微信号：{{myDetail.NO}}</p>
        </div>
        <div class="QRcode">
          <img :src="myDetail.QR"/>
        </div>
      </div>
      <div class="cont"
      v-for="(item,key,index) in List"
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
import myData from './myData'
export default {
  name: 'My',
  data () {
    return {
      List: myData.list,
      myDetail: myData.my
    }
  },
  components: {
    myData
  }
}
</script>

<style lang="scss" scoped>
.my{
  flex:1;
  height:1px;
  background-color:#e4e4e4;
  .content{
    padding:20px 0;
    .myDetail{
      margin-bottom:20px;
      background-color:white;
      padding:5px px2rem(37.5);
      display: flex;
      flex-direction: row;
      .pic{

        img{
          height:px2rem(180);
        }
      }
      .info{
        padding:0 px2rem(40);
        flex:1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
      }
      .QRcode{
        width:px2rem(120);
        @include center;
        img{
          height:px2rem(60);
        }
      }
    }
    .cont{
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
}
</style>
