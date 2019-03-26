<template>
  <!--服务-->
  <div class="container service">
    <div class="row">
      <div class="col-xs-12 service_title">
        <span>服务流程</span>
      </div>
    </div>
    <div class="row service_main">
      <div v-for="(service,index) in services" :key="index">
        <div class="service_image">
          <img :src="service.process_icon" alt="">
        </div>
        <div class="service_text">
          <span class="span01" v-text="service.title"></span>
          <span  v-text="service.text"></span>
        </div>
        <div class="service_order">
          <img :src="service.icon_round" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexService",
    data: function () {
      return {
        services:[
          {"process_icon":require("../../assets/process_icon1.png"),"title":"在线预约","text":"登记联系方式","icon_round":require("../../assets/icon-round1.png")},
          {"process_icon":require("../../assets/process_icon2.png"),"title":"量房沟通","text":"3家装修公司免费量房设计","icon_round":require("../../assets/icon-round2.png")},
          {"process_icon":require("../../assets/process_icon3.png"),"title":"对比方案","text":"对比装修公司方案","icon_round":require("../../assets/icon-round3.png")},
          {"process_icon":require("../../assets/process_icon4.png"),"title":"签订合同","text":"签订合同及托管装修款","icon_round":require("../../assets/icon-round4.png")},
          {"process_icon":require("../../assets/process_icon5.png"),"title":"装修施工","text":"工人按排期施工交付","icon_round":require("../../assets/icon-round5.png")},
          {"process_icon":require("../../assets/process_icon6.png"),"title":"竣工验收","text":"验收通过全屋装修指标","icon_round":require("../../assets/icon-round6.png")},
          {"process_icon":require("../../assets/process_icon7.png"),"title":"享受保障","text":"享受合同约定质保","icon_round":require("../../assets/icon-round7.png")}
        ]
      }
    }
  }
</script>

<style scoped>
  /*服务*/
  .service_title{
    padding: 50px 0;
    text-align: center;
  }
  .service_title span{
    font-size: 30px;
  }

  .service_main{
    display: flex;
    padding-bottom: 50px;
  }
  .service_main div{
    flex: 1;
    box-sizing: border-box;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .service_main div img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .service_main div .span01{
    font-size: 16px;
  }
  @media (max-width: 992px){
    .service{
      display: none;
    }
  }

</style>
