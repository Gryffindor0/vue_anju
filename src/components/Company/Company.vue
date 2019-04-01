<template>
  <div id="idData" class="row case module-cont">
    <div class="row sorted">
      <div class="col-xs-3 col-sm-2 col-md-1 sort"  v-for="s in sorts" @click="getSorted(s)">
        <span>{{s}}<span class="glyphicon glyphicon-arrow-down" aria-hidden="true"></span></span>
      </div>
      <div class="col-xs-0 col-sm-4 col-md-8"></div>
    </div>
    <div class="row company_item" :id="com.id" v-for="com in companyInfo">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-md-1  col-sm-1  col-xs-1  circle-left">
            <div class="circle">
              <img :src="com.company_icon"/>
            </div>
          </div>
          <div class="col-md-11 col-sm-11 col-xs-11 company_list">
            <div class="text-top">
              <router-link :to="{path:'/companyDetail',query:{company_id:com.id}}"><h3 v-text="com.name"></h3></router-link>
              <div class="row">
                <div class="col-md-9 col-sm-9 col-xs-9 case">
                  <span v-text="'设计案例 :'+com.case_num"></span>
                  <span v-text="'装修工地 :'+com.work_site_num"></span>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3 tel">
                  <h4 v-text="com.contact_tel"></h4>
                </div>
              </div>

            </div>
            <div class="img">
              <div class="row">
                <div class="col-md-3 col-sm-4 col-xs-4 first_img">
                  <router-link :to="{path:'/companyDetail',query:{company_id:com.id}}"><img :src="com.com_src"/></router-link>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-4 second_img">
                  <router-link :to="{path:'/companyDetail',query:{company_id:com.id}}"><img :src="com.com_src"/></router-link>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-4 third_img">
                  <router-link :to="{path:'/companyDetail',query:{company_id:com.id}}"><img :src="com.com_src"/></router-link>
                </div>
                <div class="col-md-3 col-sm-4 col-xs-6 fourth_img">
                  <router-link :to="{path:'/companyDetail',query:{company_id:com.id}}"><img :src="com.com_src"/></router-link>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
        props:['companyInfo'],
        name: "Company",
        data:function () {
          return {
            sorts:['综合','案例','工地','信用'],
            sorted:{},
            // companyInfo:[
            //   {"id":1,"company_icon":require("../assets/company_img02.jpg"),"name":"雅思阁装饰","case_num":"1920",
            //   "work_site_num":"1999","contact_tel":"2333333333","com_src":require("../assets/company_img02.jpg")}
            //   ]
          }
        },
        methods:{
          getSorted:function (val) {
            this.$data.sorted.detail=val;
            axios.get(this.Global.server_url + 'company/companySort/', {
              params: this.sorted
            })
              .then(res => {
                if (res.data.status_code === '10009') {
                  // console.log(res.data.content);
                  this.$emit('getSortCompany', res.data.content)
                } else if (res.data.status_code === '10008') {
                  this.$emit('getSortCompany', res.data.content)
                }
              })
              .catch(err => {
                console.log(err)
              });
            //获取公司数量
            axios.get(this.Global.server_url+'company/companyNum/')
              .then(res=>{
                let num = [];
                if(res.data.status_code==='10009'){
                  // console.log(res.data.content);
                  for(let n=1;n<=Math.ceil(res.data.content/5);n++){
                    num.push(n)
                  }
                  this.$emit('getSortComNum', num)
                }
              })
              .catch(err => {
                console.log(err)
              });
          }
        }
    }
</script>

<style scoped>
  #idData{
    width: 90%;
    margin: auto;

  }
  .row .sort{
    color: grey;
    cursor: pointer;
    font-size: 1.2em;
    background-color: white;
    margin-left: -1.3%;
    padding: 5px 0;
    text-align: center;
  }
  .row .sort:hover{
    background-color: #00F7DE;
  }
  .sorted{
    margin: 20px 0 10px 0;
  }

  .company_item{
    background: white;
    border-bottom: dotted 1px #cccccc;
  }
   .row .circle-left{
    padding-top: 20px;
  }
   .row .circle{
    border: solid 1px #ddd;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    text-align: center;
    line-height: 80px;
     cursor: pointer;
  }
   .row .circle img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
   .row .img{
    padding-bottom: 20px;
    margin-top: 15px;
  }
   .row .img img{
    width: 100%;
    height: 100%;
  }
   .row .case{
    margin-top: 10px;
  }
   .row .text-top a{
    color: #282828;
    text-decoration: none;
  }
   .row .text-top .case :nth-child(2){
    margin-left: 10px;
  }
  /*----------媒体查询开始-----------*/
  @media (max-width: 1200px){
     .row .img img{
      width: 185px;
      height: 120px;
    }

  }
  @media (max-width: 993px){
     .row .circle{
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
     .row .circle img{
      width: 27px;
      height: 27px;
    }
     .row .img .fourth_img{
      display: none;
    }
  }

  @media (max-width: 767px){
     .row .tel{
      display: none;
    }
    .container .row .case{
      margin-top: 0px;
    }
  }
  @media (max-width: 700px){
     .row .img .first_img{
      margin-left: 20px;
    }
     .row .img .second_img{
      margin-left: 10%;
    }
     .row .img .third_img{
      display: none;
    }
     .row .img img{
      width: 230px;
      height: 180px;
    }
  }
</style>
