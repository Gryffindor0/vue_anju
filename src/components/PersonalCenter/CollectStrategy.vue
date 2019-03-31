<template>
  <div class="decoration_strategy center_right">
    <div class="collection">
      <div class="collection_header">
        <div class="case_title">
          <span><b>|</b> 装修攻略收藏</span>
        </div>
        <div class="operation strategy_chk">
          <input type="checkbox" id="chk_all_strategy" @change="checkedAll" :checked="checkAll">
          <label for="chk_all_strategy">全选</label>
          <img src="../../assets/delete_collection.svg" alt="" id="delete_strategy">
          <label for="delete_strategy" @click="deleteStrategy">删除</label>
        </div>
      </div>
      <div class="collection_strategy" v-show="showStrategy">
        <div class="collection_main strategy_main" id="" v-for="(si,index) in strategyInfo">
          <div class="check">
            <input type="checkbox" class="chk_strategy" @change="selectStrategy(index)" :checked="si.check">
          </div>
          <div class="collection_content strategy_content">
            <div class="image">
              <img :src="si.strategy_src" alt="">
            </div>
            <div class="content_info">
              <span v-text="si.strategy_title"></span>
              <p v-text="si.lead"></p>
              <div class="collection_time">
                <span v-text="si.collect_date"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="default_strategy" v-show="!showStrategy">
        <img src="../../assets/rabbit.png" alt="">
        <span>您还没收藏任何攻略</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "CollectStrategy",
        data:function () {
          return{
            strategyInfo:[
              {"strategy_src":"","strategy_title":"攻略1","case_num":'1222',"lead":'也是的撒的客户贷款计划到静安寺金卡戴珊不擦科技市场部',
                "collect_date":"3-23","check":false,"checkNum":1},
              {"strategy_src":"","strategy_title":"攻略2","case_num":'1222',"lead":'也是的撒的客户贷款计划到静安寺金卡戴珊不擦科技市场部',
                "collect_date":"3-23","check":false,"checkNum":1},
              {"strategy_src":"","strategy_title":"攻略3","case_num":'1222',"lead":'也是的撒的客户贷款计划到静安寺金卡戴珊不擦科技市场部',
                "collect_date":"3-23","check":false,"checkNum":1},
            ],
            checkAllNum:1,   //未选中时为1,选中为0
            checkAll:false, //判定全选
            showStrategy:true, //显示收藏攻略

          }
        },
        mounted:function () {
          axios.get(this.Global.server_url+'collect/strategyCollections/',{
            // params:{"user_id":this.Global.user_id}
            params:{"user_id":this.Global.user_id}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                // console.log(res.data.content);
                this.caseInfo=res.data.content;
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
                  //遍历strategyInfo的下标
                  for(let si in this.strategyInfo){
                    // 将每一个攻略的check设置为true,
                    this.strategyInfo[si].check=true;
                  }
                  //将checkAll设置为true
                  this.checkAll=true;
                  this.checkAllNum=0
                  // 如果点击全不选
                }else {
                  //将每一个攻略的check设置为false,
                  for(let si in this.strategyInfo){
                    this.strategyInfo[si].check=false;
                  }
                  //将checkAll设置为false
                  this.checkAll=false;
                  this.checkAllNum=1
                }


              },
              // 检测是否被选中,用在下面的every方法,用来判断所有的攻略是不是都被选中
              checkSelect:function(val){
                return val.check===true
              },
              //选中一个攻略
              selectStrategy:function (val) {
                // 如果攻略中的checkNum为1,1是未选中时
                if(this.strategyInfo[val].checkNum===1){
                  //将攻略中的选中状态改为true,checkNum改为0
                  this.strategyInfo[val].check=true;
                  this.strategyInfo[val].checkNum=0
                  // 如果攻略中的checkNum为0,0是选中时
                }else{
                  //将攻略中的选中状态改为true,checkNum改为1
                  this.strategyInfo[val].check=false;
                  this.strategyInfo[val].checkNum=1
                }
                //检测是否全选以及对应的状态
                this.checkAll=this.strategyInfo.every(this.checkSelect);
                this.checkAll? this.checkAllNum=0:this.checkAllNum=1


              },
              // 删除攻略
              deleteStrategy:function () {
                // 遍历strategyInfo数组,将数组中check为true的值删除
                //要倒着删,否则容易出错
                for(let i=this.strategyInfo.length-1; i>=0;i--){
                  if(this.strategyInfo[i].check){
                    this.strategyInfo.splice(i,1);
                    var del=[];
                    del.push(this.caseInfo[i].id)
                  }
                }
                axios.get(this.Global.server_url+'collect/cancelCollection/',{
                  // params:{"user_id":this.Global.user_id}
                  params:{"user_id":this.Global.user_id}
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
                // 如果strategyInfo内无数据,则将checkAll改为false,选中状态改为1,showCase设置为false.兔子显示出来
                if(this.strategyInfo.length===0){
                  this.checkAll=false;
                  this.checkAllNum=1;
                  this.showStrategy=false
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
  .default_strategy{
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
  /*攻略*/
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
