<template>
  <div class="tab">
    <table class="table table-bordered font">
        <tr>
          <td colspan="6"  class="zx">
            <router-link to="/" class="ago">苏州装修</router-link> >
            <router-link to="/companyList/" class="ago">苏州装修公司</router-link> >
            <router-link to="/companyDetail/" class="ago">雅思阁装饰</router-link> >
            案例列表
            <span class="condition" v-if="h_t" v-text="h_t" @click="clearHT"></span>
            <span class="condition" v-if="c_s" v-text="c_s" @click="clearCS"></span>
            <span class="condition" v-if="c_a" v-text="c_a" @click="clearCA"></span>
          </td>
          <td colspan="4"></td>
        </tr>
        <tr>
          <td class="line">户型</td>
          <td v-for="ht in house_type" v-text="ht" class="screen" @click="getHouseType(ht)"></td>
        </tr>
        <tr>
          <td class="line">风格</td>
          <td v-for="cs in case_style" v-text="cs" class="screen" @click="getCaseStyle(cs)"></td>
        </tr>
        <tr>
          <td class="line">面积</td>
          <td v-for="ca in case_area" v-text="ca" class="screen" @click="getCaseArea(ca)"></td>
        </tr>
      </table>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "CaseScreen",
        data:function () {
          return{
            house_type:['小户型','一居','两居','三居','四居','复式','样板间','别墅','公寓'],
            case_style:['简约','现代','中式','美式','欧式','日式','田园','北欧','东南亚'],
            case_area:['60m²以下','60-80m²','80-100m²','100-120m²','120-150m²','150-180m²','180-200m²','200-250m²','250m²以上'],
            h_t:'',
            c_s:'',
            c_a:'',
            condition:{"HT":"","CS":"","CA":"","pageNum":0,"perPageNum":20,"company_id":""},

          }
        },
        mounted:function(){
          this.condition.company_id=this.$route.query.company_id
        },
        methods:{
            getHouseType:function (val) {
              this.$data.h_t=val+' ×';
              this.$data.condition.HT=val;
              console.log(this.$data.condition);
              this.condition.pageNum=0;
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },
            getCaseStyle:function (val) {
              this.$data.c_s=val+' ×';
              this.$data.condition.CS=val;
              console.log(this.$data.condition);
              this.condition.pageNum=0;
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },
            getCaseArea:function (val) {
              this.$data.c_a=val+' ×';
              this.$data.condition.CA=val;
              console.log(this.$data.condition);
              this.condition.pageNum=0;
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },
            clearHT:function () {
              this.$data.h_t='';
              this.$data.condition.HT='';
              console.log(this.$data.condition);
              if(this.CS==='' && this.CA===''){
                this.condition.pageNum=0
              }
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },
            clearCS:function () {
              this.$data.c_s='';
              this.$data.condition.CS='';
              console.log(this.$data.condition);
              this.condition.pageNum=0;
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },
            clearCA:function () {
              this.$data.c_a='';
              this.$data.condition.CA='';
              console.log(this.$data.condition);
              this.condition.pageNum=0;
              this.getCaseInfo();
              this.$emit('getScreenCondition',this.condition)
            },

            getCaseInfo:function () {
              let con=this.condition;
              let num=[];
              axios.get(this.Global.server_url+'case/getConditionCase/',{
                params:con
              })
                .then(res=>{
                  if(res.data.status_code==='10009'){
                    console.log(res.data.content);
                    this.$emit('getScreenCase',res.data.content)
                  }else if(res.data.status_code==='10008') {
                    this.$emit('getScreenCase',res.data.content)
                  }
                })
                .catch(err => {
                  console.log(err)
                });
              axios.get(this.Global.server_url+'case/getConditionCaseNum/',{
                params:con
              })
                .then(res=>{
                  if(res.data.status_code==='10009'){
                    console.log(res.data.content);
                    for(let n=1;n<=Math.ceil(res.data.content/20);n++){
                      num.push(n)
                    }
                    this.$emit('getScreenCaseNum',num)
                  }else if(res.data.status_code==='10008') {
                    this.$emit('getScreenCaseNum',num)
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
  .tab{
    width: 90%;
    margin-left: -1% ;
    margin: auto;
  }
  .table{
    background: white;
    margin-top: 55px;
  }
  .table  .zx{
    text-align: left!important;
    border-right: none;
  }
  .table  .zx .ago{
    text-decoration: none;
    color: grey;
  }
  .table  .zx .condition{
    margin-left: 10px;
    padding: 2px 10px;
    color: darkseagreen;
    box-sizing: border-box;
    border: solid 1px greenyellow;
    cursor: pointer;
  }
  .table .screen{
    width: 10%;
    cursor: pointer;
    color: grey;
    text-align: center;
  }
  .table .screen:hover{
    color: red;
  }
  .table :nth-child(2) :first-child{
    width: 10%;
  }
  .table-bordered>tr>td{
    border: none;
    padding: 8px;
  }

  .table-bordered>tr{
    border-top: solid 1px #ddd;
  }
  .table-bordered>tr .line{
    border-right: solid 1px #ddd;
    text-align: center;
    background: rgba(193, 193, 193, 0.15);
  }

  @media (min-width: 768px)and (max-width: 993px){
    .font{
      font-size: 12px;
    }

  }
</style>
