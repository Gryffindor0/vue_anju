<template>

    <!--设计师模块--begin-->
    <div class="portrait-bx col-sm-6 col-md-3" :id="item.des_id">

        <router-link :to="{ path:'/DesignerDetail', query:{designer_id:item.designerinfo__id}}" class="">
            <div class="img-ct">
                <img class="img--lazy" :src="item.designerinfo__icon"
                     data-original="" alt="设计师头像" style="display: inline;">
            </div>

            <div class="portrait-info">
                <p class="portrait-name">
                    {{item.designerinfo__name}}
                </p>

                <p class="portrait-detail">
                    {{item.designerinfo__case_num}}套案例
                </p>
            </div>
        </router-link>
    </div>
    <!--设计师模块--end-->

</template>

<script>

    // import DesignerItem from './DesignerItem'
    export default {

        props: ["item"],
        name: "DesignerItem",

        components: {
            // 'company-main-left': CompanyMainLeft,
            // 'company-main-right': CompanyMainRight,
        },

        data: function () {
            return {}
        },

        methods: {},

        mounted: function () {

        }

    }
</script>

<style scoped>

    /*通配符*/
    body {
        background: #F8F8F8;
    }

    /**, p {*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*}*/

    /*p {*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*}*/
    a {
        font-family: "Microsoft YaHei", 微软雅黑, 黑体, 宋体, "Microsoft JhengHei", 华文细黑, STHeiti, MingLiu;
        cursor: pointer;
        outline: none;
        text-decoration: none !important;
    }

    /*dl, ol, ul {*/
    /*list-style: none;*/
    /*margin-bottom: 0;*/
    /*}*/

    /*内容模块-begin-*/
    .contain {
        /*my*/
        /*background: pink;*/

        /*!*cl*!*/
        position: relative;
        width: 80%;
        /*padding-bottom: 160px;*/
        margin: 0 auto;

    }

    .main-content {
        position: relative;
    }

    /*公司基本信息模块-begin-*/

    /*路径导航-begin-*/
    .breadcrumb {
        background-color: #F8F8F8;
        position: relative;
        padding: 10px 0;
        font-size: 12px;

        margin-top: -30px;
    }

    .breadcrumb li {
        float: left;
        height: 20px;
        margin-right: 8px;
        line-height: 20px;
    }

    .breadcrumb .breadcrumb-pre a {
        float: left;
        color: #999;
    }

    .breadcrumb > li + li:before {
        padding: 0;
        content: "";
    }

    /*路径导航-end-*/

    /*基本信息-begin-*/

    .content-wrap {
        background: #c7254e;
    }

    .left-wrap {

    }

    .left-wrap img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .right-wrap {

    }

    .com-name {
        font-size: 28px;
        color: #333;
        margin-right: 15px;
        font-weight: bold;
        line-height: 34px;
        height: 38px;
    }

    .collect-shop {
        position: relative;
        top: 10px;
        float: right;
        cursor: pointer;
    }

    .collect-icon, .uncollect-icon {
        display: inline-block;
        width: 18px;
        height: 17px;
        margin-right: 3px;
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: text-bottom;
    }

    .collect-shop .uncollect-icon {
        background-image: url("../../assets/uncollect-icon.svg"), none;
    }

    .collect-shop .collect-icon {
        background-image: url("../../assets/collect-icon.svg"), none;
    }

    .com-name, .license {
        vertical-align: middle;
        display: inline-block;
    }

    .license {
        /* width: 17px; */
        /* height: 17px; */
        /* position: relative; */
        /* font-size: 12px; */
        color: #fff;
        background-color: #ccc;
        border-radius: 1px;
        text-align: center;
        line-height: 17px;
        cursor: default;
        margin-right: 4px;
    }

    .bs-lic-pass {
        background-color: #5cdbd3;
    }

    .auth-pass {
        background-color: #ffad77;
    }

    i {
        font-style: normal;
    }

    .hover-tips {
        position: absolute;
        top: 18px;
        left: 2px;
        font-size: 12px;
        color: #333;
        background: #fff;
        border: 1px solid #eee;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);
        display: none;
        box-sizing: border-box;
    }

    /*.license:hover .hover-tips {*/
    /*display: block;*/
    /*}*/

    .tag-name {
        font-size: 14px;
        color: #666;
        margin-right: 10px;
        line-height: 17px;
        height: 17px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
    }

    .tag-name i {
        font-style: normal;
        color: #151515;
    }

    .service-num-bar {
        margin-top: 35px;
    }

    .com-info-board .num {
        font-size: 20px;
        color: #333;
        font-weight: bold;
        text-align: center;
    }

    .com-info-board .lab {
        margin-top: 2px;
        font-size: 14px;
        color: #666;
        text-align: center;
    }

    .clearfix:after {
        display: block;
        height: 0;
        clear: both;
        content: " ";
        visibility: hidden;
    }

    .right-wrap .head-com-tel.shopTreasure {
        font-weight: bold;
    }

    .right-wrap .head-com-tel {
        height: 22px;
        margin-top: 30px;
        font-size: 18px;
        color: #333;
        text-align: justify;
        line-height: 22px;
    }

    .icon-contact-tel {

        /*top: 3px;*/
        /*position: relative;*/
        margin-right: 8px;
        height: 19px;
        width: 19px;
    }

    .contact-bar {

        margin-top: 30px;

    }

    .orange-btn {

        width: 180px;
        height: 48px;

        line-height: 38px;
        border: none;
        outline: none;
        color: #fff;
        font-size: 18px;

        text-align: center;
        background-color: #ff5a00;

        cursor: pointer;

    }

    /*基本信息-end-*/

    /*公司基本信息模块-end-*/

    /*案例模块-begin-*/
    .cont {

        padding: 0px;
    }

    .module-cont {
        /*my*/
        /*height: 500px;*/

        /*width: 80%;*/
        /*!*cl*!*/
        /*margin: 0 auto;*/
        margin-bottom: 20px;
        padding: 30px;
        background: #fff;
    }

    .module-cont .title-bar {
        /*background: pink;*/

        position: relative;
        height: 24px;
        margin: 0 10px 16px;
    }

    .title-bar .cont-title {
        line-height: 24px;
        font-size: 18px;
        color: #333;
    }

    .title-bar .check-all {
        position: absolute;
        padding-right: 15px;
        top: 0;
        right: 0;
        font-size: 14px;
        color: #666;
        line-height: 24px;
        cursor: pointer;
    }

    .module-cont .card-bx {
        /*background: #c7254e;*/
        padding: 9px 10px;
    }

    .module-cont .card-bx:hover {
        box-shadow: 0px 0px 10px grey;
    }

    .module-cont .card-bx img {
        width: 100%;
        height: 100%;
        /*display: inline-block;*/
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

    /*案例模块-end-*/

    /*设计师模块-begin-*/
    .module-cont .portrait-cont {
        /*background: pink;*/
        /*padding: 0 60px;*/
        padding: 0 4%;
    }

    .module-cont .portrait-bx {
        /*padding: 3px 40px;*/
        padding: 3% 4%;

    }

    .portrait-bx .img-ct {
        width: 70%;
        height: 70%;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
    }

    .portrait-bx .img-ct img {
        width: 100%;
        height: 100%;
    }

    .module-cont .portrait-info {
        position: relative;
        top: 13px;
    }

    .module-cont .portrait-name {
        font-size: 16px;
        color: #333;
        text-align: center;
    }

    .module-cont .portrait-detail {
        margin-top: 8px;
        font-size: 12px;
        color: #999;
        text-align: center;
    }

    /*设计师模块-end-*/

    /*内容模块-end-*/

    /*主体右模块-begin-*/
    .company-right {
        /*background: yellow;*/

    }

    .company-intro {
        padding: 30px 20px;
        background: #fff;
    }

    .avatar-box {

        /*background: yellow;*/
        width: 80px;
        /*width: 10%;*/
        height: 80px;
        /*height: 10%;*/
        margin: 0 auto;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        overflow: hidden;
        text-align: center;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }

    .company-intro .avatar-box img {
        position: relative;
        margin-top: -27px;
        top: 50%;
        width: 54px;
        height: 54px;
    }

    .company-intro .intro-name {
        font-size: 16px;
        color: #444;
        text-align: center;
        margin: 6px auto 10px;
        font-weight: bold;
    }

    .company-intro .intro-note {
        padding: 10px 20px;
    }

    .company-intro .intro-note .word-value {
        font-size: 16px;
        color: #333;
        line-height: 8px;
        margin: 10px auto;
    }

    .word-value span.num-value {
        color: #333;
        font-weight: 800;
        font-size: 18px;
    }

    .block-right dl dd span {
        display: inline-block;
        margin-top: 10px;
        font-size: 14px;
        color: #333;
    }

    .block-right dl dd i {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-top: 1px;
        margin-right: 3px;
    }

    .intro-note .block-right dl dd i.ystar_2 {
        background: url('../../assets/star_i.png');
    }

    .intro-note .block-right dl dd i.ystar_half {
        /*background: url('../image/star_half.png');*/
        background: url('../../assets/star_half.png');
    }

    .block-right b.value {
        color: #333;
        font-size: 15px;
        margin-top: 8px;
    }

    .intro-toolbar {
        text-align: center;
    }

    .btn-dark {
        border: none;
        outline: none;

        font-size: 14px;
        line-height: 28px;
        text-align: center;
        background: #ff5a00;
        color: #fff;
        padding: 8px 15px;
        margin: 20px 10px 10px 0;
    }

    /*主题右模块-end-*/

    /*预约模态框-begin-*/

    .modal {

        display: none;
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
