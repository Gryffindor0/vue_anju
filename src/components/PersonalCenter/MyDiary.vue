<template>
    <div>
        <div class="personal_diary center_right">
            <div class="collection">
                <div class="diary_modal">
                    <div class="clumn_name">
                        <h5>我的装修日记</h5>
                    </div>
                    <div class="diary_content" v-show="diaryInfo">
                        <!--日记列表--begin-->
                        <div class="diary_list" v-for="di in diaryInfo">
                            <!--日记标题--begin-->
                            <div class="diary_title">
                                <p class="diary_name">
                                    <a href="#" class="diary_info" :id="di.id" v-text="di.diary_title">

                                    </a>
                                </p>

                                <div class="time">
                                    <p v-text="'创建时间：'+di.publish_date"></p>
                                    <p>更新时间：</p>
                                </div>

                            </div>
                            <!--日记标题--end-->

                            <!--日记信息--begin-->
                            <div class="diary_detail">

                                <div class="msg_top">
                                    <span>房屋信息：</span>
                                    <em class="border_right" v-text="di.area+'m²'"></em>
                                    <em class="border_right" v-text="di.style">

                                    </em>
                                    <em v-text="di.reno_type">

                                    </em>
                                    <a class="btn_edit" @click="showModalBox">编辑</a>
                                </div>
                                <p v-text="'所在小区：'+di.village"></p>
                                <p v-text="'装修公司：'+di.company"></p>
                            </div>
                            <!--日记信息--end-->

                            <!--日记按钮--begin-->
                            <div class="diary_btn">
                                <span v-text="'全部日记：'+di.count+'篇'"></span>
                                <div class="btn">
                                    <router-link :to="{ path:'/WriteDiary', query:{diary_id:di.id}}" class="btn_continue">续写日记
                                    </router-link>
                                    <!--<input type="button" class="btn_continue" value="续写日记" @click="">-->
                                </div>

                            </div>
                            <!--日记按钮--end-->

                        </div>
                        <div class=" create_diary">
                            <span class="btn_create" @click="showModalBox">+新建装修日记</span>
                        </div>
                    </div>

                    <div class="no_diary" v-show="!diaryInfo">

                        <img src="../../assets/rabbit.png" alt="">
                        <div>
                            <span>您还没有写过任何日记</span>
                            <a href="#" class="btn_instant" @click="showModalBox">马上去写装修日记</a>
                        </div>


                    </div>

                </div>

            </div>
        </div>
        <modal-box v-show="showModal" @showModalBox="showModalBox"></modal-box>
    </div>


</template>

<script>
    import ModalBox from './ModalBox'

    import axios from 'axios'

    export default {
        name: "MyDiary",
        components: {'modal-box': ModalBox},
        data: function () {
            return {
                // showDiary: true,
                diaryInfo: [
                    {
                        "id": "1", "diary_title": "日记一", "publish_date": "3.20", "area": "210", "style": "欧式",
                        "reno_type": "全包", "village": "宏达矿", "company": "安居客", "count": "2"
                    }
                ],

                showModal: false,
            }
        },
        methods: {
            showModalBox: function () {
                this.showModal = !this.showModal;
                console.log(this.showModal)
            },




        },

        mounted: function () {

            axios.get(this.Global.server_url + "user/getUserDiary/", {
                params: {
                    // user_id:this.Global.user_id,
                    // 测试id
                    user_id: window.localStorage.getItem("user_id"),

                }
            }).then((response) => {
                // 测试
                // console.log(response);

                if (response && response.data.status_code=== "10009") {
                    diaryInfo=response.data.content;
                }

            }).catch((error) => {
                console.log(error);
            });

        }


    }
</script>

<style scoped>
    .center_right {
        border: solid 1px #cccccc;
        background-color: white;
        margin-left: 15px;
    }

    /* 我的日记--begin-*/
    .diary_modal {
        width: 100%;
        height: 100%;
        padding: 20px;
    }

    .clumn_name {
        padding: 10px 0;
        border-bottom: dotted 1px grey;

    }

    .clumn_name h5 {
        border-left: solid 2px green;
        padding-left: 10px;
        font-weight: 600;
    }

    .diary_content .diary_list {
        margin: 30px auto 0;
        border: 1px #eee solid;

    }

    .diary_content a {
        color: #01af69;
        text-decoration: none !important;
        outline: none;
    }

    .diary_content a:hover {
        color: #ec3901;
    }

    .diary_list {
        width: 100%;
    }

    .diary_title {
        padding: 20px;
        background: #f8f8f8;
    }

    .diary_title .diary_name {
        float: left;
        width: auto;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        color: #333;

    }

    .diary_title .diary_name a {
        color: #333;
        cursor: pointer;
    }

    .diary_title .diary_name a:hover {
        color: #ec3901;
    }

    .diary_title .time {
        width: 100%;
        height: 18px;
        padding-top: 15px;
        clear: both;

    }

    .diary_title .time p {
        float: left;
        padding-right: 20px;
        font-size: 12px;
        color: #999;
    }

    .diary_detail {
        padding: 20px;
        margin-top: 0;
        border-bottom: 1px #eee solid;
    }

    .diary_detail .msg_top {
        width: 100%;
        height: 14px;
        line-height: 14px;
    }

    .diary_detail .msg_top em {

        font-style: normal;
        padding: 0 10px;

    }

    .diary_detail p {
        width: 100%;
        margin-top: 10px;
    }

    .diary_detail .msg_top a {
        float: right;
        cursor: pointer;
    }

    .diary_detail a {
        color: #01af69;
    }

    .diary_btn {
        padding: 10px 20px;
    }

    .diary_btn span {
        vertical-align: center;
    }

    .btn input {
        color: white;
        border: none;
        outline: none;
        background: #01cb79;
    }

    .create_diary {
        width: 100%;
        height: 55px;
        margin: 30px 0 80px;
        line-height: 55px;
        background: #f8f8f8;
    }

    .create_diary .btn_create {
        display: block;
        margin: 0 auto;
        font-size: 16px;
        text-align: center;
        color: #01af69;
        cursor: pointer;
    }

    .no_diary {
        width: 100%;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn_instant {
        display: block;
        padding: 8px 30px;
        margin-top: 40px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background-color: #f36f20;
    }

    /* 我的日记--end--*/
</style>
