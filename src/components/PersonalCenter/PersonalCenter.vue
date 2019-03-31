<template>
  <div class="container-fluid">
    <div class="row container_center">
      <div class="col-xs-2  container_center_left " onselectstart="return false;">
        <ul class="first_ul">
          <router-link :to="{path:'/personalCenter/',query:{User:userInfo}}"><li class="center_left first_li" @click="showColor(1)" :class="{'color_font':colorFont===1}">个人中心首页</li></router-link>
          <li class="center_left more" id="my_data">
            <img src="../../assets/add.svg" alt="" v-show="!showData" @click="showPersonalData">
            <img src="../../assets/sub.svg" alt="" v-show="showData" @click="disPersonalData">
            <router-link to="/personalCenter/personalData" ><span @click="showPersonalData">我的个人资料</span></router-link>
            <ul v-show="showData">
              <router-link to="/personalCenter/personalData"><li @click="showColor(2)" :class="{'color_font':colorFont===2}">个人资料</li></router-link>
              <router-link to="/personalCenter/updatePassword"><li @click="showColor(3)" :class="{'color_font':colorFont===3}">修改密码</li></router-link>
              <router-link to="/personalCenter/accountSecurity"><li @click="showColor(4)" :class="{'color_font':colorFont===4}">账号与安全</li></router-link>
            </ul>
          </li>
          <router-link to="/personalCenter/myOrder"><li class="center_left" @click="showColor(5)" :class="{'color_font':colorFont===5}">我的预约</li></router-link>
          <li class="center_left more" id="my_collect">
            <img src="../../assets/add.svg" alt="" v-show="!showCollect" @click="showCollectData">
            <img src="../../assets/sub.svg" alt="" v-show="showCollect" @click="disCollectData">
            <router-link to="/personalCenter/collectCase"><span @click="showCollectData">我的收藏</span></router-link>
            <ul v-show="showCollect">
              <router-link to="/personalCenter/collectCase"><li @click="showColor(6)" :class="{'color_font':colorFont===6}">装修案例</li></router-link>
              <router-link to="/personalCenter/collectCompany"><li @click="showColor(7)" :class="{'color_font':colorFont===7}">装修公司</li></router-link>
              <router-link to="/personalCenter/collectStrategy"><li @click="showColor(8)" :class="{'color_font':colorFont===8}">装修攻略</li></router-link>
              <router-link to="/personalCenter/collectDiary"><li @click="showColor(9)" :class="{'color_font':colorFont===9}">装修日记</li></router-link>
            </ul>
          </li>
          <router-link to="/personalCenter/myDiary"><li class="center_left" @click="showColor(10)" :class="{'color_font':colorFont===10}">我的日记</li></router-link>
          <router-link to="/personalCenter/myNews"><li class="center_left" @click="showColor(11)" :class="{'color_font':colorFont===11}">消息中心</li></router-link>
        </ul>
      </div>
      <div class="col-xs-10">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "PersonalCenter",
        data:function () {
          return{
              isShowData:0,        //个人资料的展开和收起
              isShowCollect:0,    //收藏的展开和收起
              showData:false,     //个人资料的隐藏和显示
              showCollect:false,   //收藏的展开和收起
              colorFont:'',
              userInfo:[],
          }
        },
        mounted:function(){

        },

        methods:{
          //显示个人资料
          showPersonalData:function () {
            this.showData=!this.showData;
          },
          // 隐藏个人资料
          disPersonalData:function () {
            this.$data.showData=false
          },
          // 显示收藏
          showCollectData:function () {
            this.showCollect=!this.showCollect
          },
          //隐藏收藏
          disCollectData:function () {
            this.$data.showCollect=false
          },
          showColor:function (val) {
            this.colorFont=val
          }
        }
    }
</script>

<style scoped>
  ul,li,a{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  body{
    background: #F8F8F8;
    width: 100%;
  }
  .container_center{
    width: 1072px;
    margin: 60px auto 0;
  }
  .container_center_left{
    padding: 0;
    margin-right: 0;
  }
  .container_center_left li,.container_center_left li span{
    background-color: white;
    text-align: center;
    cursor: pointer;
    color: grey;
  }

  .color_font{
    color: #01cb79 !important;
  }
  .container_center_left .first_ul{
    border: solid 1px #cccccc;
    border-bottom: 0;
  }
  .container_center_left .first_ul .first_li{
    background-color: rgba(211, 211, 211, 0.55);
    border-left: solid 5px #01cb79 !important;
  }

  .container-fluid .container_center .center_left {
    border: solid 1px #cccccc;
    display: block;
    padding: 20px ;
  }
  .container-fluid .container_center .center_left>ul{
    margin-left: 20px;
    list-style: none;
  }
  .container-fluid .container_center .more{
    padding-left: 10px;
  }

  .container-fluid .container_center .more>:nth-child(4){
    padding: 5px 0;
  }
  .container-fluid .container_center .more>:nth-child(4) li{
    padding: 5px 0;
    text-align: center;
  }

</style>
