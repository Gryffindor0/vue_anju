<template>
    <div>
      <case-screen @getScreenCase="getScreenCase" @getScreenCaseNum="getScreenCaseNum" @getScreenCondition="getScreenCondition"></case-screen>
      <case :caseInfo="caseInfo"></case>
      <!--<go-page :casePageNum="casePageNum" :caseCondition="caseCondition" @getGoPageCase="getGoPageCase"></go-page>-->
      <div id="barcon">
        <span class='btn btn-default page_1' @click="go_page(index)" v-for="(p,index) in pageNum" v-text="p" :class="{'active':index===isActive}"></span>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import CaseScreen from './CaseScreen'
  import Case from './Case'
  // import GoPage from './GoPage'
    export default {
        name: "CaseList",
        components:{
            'case-screen':CaseScreen,
            'case':Case,
            // 'go-page':GoPage
        },
        data:function () {
          return{
            pageNum:[],
            caseInfo:[],
            caseCondition:{"HT":"","CS":"","CA":"","pageNum":0,"perPageNum":20,"company_id":""},
            isActive:-1,
          }
        },
        mounted:function(){
          //axios请求所有的案例数据
          this.caseCondition.company_id=this.$route.query.company_id;
          console.log(this.caseCondition);
          axios.get(this.Global.server_url+'case/getCaseNum/',{
            params:{"company_id":this.$route.query.company_id}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                // console.log(res.data.content);
                for(let n=1;n<=Math.ceil(res.data.content/20);n++){
                  this.pageNum.push(n)
                }
                console.log(this.pageNum)
              }
            })
            .catch(err => {
              console.log(err)
            });
          //获取第一页案例数据
          axios.get(this.Global.server_url+'case/getCase/',{
            params:{"company_id":this.$route.query.company_id}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                console.log(res.data.content+'here');
                this.caseInfo=res.data.content
              }
            })
            .catch(err => {
              console.log(err)
            })
        },
        watch:{
          pageNum:function () {
            this.isActive=-1
          }
        },
        methods:{
          getScreenCase:function (val) {
            this.caseInfo=val;

          },
          getScreenCaseNum:function (val) {
            this.pageNum=val
          },
          getScreenCondition:function (val) {
            this.caseCondition=val
          },

          go_page:function (val) {
            this.isActive=val;
            // this.pageNum=this.casePageNum;
            this.caseCondition.pageNum=val;
            let con=this.caseCondition;
            console.log(con);
            axios.get(this.Global.server_url+'case/getConditionCase/',{
              params:con
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  console.log(res.data.content);
                  this.caseInfo=res.data.content
                }else if(res.data.status_code==='10008') {
                  this.caseInfo=res.data.content
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
