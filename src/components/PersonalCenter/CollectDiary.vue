<template>
  <div class="decoration_diary center_right">
    <div class="collection">
      <div class="collection_header">
        <div class="case_title">
          <span><b>|</b> 装修日记收藏</span>
        </div>
        <div class="operation diary_chk">
          <input type="checkbox" id="chk_all_diary" @change="checkedAll" :checked="checkAll">
          <label for="chk_all_diary">全选</label>
          <img src="../../assets/delete_collection.svg" alt="" id="delete_diary">
          <label for="delete_diary" @click="deleteDiary">删除</label>
        </div>
      </div>
      <div class="collection_diary" v-show="showDiary">
        <div class="collection_main diary_main" id="" v-for="(di,index) in diaryInfo">
          <div class="check">
            <input type="checkbox" class="chk_diary" @change="selectDiary(index)" :checked="di.check">
          </div>
          <div class="collection_content diary_contents">
            <div class="user_info">
              <img :src="di.icon" alt="">
              <span v-text="di.nickname"></span>
            </div>
            <div class="content_info">
              <h4><router-link :to="{path:'/DiaryDetail',query:{diary_id:di.diary_id}}" v-text="di.diary_title"></router-link></h4>
              <div class="style">
                <span v-text="di.style_name"></span>
                <span>|</span>
                <span class="company" v-text="di.company"></span>
              </div>
              <p v-text="di.diary_content"></p>
              <div class="diary_image">
                <img :src="d_src" alt="" v-for="d_src in di.diary_img">
              </div>
              <div class="collection_time">
                <span v-text="di.collect_date"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="default_diary" v-show="!showDiary">
        <img src="../../assets/rabbit.png" alt="">
        <span>您还没收藏任何日记</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "CollectDiary",
        data:function () {
          return{
            diaryInfo:[],
            checkAllNum:1,   //未选中时为1,选中为0
            checkAll:false, //判定全选
            showDiary:true, //显示收藏案例
          }
        },
        mounted:function () {
          axios.get(this.Global.server_url+'collect/diaryCollections/',{
            // params:{"user_id":this.Global.user_id}
            params:{"user_id":window.localStorage.getItem("user_id")}
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                // console.log(res.data.content);
                this.diaryInfo=res.data.content;
              }else if(res.data.status_code==='10008'){
                this.showDiary=false
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
              //遍历diaryInfo的下标
              for(let di in this.diaryInfo){
                // 将每一个日记的check设置为true,
                this.diaryInfo[di].check=true;
              }
              //将checkAll设置为true
              this.checkAll=true;
              this.checkAllNum=0
              // 如果点击全不选
            }else {
              //将每一个日记的check设置为false,
              for(let di in this.diaryInfo){
                this.diaryInfo[di].check=false;
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
          //选中一个日记
          selectDiary:function (val) {
            // 如果日记中的checkNum为1,1是未选中时
            if(this.diaryInfo[val].checkNum===1){
              //将日记中的选中状态改为true,checkNum改为0
              this.diaryInfo[val].check=true;
              this.diaryInfo[val].checkNum=0
              // 如果日记中的checkNum为0,0是选中时
            }else{
              //将日记中的选中状态改为true,checkNum改为1
              this.diaryInfo[val].check=false;
              this.diaryInfo[val].checkNum=1
            }
            //检测是否全选以及对应的状态
            this.checkAll=this.diaryInfo.every(this.checkSelect);
            this.checkAll? this.checkAllNum=0:this.checkAllNum=1


          },
          // 删除日记
          deleteDiary:function () {
            // 遍历dairyInfo数组,将数组中check为true的值删除
            //要倒着删,否则容易出错
            var del=[];
            for(let i=this.diaryInfo.length-1; i>=0;i--){
              if(this.diaryInfo[i].check){

                del.push(this.diaryInfo[i].collect_id);
                this.diaryInfo.splice(i,1);

              }
            }
            axios.post(this.Global.server_url+'collect/cancelCollection/',
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
            // 如果caseInfo内无数据,则将checkAll改为false,选中状态改为1,showDiary设置为false.兔子显示出来
            if(this.diaryInfo.length===0){
              this.checkAll=false;
              this.checkAllNum=1;
              this.showDiary=false
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
  .default_diary{
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
  /*日记用户头像*/
  .collection_content .user_info{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: 80px;
    color: #999999;
  }
  .collection_content .user_info img{
    width: 80%;
    height: 80%;
    object-fit: contain;
    border-radius: 50%;
  }
  .collection_content .content_info .style{
    color: #999999;
    font-size: 12px;
    margin-bottom: 10px;
  }
  .collection_content .content_info .diary_image{
    margin-bottom: 10px;
  }
  .collection_content .content_info .diary_image img{
    width: 96px;
    height: 96px;
    margin-right: 10px;
  }
  .content_info .collection_time{
    text-align: right;
    color: #999999;
  }
</style>
