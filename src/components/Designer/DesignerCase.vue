<template>
    <div class="col-md-9 case_right">
        <h4>设计作品</h4>

        <div id="idData" class="row case module-cont">

            <case-item v-for="(item,index) in case_info"
                       :key="index"
                       :item="item"></case-item>

        </div>

        <!--<table id="idData" class="table">-->
        <!--</table>-->
        <!--<div id="barcon" name="barcon">-->
        <!--</div>-->
        <go-page></go-page>

    </div>
</template>

<script>


    import CaseItem from '../Company/CaseItem'
    import GoPage from './GoPage'

    import axios from 'axios'

    export default {
        name: "DesignerCase",
        components: {
            'case-item': CaseItem,
            'go-page': GoPage
        },

        data: function () {
            return {

                case_info: [

                    // {
                    //     case_id: '7',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '冰湖南湾',
                    //     area: '136',
                    //     price: '17',
                    //     type: '二居',
                    //     sty: '中式',
                    //     reno: '全包',
                    // },

                    // {
                    //     case_id: '37',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '李总雅居',
                    //     area: '120',
                    //     price: '18',
                    //     type: '三居',
                    //     sty: '复古',
                    //     reno: '全包',
                    // },

                    // {
                    //     case_id: '8',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '冰湖南湾',
                    //     area: '136',
                    //     price: '17',
                    //     type: '二居',
                    //     sty: '中式',
                    //     reno: '全包',
                    // },

                    // {
                    //     case_id: '6',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '李总雅居',
                    //     area: '120',
                    //     price: '18',
                    //     type: '三居',
                    //     sty: '复古',
                    //     reno: '全包',
                    // },

                    // {
                    //     case_id: '10',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '冰湖南湾',
                    //     area: '136',
                    //     price: '17',
                    //     type: '二居',
                    //     sty: '中式',
                    //     reno: '全包',
                    // },

                    // {
                    //     case_id: '2',
                    //     case_img: '../../../static/image/case_img21.jpg',
                    //     case_name: '李总雅居',
                    //     area: '120',
                    //     price: '18',
                    //     type: '三居',
                    //     sty: '复古',
                    //     reno: '全包',
                    // },

                ],
            }
        },

        methods: {},

        mounted: function () {
            axios.get(this.Global.server_url + "designer/designerDetail/", {
                params: {
                    // 正确id
                    designer_id: this.$route.query.designer_id
                    // 测试id
                    // designer_id:1
                }
            }).then((response) => {
                console.log('设计师信息');
                this.case_info = response.data.content;
                console.log(this.case_info);

            }).catch((error) => {
                console.log(error);
            });
        }

    }
</script>

<style scoped>
    ul, li, a {
        margin: 0;
        padding: 0;
    }

    body {
        background: #f8f8f8;
    }

    /*---------------------主体开始--------------------*/
    .container .text {
        margin-bottom: 20px;
    }

    .container .author_left, .case_right {
        background-color: white;
    }

    .container .row .author_left {
        padding: 10px 30px;
    }

    .container .row .author_info img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .container .row .author_info button {
        background-color: orangered;
        color: white;
        outline: none;
        margin: 10px 0;
    }

    .container .row .author_info {
        text-align: center;
    }

    @media (max-width: 767px) {
        .container .row .second_img {
            display: none;
        }
    }

    @media (max-width: 610px) {
        .container .row .img .second_img {
            display: none;
        }

        .container .row .company_list {
            padding-left: 30px;
        }

        .paging {
            display: none;
        }

        .paging1 {
            margin-left: 35%;
        }

        .case {
            margin-left: 5%;
        }
    }

    @media (max-width: 437px) {
        .container, .btn-group {
            margin: 0;
            padding: 0;
        }

        .container .text {
            display: none;
        }

        #btn-group {
            margin-left: 12%;
        }

        .paging {
            display: none;
        }

        .paging1 {
            padding: 0;
        }

        .case .second_img, .case .fourth_img {
            display: none;
        }

        .module-cont .card-cost {
            top: 2px;
        }

    }

    /*-----------案例详情---------------*/
    .module-cont .card-bx {
        padding: 9px 10px;
    }

    .module-cont .card-bx a {
        text-decoration: none;
    }

    .module-cont .card-bx .img-ct {
        text-align: center;
    }

    .module-cont .card-bx img {
        width: 80%;
        height: 80%;

    }

    .module-cont .card-info {
        position: relative;
        margin: 12px 10px 0;
    }

    .module-cont .card-name {
        font-size: 16px;
        color: #333;
    }

    .ect {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .module-cont .card-detail {
        margin-top: 6px;
        font-size: 12px;
        color: #999;
    }

    .module-cont .card-cost {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 12px;
        color: #999;
    }

    .module-cont .card-cost span {
        color: #ff5a00;
    }

    .module-cont .card-bx:hover {
        box-shadow: 0 0 5px rgba(166, 166, 166, 0.73);
    }

    /*-----------案例列表结束-------------*/

    /*------------分页开始--------------*/
    #barcon {
        margin-left: 33%;
        margin-bottom: 20px;
    }

    @media (max-width: 993px) {
        #barcon {
            margin-left: 25%;
        }
    }

    @media (max-width: 768px) {
        #barcon {
            margin-left: 20%;
        }
    }

    @media (max-width: 610px) {
        #barcon {
            margin-left: 8%;
        }

        .page_1 {
            width: 15%;
        }
    }

    @media (max-width: 437px) {
        #barcon {
            margin-left: 8%;
        }

        .page_1 {
            width: 10%;
        }
    }

    /*------------分页结束--------------*/
    /*---------------------主体结束--------------------*/


</style>