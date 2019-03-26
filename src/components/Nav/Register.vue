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
        <h3>欢迎注册</h3>
        <from class="ant-form">

          <div class="ant-row">
            <div class="ant-wrap">
              <div class="ant-control">
                <input type="text" placeholder="11位手机号" class="ant-input" id="txt_telephone">
              </div>
              <div class="ant-form-explain" id="tel_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <div class="ant-control">
                <input type="text" placeholder="用户名" class="ant-input" id="txt_name">
              </div>
              <div class="ant-form-explain" id="name_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <div class="ant-control">
                <input type="password" placeholder="至少6位密码" class="ant-input" id="txt_password">
                <input type="button" class="ant-eye" id="eye-check">
              </div>
              <div class="ant-form-explain" id="password_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <input type="checkbox" class="check-section" id="check_agree">
              <span>我已阅读并同意
                                    <a href="">《安居用户注册协议》</a>
                                </span>
              <div class="ant-form-explain" id="check_error"></div>
            </div>
          </div>

          <div class="ant-row">
            <div class="ant-wrap">
              <button type="submit" class="ant-btn" id="btn_regist">
                <span>注 册</span>
              </button>
              <router-link to="/Login" class="register-login">已有账户?去登录</router-link>

            </div>
          </div>

        </from>

      </div>

    </div>

    <foot class="ant-globalFooter">

      <div class="ant-copyright">Copyright
        <i class="anticon anticon-copyright">
          <svg viewBox="64 64 896 896" class="" data-icon="copyright" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z">

            </path>
          </svg>
        </i>安居家装</div>

    </foot>

  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

  .contain {
    flex-direction: column;
    height: 100vh;
    overflow: auto;
    background: #f0f2f5;

    /*display: flex;*/
  }

  .contain {
    background-image: url("../../assets/login.svg");
    background-size: 100%;
  }

  .content {
    padding: 72px 0 24px;
    /*flex: 1 1;*/

  }

  .head {
    /*width: 100px;*/
    /*height: 50px;*/
    /*background: yellow;*/

    /*margin: 0 auto;*/

    text-align: center;

  }

  .head-link{
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
    color: rgba(0,0,0,.45);
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
    font-family: Chinese Quote,-apple-system,BlinkMacSystemFont,Segoe UI,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5em;
    color: rgba(0,0,0,.65);
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

  .ant-form input[type=checkbox], form input[type=radio] {
    width: 14px;
    height: 14px;
    box-sizing: border-box;
  }

  .ant-btn>span {
    pointer-events: none;
    display: inline-block;
  }

  .ant-form .ant-row a{
    color: #40a9ff;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  .ant-row .ant-btn {
    width: 50%;

    padding: 0 15px;
    font-size: 16px;
    border-radius: 4px;
    height: 40px;

    color: #fff;
    background-color: #40a9ff;
    /*outline: none;*/

    border: solid 1px #d9d9d9;

    cursor: pointer;
  }


  .register-login {
    float: right;
    line-height: 40px;
    float: right;
  }

  .ant-globalFooter {
    padding: 0 16px;
    margin: 48px 0 24px;
    text-align: center;
  }

  .ant-copyright {
    color: rgba(0,0,0,.45);
    font-size: 14px;
  }
</style>
