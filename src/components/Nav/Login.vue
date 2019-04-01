<template>
    <div class="root">
        <div class="contain">
            <div class="content">
                <div class="head">
                    <div class="head-link">
                        <router-link to="/" class="">安居家装</router-link>
                    </div>
                    <div class="desc">帮您省心,放心,安心.</div>
                </div>

                <div class="main">
                    <h3>欢迎登录</h3>
                    <from class="ant-form">

                        <div class="ant-row">
                            <div class="ant-wrap">
                                <div class="ant-control">
                                    <input type="text" placeholder="手机号/用户名" class="ant-input" v-model="txt_telephone"
                                           @change="checkTel">
                                </div>
                                <div class="ant-form-explain" v-text="tel_error"></div>
                            </div>
                        </div>

                        <div class="ant-row">
                            <div class="ant-wrap">
                                <div class="ant-control">
                                    <input :type="pwd_type" placeholder="输入密码" class="ant-input"
                                           v-model="txt_password" @change="checkPassword">
                                    <input type="button" class="ant-eye" id="eye-check" @click="show_pwd">
                                </div>
                                <div class="ant-form-explain" v-text="password_error"></div>
                            </div>
                        </div>

                        <div class="ant-row">
                            <div class="ant-wrap">
                                <button type="submit" class="ant-btn" id="btn_login" @click="login_Btn">
                                    <span>登 录</span>
                                </button>

                            </div>
                        </div>

                        <div class="ant-row">
                            <div class="ant-wrap">

                                <div class="login-other">
                                    其他登录方式
                                    <!-- 微信图标 -->
                                    <a href="#">
                                        <i class="wechat-login-icon" style="color: rgb(0, 188, 13);">
                                            <svg viewBox="64 64 896 896" class="" data-icon="wechat" width="1em"
                                                 height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6 9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9z">

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

            <foot class="ant-globalFooter">

                <div class="ant-copyright">Copyright
                    <i class="anticon-copyright">
                        <svg viewBox="64 64 896 896" class="" data-icon="copyright" width="1em" height="1em"
                             fill="currentColor" aria-hidden="true">
                            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z">

                            </path>
                        </svg>
                    </i>安居家装
                </div>
            </foot>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "Login",
        data: function () {
            return {
                // refer_page
                from:null,

                // 电话文本框
                txt_telephone: '',
                tel_error: '',

                // 密码文本框--type
                pwd_type: 'password',
                txt_password: '',
                password_error: '',
            }
        },

        watch: {
            '$route': function (from) {
                this.from = from;
            }
        },


        methods: {
            // 显示密码
            show_pwd: function () {

                if (this.pwd_type == 'password') {
                    this.pwd_type = 'text';
                    // console.log(this.pwd_type);
                } else {
                    this.pwd_type = 'password';
                    // console.log(this.pwd_type);
                }
            },

            // 检查手机号
            checkTel: function () {
                var regMobile = /^1[3,4,5,7,8]\d{9}$/;

                if (this.txt_telephone) {
                    if (regMobile.test(this.txt_telephone)) {
                        this.tel_error = '';
                        // console.log(true);
                        return true;
                    } else {
                        this.tel_error = '*手机号码格式不正确';
                        // console.log(false);
                        return false
                    }

                } else {
                    this.tel_error = '*手机号码不能为空';
                }

            },

            // 检查密码
            checkPassword: function () {
                var regPwd = /^\w{6,}$/;
                if (this.txt_password) {
                    if (regPwd.test(this.txt_password)) {
                        this.password_error = '';
                        // console.log('true');
                        return true;
                    } else {
                        this.password_error = '*密码必须大于六位';
                        // console.log('false');
                        return false;
                    }

                } else {
                    this.password_error = '*密码不能为空';
                }
            },

            // 登录验证
            login_Btn: function () {
                if (this.checkTel() && this.checkPassword()) {

                    axios.post(this.Global.server_url + 'user/login/', {

                        telephone: this.txt_telephone,
                        password: this.txt_password,
                        // token: null
                    }).then((response) => {
                        // console.log(response);
                        if(response && response.data.status_code==='10003'){

                            // 登录成功
                            localStorage.setItem('token', response.data.token);
                            localStorage.setItem('user_id', response.data.user_id);
                            localStorage.setItem('nickname', response.data.nickname);
                            this.$router.go(-1);
                            // if (this.from) {
                            //     this.$router.go(-1);
                            // } else {
                            //     // 直接进入登录页,跳转到首页
                            //     this.$router.push({path: '/'})
                            // }

                        }else if(response && response.data.status_code==='10004'){
                            // 用户不存在
                            this.tel_error=response.data.status_text;

                        }else if(response && response.data.status_code==='10005') {
                            // 密码错误
                            this.password_error=response.data.status_text;
                        }else {
                            console.log(response.data.status_text)
                        }

                    }).catch((error) => {
                        // 请求出错
                        console.log(error);
                    })

                } else {
                    console.log('信息有误!!!')
                }
            }

        },
        mounted: function () {

        },
    }


</script>

<style scoped>
    /*通配*/
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    .root {
        height: 100%;
        overflow-x: hidden;
    }

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
