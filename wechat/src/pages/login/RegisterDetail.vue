<template>
  <div id="registerDetail">
    <div class="info">
      <div class="info-item">
        <div class="name">
          <div class="border">
            <label for="name">
              昵称
            </label>
            <input type="text" name="name" id="name">
          </div>
        </div>
        <div class="pic">
        </div>
      </div>
      <div class="info-item">
        <div class="location border">
          <label for="location">
            国家/地区
          </label>
          <input type="text" name="location" id="location">
        </div>
      </div>
      <div class="info-item">
        <div class="phone border">
          <label for="phone">
            手机号
          </label>
          <input type="text" name="phone" id="phone">
        </div>
      </div>
      <div class="info-item">
        <div class="password border">
          <label for="password">
            密码
          </label>
          <input type="password" name="password" id="password">
        </div>
      </div>
    </div>
    <button class="register">注册</button>
    <p class="instruction">

    </p>
  </div>
</template>

<script>
export default {
  name: 'RegisterDetail'
}
</script>

<style lang="scss" scoped>
#registerDetail{
  height:100%;
  padding:px2rem(40);
  .info{
    .info-item{
      display: flex;
      flex-direction: row;
      .pic{
        width:px2rem(160);
        height:px2rem(160);
        padding:px2rem(40);
      }

      .name{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        .border{
          height:px2rem(100);
          flex:0
        }
      }
      .border{
        height:px2rem(100);
        flex:1;
        border-bottom:solid gray 1px;
        display:flex;
        flex-direction: row;
        label{
          width:px2rem(240);
          display:block;
        }
        input{
          border:none;
          outline: none;
          display:block;
        }
      }
    }
  }

}
</style>
