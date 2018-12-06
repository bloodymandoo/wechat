<template>
  <section class="LoginDetail">
    <span class="back">
      <i></i>
    </span>
    <h2>{{type}}</h2>
    <mu-form :model="form" v-if="loginType=='phone'" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="input" label="国家/地区">
        <mu-text-field v-model="form.country"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="input" label="手机号">
        <mu-text-field v-model="form.phone"></mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-form :model="form" v-if="loginType=='chat'" class="mu-demo-form" :label-position="labelPosition" label-width="100">
      <mu-form-item prop="input" label="账号">
        <mu-text-field v-model="form.acount"></mu-text-field>
      </mu-form-item>
      <mu-form-item prop="input" label="密码">
        <mu-text-field v-model="form.password"></mu-text-field>
      </mu-form-item>
    </mu-form>
    <mu-row>
      <mu-col span="12"><a class="type">{{typeName}}</a></mu-col>
    </mu-row>
    <mu-row>
      <mu-col span="12">
        <mu-button color="success" class="action">
          {{actionName}}
        </mu-button>
      </mu-col>
    </mu-row>

  </section>
</template>

<script>
export default {
  name: 'LoginDetail',
  data () {
    return {
      labelPosition: 'top',
      loginType: 'phone',
      byPhone: {
        form: {
          country: '',
          phone: ''
        },
        typeName: '手机号登录',
        otherTypeName: '用微信号/QQ号/邮箱登录',
        actionName: '下一步'
      },
      bychat: {
        form: {
          account: '',
          password: ''
        },
        typeName: '微信号/QQ号/邮箱登录',
        otherTypeName: '用手机号登录',
        actionName: '登录'
      }
    }
  },
  computed: {
    typeName () {
      return this.loginType === 'phone'
        ? this.byPhone.typeName : this.bychat.typeName
    },
    actionName () {
      return this.loginType === 'phone'
        ? this.byPhone.typeName : this.bychat.typeName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
