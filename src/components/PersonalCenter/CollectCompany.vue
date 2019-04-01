<template>
  <div class="decoration_company center_right">
    <div class="collection">
      <div class="collection_header">
        <div class="case_title">
          <span><b>|</b> 装修公司收藏</span>
        </div>
        <div class="operation company_chk">
          <input type="checkbox" id="chk_all_company" @change="checkedAll" :checked="checkAll">
          <label for="chk_all_company" >全选</label>
          <img src="../../assets/delete_collection.svg" alt="" id="delete_company">
          <label for="delete_company" @click="deleteCompany">删除</label>
        </div>
      </div>
      <div class="collection_company"  v-show="showCompany">
        <div class="collection_main company_main" id="" v-for="(ci,index) in companyInfo">
          <div class="check">
            <input type="checkbox" class="chk_company" @change="selectCompany(index)" :checked="ci.check">
          </div>
          <div class="collection_content company_content">
            <div class="company_icon">
              <img :src="ci.company_icon" alt="">
            </div>
            <div class="content_info">
              <router-link :to="{path:'/companyDetail/',query:{company_id:ci.content_id}}" class="company_name" v-text="ci.name"></router-link>
              <div>
                <span>设计案例 :</span>
                <span class="case_num"  v-text="ci.case_num"></span>
                <span>装修工地 :</span>
                <span class="work_site_num" v-text="ci.work_site_num"></span>
              </div>
              <span>联系电话 :</span>
              <span class="tel" v-text="ci.contact_tel"></span>
              <div class="collection_time">
                <span v-text="ci.collect_date"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="default_company" v-show="!showCompany">
        <img src="../../assets/rabbit.png" alt="">
        <span>您还没收藏任何公司</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "CollectCompany",
        data:function () {
          return{
            companyInfo:[],
            checkAllNum:1,    //未选中状态时为1,选中状态为0
            checkAll:false, //判定全选
            showCompany:true, //显示收藏公司
          }
        },
        mounted:function () {
          axios.get(this.Global.server_url+'collect/companyCollections/',{
            // params:{"user_id":this.Global.user_id}
            params:{"user_id":window.localStorage.getItem("user_id")}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){

                // console.log(res.data.content);
                this.companyInfo=res.data.content;
              }
            })
            .catch(err => {
              console.log(err)
            });
        },
        methods:{
          // 点击全选或全不选
          checkedAll:function(){
            // 如果点击全选
            if(this.checkAllNum){
              //遍历caseInfo的下标
              for(let ci in this.companyInfo){
                // 将每一个案例的check设置为true,
                this.companyInfo[ci].check=true;
              }
              //将checkAll设置为true
              this.checkAll=true;
              this.checkAllNum=0
              // 如果点击全不选
            }else {
              //将每一个案例的check设置为false,
              for(let ci in this.companyInfo){
                this.companyInfo[ci].check=false;
              }
              //将checkAll设置为false
              this.checkAll=false;
              this.checkAllNum=1
            }


          },
          // 检测是否被选中,用在下面的every方法,用来判断所有的案例是不是都被选中
          checkSelect:function(val){
            return val.check===true
          },
          //选中一个公司
          selectCompany:function (val) {
            // 如果公司中的checkNum为1,1是未选中时
            if(this.companyInfo[val].checkNum===1){
              //将公司中的选中状态改为true,checkNum改为0
              this.companyInfo[val].check=true;
              this.companyInfo[val].checkNum=0
              // 如果公司中的checkNum为0,0是选中时
            }else{
              //将公司中的选中状态改为true,checkNum改为1
              this.companyInfo[val].check=false;
              this.companyInfo[val].checkNum=1
            }
            //检测是否全选以及对应的状态
            this.checkAll=this.companyInfo.every(this.checkSelect);
            this.checkAll? this.checkAllNum=0:this.checkAllNum=1


          },
          // 删除公司
          deleteCompany:function () {
            // 遍历companyInfo数组,将数组中check为true的值删除
            //要倒着删,否则容易出错
            for(let i=this.companyInfo.length-1; i>=0;i--){
              if(this.companyInfo[i].check){
                this.companyInfo.splice(i,1);
                var del=[];
                del.push(this.caseInfo[i].id)
              }
            }
            axios.get(this.Global.server_url+'collect/cancelCollection/',{
              // params:{"user_id":this.Global.user_id}
              params:{"user_id":window.localStorage.getItem("user_id")}
            })
              .then(res=>{
                if(res.data.status_code==='10040'){
                  console.log(res.data.status_text);
                  // this.caseInfo=res.data.content;
                }
              })
              .catch(err => {
                console.log(err)
              });
            // 如果companyInfo内无数据,则将checkAll改为false,选中状态改为1,showCase设置为false.兔子显示出来
            if(this.companyInfo.length===0){
              this.checkAll=false;
              this.checkAllNum=1;
              this.showCompany=false
            }

          }
        }
    }
</script>

<style scoped>
  .collection{
    background-color: white;
    min-height: 400px;
  }
  .default_company{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*头部*/
  .collection {
    border: solid 1px #CCCCCC;
  }
  .collection_header{
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: solid 1px #CCCCCC;
  }
  .collection_header .case_title{
    font-size: 14px;
    font-weight: 600;
  }
  .collection_header .case_title b{
    color: #00ce00;
    font-size: 18px;
  }
  .collection_header .operation img{
    margin-left: 10px;
  }
  .collection_header .operation label{
    font-size: 12px;
    color: #999999;
  }
  .collection_main{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px #cccccc;
  }
  .check{
    width: 50px;
    text-align: center;
  }
  .collection_content{
    flex: 1;
    display: flex;
    border-left: solid 1px #CCCCCC;
    padding: 20px 20px;
    box-sizing: border-box;
  }
  .collection_content .company_icon{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid 1px #CCCCCC;
    text-align: center;
    line-height: 80px;
  }
  .collection_content .company_icon img{
    width: 70%;
    height: 70%;
    border-radius: 50%;
    object-fit: contain;
  }
  .case_num{
    margin-right: 20px;
  }
  .collection_content .image{
    flex: 1;
  }
  .collection_content .image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .collection_content .content_info{
    flex: 2;
    padding: 10px 20px;
  }
  .collection_content .content_info>span:first-child{
    font-size: 18px;
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
  }
  .content_info .collection_time{
    text-align: right;
    color: #999999;
  }
</style>
