<template>
    <div class="col-md-3 ">
        <div class="row">

            <div class="col-md-11 author_left">

                <div class="row author_info">
                    <img src="../../../static/image/designer02.jpg" class="icon" alt="设计师头像"/>
                </div>
                <div class="row author_info">
                    <h4 class="des_name" v-text="item.des_name">
                        <!--申莹莹-->
                    </h4>
                </div>
                <div class="row author_info">
                    <span class="case_num">{{item.case_num}}套案例</span>
                </div>
                <div class="row author_info">
                    <button class="btn btn-default ">免费预约</button>
                </div>
                <div class="row">
                    <h5>个人简介</h5>
                    <p class="personal_profile" v-text="item.personal_profile"></p>
                </div>
                <div class="row">
                    <h5>设计理念</h5>
                    <p class="design_concept" v-text="item.design_concept">
                    </p>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "DesignerInfo",

        data: function () {
            return {

                item: [],
                des_name: '申莹莹',
                icon: '../../../static/image/designer02.jpg',
                case_num: 73,
                personal_profile: ' 我有很强的职责心，有很强的群众荣誉感，乐观开朗，\n' +
                '                        有很好的人迹关系，能够认真对待生活，\n' +
                '                        有熟练的护理技能与牢固的专业知识并能灵活运用到实际工作中。\n' +
                '                        我一向相信只要努力应对生活，心存一份感恩，再黑暗的地方也会有光明。',
                design_concept: '一个优秀的设计师一定要有自己擅长的一种设计风格，\n' +
                '                        但也要不断的学习其它众多的艺术设计风格。\n' +
                '                        因为许多因素决定了业主是千差万别的。并且艺术形式本来也是五彩纷呈的。\n' +
                '                        我们只有不断的丰富自己，才能使自己处于设计的巅峰状态，面对每一位业主。',

            }
        },

        methods: {},

        mounted: function () {

            axios.get(this.Global.server_url + "designer/designerDetail/", {
                params: {
                    designer_id: this.$route.query.designer_id
                    // 测试id
                    // designer_id:1
                }
            }).then((response) => {
                console.log('设计师信息');
                this.item = response.data.content[0];
                console.log(this.item);

            }).catch((error) => {
                console.log(error);
            });

        },
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