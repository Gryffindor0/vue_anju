<template>

    <!--案例模块--begin-->
    <div class="card-bx col-md-4 col-sm-4 col-xs-6" id="1">
        <a href="#">
            <div class="img-ct">
                <img src="../../../static/image/case_img01.jpg"></div>
            <div class="card-info">
                <p class="card-name ect">钱女士的雅居</p>
                <p class="card-detail">120m² /
                    三居 /
                    欧式 /
                    全包</p>
                <p class="card-cost ect">
                                    <span>
                                        18
                                    </span>
                    万
                </p>
            </div>
        </a>
    </div>

</template>

<script>

    export default {
        props: ["item"],
        name: "CaseItem",

        components: {},

        data: function () {
            return {}
        },

        methods: {},

        mounted: function () {

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
