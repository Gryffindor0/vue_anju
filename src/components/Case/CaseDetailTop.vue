<template>
    <div class="start">
      <div><h3 class="case_name" v-text="topInfo[0].case_name">星卡星</h3></div>

      <div class="row liu_pos" >
        <div class="liu" v-if="!isShow" @mouseenter="enter" @mouseleave="leave">
          <div class="row">
            <div class="col-xs-4 col-sm-4 col-md-4 shen ">
              <img src="../../assets/shenyy.jpg" height="100" width="100" class="designer_img"/>
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8">
              <div class="row text_right" >
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <h4 class="designer_name" v-text="topInfo[0].designer_name"></h4>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <img :src="topInfo[0].designer_icon" height="18" width="56"/>
                </div>
              </div>
              <div class="row text_info" >
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <span>从业两年</span>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6">
                  <span class="case_num" v-text="topInfo[0].case_num+'套案例'"></span>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 text_btn">
                  <router-link :to="{path:'/designerDetail/',query:{designer_id:topInfo.designer_id}}" class="btn btn-default" :id="topInfo.designer_id">去TA主页</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 author">
          <img :src="topInfo[0].company_icon" height="54" width="54" id="first" @mouseenter="enter" @mouseleave="leave"/>
          <span class="designer_name" v-text="topInfo[0].designer_name"></span>
          <img :src="topInfo[0].designer_icon" height="18" width="56"/>
        </div>
      </div>
      <div class="row" >
        <div class=" col-sm-12 col-xs-12 col-md-12 house_info">
          <div class="row">
            <div class="col-md-3 col-sm-0 col-xs-3 house_info_img">
              <img src="../../assets/房屋信息.png"/>
            </div>
            <div class="col-md-9 col-sm-12 col-xs-9 ">
              <div class="row house_info_type">
                <div class="col-xs-3 col-sm-3 col-md-3"><span v-text="'户型：'+topInfo[0].house_type"></span></div>
                <div class=" col-xs-3 col-sm-3 col-md-3 "><span v-text="'风格：'+topInfo[0].style"></span></div>
                <div class=" col-xs-3 col-sm-3 col-md-3"><span v-text="'面积：'+topInfo[0].area+'m²'"></span></div>
                <div class=" col-xs-3 col-sm-3 col-md-3"><span v-text="'造价：'+topInfo[0].cost+'万元'"></span></div>
              </div>
              <div class="row">
                <div class="col-xs-3 col-sm-3 col-md-3"><span v-text="'装修方式：'+topInfo[0].reno_type"></span></div>
                <div class="col-xs-3 col-sm-3 col-md-3"><span v-text="'装修工期：'+topInfo[0].duration+'天'"></span></div>
                <div class="col-xs-6 col-sm-6 col-md-6"><span v-text="'位置：'+topInfo[0].address"></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "CaseDetailTop",
        data:function () {
          return{
            isShow:true,
            topInfo:[]
              // {
              //   "case_name":"钱先生的家居", "designer_id":"1", "designer_name":"申莹莹","designer_icon":"../assets/designer.png","case_num":"166","company_icon":"../assets/designer.png",
              //   "house_type":"三居","style":"欧式","area":"120","cost":"40","reno_type":"全包","duration":"30","address":"平江路",
              // },
          }
        },
        mounted:function(){
          axios.get(this.Global.server_url+'case/getCaseDetail/',{
              params:{'case_id':this.$route.query.case_id}
            }
          )
            .then(res=>{
                if(res.data.status_code==='10009'){
                  this.topInfo=res.data.content
                }
            })
            .catch(err=>{
              console.log(err)
            })
        },

        methods:{
          enter:function () {
            this.$data.isShow=false;
          },
          leave:function () {
            this.$data.isShow=true;
          }
        }
    }
</script>

<style scoped>

  /*-----------------隐藏页面-------------------*/
  .start .liu_pos{
    position: relative;
  }
  .start .liu{
    width: 300px;
    height: 120px;
    border: solid 1px #c8c8c8;
    border-radius: 5px;
    padding: 10px 10px;
    position: absolute;
    left: 45px;
    background-color: white;
    z-index: 1;
  }
  .start .liu .shen img{
    border-radius: 50%;
  }

  .start .liu .text_right :first-child{
    text-align: right;
  }
  .start .liu .text_right :nth-child(2){
    text-align: left;
    margin-top: 7px;
    margin-left: -10px;
  }
  .start .liu .text_info{
    font-size: smaller;
    color: #aeaeae;
  }
  .start .liu .text_info :first-child{
    text-align: right;
  }
  .start .liu .text_info :nth-child(2){
    text-align: left;
  }
  .start .liu .text_btn{
    text-align: center;
    margin-top: 10px;
  }
  .start .liu .text_btn a{
    background-color: white;
    border: solid 1px orangered;
    color: orangered;
    outline: none;
  }

  /*--------------------------------------------*/
  .author :first-child{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .author :nth-child(2){
    margin-right: 10px;
  }
  .house_info{
    margin-top: 30px;
    background: #F6F6F6;
    height: 100px;
    padding: 3%;
  }
  .house_info .house_info_img{
    text-align: center;
    border-right: solid 1px #c6c6c6;
  }
  .house_info .house_info_type{
    margin-bottom: 10px;
  }
  @media (max-width: 993px) {
    .house_info .house_info_img{
      display: none;
    }
  }
  @media (max-width: 770px) {
    .house_info {
      display: none;
    }
  }

</style>
