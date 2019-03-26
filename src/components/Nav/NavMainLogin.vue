<template>
  <ul class="nav navbar-nav navbar-right">
    <li><router-link to="/Login" class="a1 login" v-if="isLogin"
           @click="login_register">登录</router-link></li>
    <li><router-link to="/Register" class="a1 register" v-if="isLogin"
           @click="login_register">注册</router-link></li>
    <li><a href="#" class="a1 nick_name"
           v-text="nick_name" v-if="!isLogin"
           @click="login_register"></a></li>
  </ul>
</template>

<script>
  export default {
    name: "NavMainLogin",
    data: function () {
      return {
        nick_name: "小猪佩奇",
        isLogin:true
      }
    },
    methods: {
      login_register: function () {
        this.isLogin= !this.isLogin
      }
    }
  }
</script>

<style scoped>
  .navbar-right .a1{
    font-size: 16px;
    font-weight: 700;
  }
  .navbar-right .a1:hover{
    color: #15a616 !important;
  }
</style>
