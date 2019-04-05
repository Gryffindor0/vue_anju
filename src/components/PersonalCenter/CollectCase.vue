<template>
  <div class="decoration_case center_right">
    <div class="collection">
      <div class="collection_header">
        <div class="case_title">
          <span><b>|</b> 装修案例收藏</span>
        </div>
        <div class="operation case_chk">
          <input type="checkbox" id="chk_all_case" @change="checkedAll" :checked="checkAll">
          <label for="chk_all_case" >全选</label>
          <img src="../../assets/delete_collection.svg" alt="" id="delete_case">
          <label for="delete_case" @click="deleteCase">删除</label>
        </div>
      </div>
      <div class="collection_case" v-show="showCase">
        <div class="collection_main case_main" v-for="(ci,index) in caseInfo">
        <div class="check">
          <input type="checkbox" class="chk_case" @change="selectCase(index)" :checked="ci.check">
        </div>
        <div class="collection_content case_content">
          <div class="case_img">
            <img :src="ci.case_src" alt="">
          </div>
          <div class="content_info">
            <h4><router-link :to="{path:'/caseDetail/',query:{case_id:ci.case_id}}" v-text="ci.case_name"></router-link></h4>
            <span v-text="ci.case_area+'m²'"></span>
            <span>/</span>
            <span v-text="ci.house_type"></span>
            <span>/</span>
            <span v-text="ci.style_name"></span>
            <span>/</span>
            <span v-text="ci.renovation_type"></span>
            <div class="price">
              <span>装修价格 :</span>
              <span v-text="ci.price + '万'"></span>
            </div>
            <div class="collection_time">
              <span v-text="ci.collect_date"></span>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div class="default_case" v-if="!showCase">
        <img src="../../assets/rabbit.png" alt="">
        <span>您还没收藏任何案例</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "CollectCase",
        data:function () {
          return{
            //案例数据
            caseInfo:[],
            checkAllNum:1,  //未选中时为1,选中为0
            checkAll:false, //判定全选
            showCase:true, //显示收藏案例
          }
        },
        mounted:function () {
          axios.get(this.Global.server_url+'collect/caseCollections/',{
            // params:{"user_id":this.Global.user_id}
            params:{"user_id":window.localStorage.getItem("user_id")}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                // console.log(res.data.content);
                this.caseInfo=res.data.content;
              }else if(res.data.status_code==='10008'){
                this.showCase=false
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
              for(let ci in this.caseInfo){
                // 将每一个案例的check设置为true,
                this.caseInfo[ci].check=true;
              }
              //将checkAll设置为true
              this.checkAll=true;
              this.checkAllNum=0
              // 如果点击全不选
            }else {
              //将每一个案例的check设置为false,
              for(let ci in this.caseInfo){
                this.caseInfo[ci].check=false;
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
          //选中一个案例
          selectCase:function (val) {
            // 如果案例中的checkNum为1,1是未选中时
            if(this.caseInfo[val].checkNum===1){
              //将案例中的选中状态改为true,checkNum改为0
              this.caseInfo[val].check=true;
              this.caseInfo[val].checkNum=0
              // 如果案例中的checkNum为0,0是选中时
            }else{
              //将案例中的选中状态改为true,checkNum改为1
              this.caseInfo[val].check=false;
              this.caseInfo[val].checkNum=1
            }
            //检测是否全选以及对应的状态
            this.checkAll=this.caseInfo.every(this.checkSelect);
            this.checkAll? this.checkAllNum=0:this.checkAllNum=1


          },
          // 删除案例
          deleteCase:function () {
            // 遍历caseInfo数组,将数组中check为true的值删除
            //要倒着删,否则容易出错
            var del=[];
            for(let i=this.caseInfo.length-1; i>=0;i--){
              if(this.caseInfo[i].check){

                del.push(this.caseInfo[i].collect_id)
                this.caseInfo.splice(i,1);
              }
            }
            console.log(del);
            axios.post(this.Global.server_url+'collect/cancelCollection/',
              // params:{"user_id":this.Global.user_id}
              {"collect_id":del},
              {
                headers:{'token':window.localStorage.getItem('token')}
              }
            )
              .then(res=>{
                if(res.data.status_code==='10040'){
                  console.log(res.data.status_text);
                  // this.caseInfo=res.data.content;
                }
              })
              .catch(err => {
                console.log(err)
              });
            // 如果caseInfo内无数据,则将checkAll改为false,选中状态改为1,showCase设置为false.兔子显示出来
            if(this.caseInfo.length===0){
              this.checkAll=false;
              this.checkAllNum=1;
              this.showCase=false
            }

          }
        }
    }
</script>

<style scoped>
  h4 a{
    color: #757575;
    text-decoration: none;
  }
  .collection{
    background-color: white;
    min-height: 400px;
  }
  .default_case{
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
  /*案例*/
  .case_img{
    width: 200px;
    height: 150px;
  }
  .case_img img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .price{
    padding: 10px 0;
  }
  .price span:nth-child(2){
    color: red;
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
