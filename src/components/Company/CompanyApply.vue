<template>
    <div id="modal" class="modal" @click="$emit('myevent',false)">

        <div class="modal-content">

            <div class="content-header">
                <span class="close" @click="$emit('myevent',false)">×</span>
            </div>

            <div class="content-body">
                <p class="virtual_title">
                    免费预约<span class="company_name"><!--公司名--></span>装修服务
                </p>

                <div class="virtual_login" v-if="needLogin">
                    <!--<div class="virtual_login" v-if="token">-->

                    <router-link to="/Login" class="">点击前往登录--></router-link>

                </div>


                <div class="virtual_info" v-if="noHouse">
                    <!--<div class="virtual_info" v-if="noHouse">-->

                    <router-link to="/PersonalCenter/" class="">点击到个人中心填写房屋信息...</router-link>
                    <!--<router-link :to="{ path:'/Personal/二级房屋', query:{user_id:1}}" class="">点击到个人中心填写房屋信息...</router-link>-->
                </div>

                <div class="select-house" v-if="houseInfo">
                    <!--<div class="select-house" v-if="hasHouse">-->

                    <select name="" id="house_select" class="house_block" v-model="house_id">

                        <option value="0">
                            选择房屋信息...
                        </option>

                        <option :value="item.id" v-for="(item,index) in houseInfo"
                                :key="index" v-text="item.name">
                        </option>

                    </select>

                    <!--<h6>{{house_id}}</h6>-->

                    <button class="submit_btn" @click="appoint">
                        立即预约
                    </button>

                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "CompanyApply",
        components: {},

        data: function () {
            return {
                needLogin: false,
                noHouse: false,

                // houseInfo:false,
                houseInfo: null,

                house_id:"0",

            }
        },

        methods: {

            appoint: function () {
                axios.post(this.Global.server_url + "user/addAppointment/", {
                    // 房屋id
                    house_id:this.house_id,
                    // 测试id
                    // house_id:1,
                    // 公司id
                    company_id:this.$route.query.company_id,
                    // 测试id
                    // company_id:1,
                    // 用户id
                    user_id:this.Global.user_id,
                    // 测试id
                    // user_id: 1,

                }).then((response) => {
                    console.log(response);
                    if (response && response.data.status_code=== "10020") {
                        // 预约成功
                        alert(response.data.status_text);
                        // 模态框消失
                        // modal.style.display = "block";
                        this.$router.push({path: '/personalCenter/myOrder'})

                    } else if(response && response.data.status_code=== "10022") {
                        // 已经预约
                        alert(response.data.status_text);
                    }
                    else {
                        // 预约失败
                        alert(response.data.status_text);
                    }

                }).catch((error) => {
                    console.log(error);
                });

            }
        },

        mounted: function () {

            if (window.localStorage.getItem("token")) {
                // 登录过
                axios.get(this.Global.server_url + "user/getHouseList/", {
                    // token
                    headers: {
                        token: window.localStorage.getItem("token"),
                    },
                    params: {
                        user_id:window.localStorage.getItem("user_id"),
                        // 测试id
                        // user_id: 1,

                        house_id: "",
                        // token: this.token
                    }
                }).then((response) => {
                    // 测试
                    // console.log(response);

                    if (response && response.data.status_code === "10006") {
                        // 登录过期

                        // 需要登录
                        this.needLogin = true;
                        // 没有房屋
                        this.noHouse = false;


                    } else if (response && response.data.status_code === "10009") {
                        // 找到房屋信息,渲染

                        // 需要登录
                        this.needLogin = false;
                        // 没有房屋
                        this.noHouse = false;

                        // 有房屋信息
                        this.houseInfo = response.data.content;

                    }
                    else {
                        // 没有房屋信息

                        // 需要登录
                        this.needLogin = false;
                        // 没有房屋
                        this.noHouse = true;
                        // this.$router.push({path: '/personalCenter/'})

                    }

                }).catch((error) => {
                    console.log(error);
                });
            } else {
                // 没有登录过
                // 需要登录
                this.needLogin = true;
                // 没有房屋
                this.noHouse = false;
            }

        }
    }
</script>

<style scoped>


    /*预约模态框-begin-*/
    .modal {
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);

        position: fixed;
        left: 0;
        top: 0;
        z-index: 10000;

    }

    .modal-content {
        width: 35%;
        height: 55%;

        min-width: 260px;
        min-height: 200px;

        margin: 160px auto;
        background: #fff;

    }

    .content-header {
        width: 100%;
        height: 15%;

    }

    .close {
        color: #b7b7b7;
        font-size: 30px;
        font-weight: bold;
        margin-right: 20px;
        transition: all 0.3s;
    }

    .close:hover, .close:focus {
        color: #95b4ed;
        text-decoration: none;
        cursor: pointer;
    }

    .content-body {

        width: 100%;
        height: 85%;

    }

    .virtual_title, .virtual_login, .virtual_info {
        margin-top: 20px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 20px;
        text-align: center;
        color: #444;
    }

    .virtual_info, .virtual_title span {

        margin-top: 20px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 20px;
        text-align: center;
        color: #ff5a00;
    }

    .select-house {
        width: 50%;
        height: 50%;
        margin: 0 auto;

    }

    .house_block {

        display: inline-block;
        width: 100%;
        height: 20%;

        margin: 32px auto;

    }

    .submit_btn {

        display: inline-block;
        width: 100%;
        height: 20%;
        margin: 25px auto 0;
        text-align: center;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        line-height: 20%;
        cursor: pointer;
        color: #fff;
        background-color: #ff5a00;
        outline: none;
        border: none;

    }

    .submit_btn[disabled=disabled], .submit_btn[disabled=disabled]:hover {

        background-color: #ccc;
        cursor: default;

    }

    /*预约模态框-end-*/

    /*媒体查询-begin-*/

    /*大屏幕*/

    @media (max-width: 1200px) {

    }

    /*中等屏幕以下*/
    @media (max-width: 992px) {

        .wrap-l {
            display: none;
        }

        .case-cont .card-bx:nth-child(3) ~ div {
            display: none;
        }

        .portrait-cont .portrait-bx:nth-child(2) ~ div {
            display: none;
        }

        .wrap-as {
            display: block;
        }

        .company-right {
            display: none;
        }
    }

    /*中等屏幕以上*/
    @media (min-width: 992px) {

        .wrap-as {
            display: none;
        }
    }

    /*小屏幕以下*/
    @media (max-width: 768px) {

    }

    /*媒体查询-end-*/
</style>
