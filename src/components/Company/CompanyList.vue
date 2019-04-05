<template>
    <div>
      <company-screen @getScreenComNum="getScreenComNum" @getScreenCompany="getScreenCompany" @getScreenCondition="getScreenCondition"></company-screen>
      <company :companyInfo="companyInfo" :isShowImg="isShowImg" @getSortCompany="getSortCompany" @getSortComNum="getSortComNum"></company>
      <div id="barcon">
        <span class='btn btn-default page_1' @click="go_page(index)" v-for="(p,index) in comPageNum" v-text="p" :class="{'active':index===isActive}"></span>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import CompanyScreen from './CompanyScreen'
  import Company from './Company'
  // import GoPage from './GoPage'
    export default {
        name: "CompanyList",
        components:{
            'company-screen':CompanyScreen,
            'company':Company,
            // 'go-page':GoPage,
        },
        data:function(){
          return{
            comPageNum:[],
            companyInfo:[],
            companyCondition:{"price":"","style":"","address":"","pageNum":0,"perPageNum":5},
            isActive:-1,
            isShowImg: false
          }
        },
        mounted:function () {
          this.getComList()
        },
        watch:{
          comPageNum:function () {
            this.isActive=-1
          },
          '$route':'getComList'
        },
        methods:{
          getComList:function(){
            if (this.$route.query.search_condition === "装修公司") {
              axios.get(this.Global.server_url+"search/searchCompany/",{
                params:{
                  "search_content":this.$route.query.search_content
                }
              })
                .then(response=>{
                  if (response.data.status_code==="10009"){
                    this.companyInfo=response.data.content
                  }else if(response.data.status_code==="10008"){
                    this.isShowImg=true
                  }

                })
                .catch(error=>{
                  console.log(error);
                })
            }else{
              //获取公司数量
              axios.get(this.Global.server_url+'company/companyNum/')
                .then(res=>{
                  if(res.data.status_code==='10009'){
                    // console.log(res.data.content);
                    for(let n=1;n<=Math.ceil(res.data.content/5);n++){
                      this.comPageNum.push(n)
                    }
                  }
                })
                .catch(err => {
                  console.log(err)
                });
              //获取第一页公司数据
              axios.get(this.Global.server_url+'company/companyList/')
                .then(res=>{
                  if(res.data.status_code==='10009'){
                    // console.log(res.data.content);
                    this.companyInfo=res.data.content
                  }else if(res.data.status_code==="10008"){
                    this.isShowImg=true
                  }
                })
                .catch(err => {
                  console.log(err)
                })
            }
          },
          getScreenComNum:function(val){
            this.comPageNum=val;
            // console.log('--------------')
            // console.log(this.comPageNum)
            // console.log(val)
          },
          getScreenCompany:function(val){
            this.companyInfo=val;
          },
          getScreenCondition:function(val){
            this.companyCondition=val
          },
          getSortCompany:function(val){
            this.companyInfo=val
          },
          getSortComNum:function(val){
            this.comPageNum=val
          },
          go_page:function (val) {
            this.isActive=val;
            this.companyCondition.pageNum=val;
            let con=this.companyCondition;
            axios.get(this.Global.server_url+'company/getConditionCompany/',{
              params:con
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  this.companyInfo=res.data.content
                }else if(res.data.status_code==='10008') {
                  this.companyInfo=res.data.content
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
  #barcon{
    text-align: center;
    padding: 15px;
  }
  .active{
    background: #0CB469;
    color: white;
  }
  #barcon .page_1{
    margin: 5px;
  }
  @media (max-width: 993px) {
    #barcon{
      margin-left: 25%;
    }
  }
  @media (max-width: 768px) {
    #barcon{
      margin-left: 20%;
    }
  }
  @media (max-width: 610px) {
    #barcon{
      margin-left: 8%;
    }
    .page_1{
      width: 15%;
    }
  }
  @media (max-width: 437px) {
    #barcon{
      margin-left: 8%;
    }
    .page_1{
      width: 10%;
    }
  }
</style>
