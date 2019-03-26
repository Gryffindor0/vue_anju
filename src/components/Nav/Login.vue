<template>
  <div class="contain">
    <div class="content">
      <div class="head">
        <div class="head-link">
          <router-link to="/" class="">安居家装</router-link>
        </div>
        <div class="desc">帮您省心,放心,安心.
        </div>
      </div>

      <div class="main">
        <h3>欢迎登录</h3>
        <from class="ant-form">

          <div class="ant-row">
            <div class="ant-wrap">
              <div class="ant-control">
                <input type="text" placeholder="手机号/用户名" class="ant-input" id="txt_telephone">
              </div>
              <div class="ant-form-explain" id="tel_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <div class="ant-control">
                <input type="password" placeholder="输入密码" class="ant-input" id="txt_password">
                <input type="button" class="ant-eye" id="eye-check">
              </div>
              <div class="ant-form-explain" id="password_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <button type="submit" class="ant-btn" id="btn_login">
                <span>登 录</span>
              </button>

            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">

              <div class="login-other">
                其他登录方式
                <a href="#">
                  <i class="wechat-login-icon" style="color: rgb(0, 188, 13);">
                    <svg viewBox="64 64 896 896" class="" data-icon="wechat" width="1em" height="1em"
                         fill="currentColor" aria-hidden="true">
                      <path
                        d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z">

                      </path>
                    </svg>
                  </i>
                </a>
                <router-link to="/Register" class="login-register">注册账户</router-link>
              </div>

            </div>
          </div>

        </from>

      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style scoped>

  /*通配*/


  .contain {

    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5;

  }

  .contain {
    background-image: url("../../assets/login.svg");
    background-size: 100%;
  }

  .content {
    padding: 72px 0 24px;

  }

  .head {

    text-align: center;

  }

  .head-link {
    height: 44px;
    line-height: 44px;
  }

  .head a {
    text-decoration: none;
    color: #00b3ee;
    font-size: 32px;

  }

  .desc {

    font-size: 14px;
    color: rgba(0, 0, 0, .45);
    margin-top: 12px;
    margin-bottom: 40px;
  }

  .main {
    width: 368px;
    margin: 0 auto;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 20px;
    font-weight: 500;
  }

  .ant-form {
    font-family: Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5em;
    color: rgba(0, 0, 0, .65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .ant-form .ant-row {

    /*background: #00b3ee;*/
    margin-bottom: 24px;
    border-radius: 6px;
    height: 44px;

  }

  .ant-control {
    /*background: #00b3ee;*/

    border: solid 1px #d9d9d9;

    border-radius: 6px;
    position: relative;
  }

  .ant-row .ant-input {

    width: 100%;
    height: 42px;
    padding: 4px 11px;
    border: none;
    font-size: 16px;
    outline: none;
    border-radius: 6px;
  }

  .ant-row .ant-form-explain {
    color: #f5222d;
  }

  .ant-row .ant-eye {
    width: 24px;
    height: 20px;
    position: absolute;
    top: 12px;
    right: 4px;
    border: none;
    outline: none;
    cursor: pointer;
    background-image: url('../../assets/eye.png')
  }

  .ant-row .ant-btn {
    width: 100%;

    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    height: 40px;

    color: #fff;
    background-color: #40a9ff;

    border: solid 1px #d9d9d9;

    cursor: pointer;
  }

  .ant-form .ant-row a {
    color: #40a9ff;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }

  .login-register {
    float: right;
    line-height: 40px;
    float: right;
  }

  .login-other .wechat-login-icon {
    font-size: 28px;

    margin-top: 10px;
  }

  .ant-globalFooter {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
  }

  .ant-copyright {
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }
</style>
