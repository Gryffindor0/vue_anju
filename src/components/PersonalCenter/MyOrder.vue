<template>
  <div class="personal_reservation center_right reservation">
    <div class="reservation_header">
      <div class="reservation_title">
        <span><b>|</b> 我的预约</span>
      </div>
    </div>
    <div class="reservation">
      <table cellspacing="0">
        <thead>
        <tr class="first_tr">
          <td class="td01">公司名称</td>
          <td class="td02">我的房屋</td>
          <td class="td03">预约状态</td>
          <td class="td04">操作</td>
        </tr>
        </thead>
        <tbody v-show="!showOrder"><tr v-for="(o,index) in orderInfo">
        <td class="td01">
          <div class="reservation_company_icon">
            <img :src="o.com_src" alt="">
          </div>
          <div class="reservation_company_info">
            <span class="reservation_company_name" v-text="o.com_name"></span>
            <div>
              <span>设计案例 :</span>
              <span class="case_num" v-text="o.case_num"></span>
              <span>装修工地 :</span>
              <span class="work_site_num" v-text="o.work_site_num"></span>
            </div>
            <div>
              <span>联系电话 :</span>
              <span v-text="o.telephone"></span>
            </div>
          </div>
        </td>
        <td class="td02">
          <div class="house_type">
            <span>户型 :</span>
            <span v-text="o.house_type"></span>
          </div>
          <div class="house_area">
            <span>面积 :</span>
            <span v-text="o.house_area+'m²'"></span>
          </div>
          <div class="house_address">
            <span>地址 :</span>
            <span v-text="'苏州市'+o.house_address"></span>
          </div>
          <div class="house_village">
            <span>小区 :</span>
            <span v-text="o.house_village"></span>
          </div>
        </td>
        <td class="td03">
          <span v-text="o.appointment_status"></span>
        </td>
        <td class="td04">
          <button type="button" class="cancel" @click="cancelOrder(index)">取消预约</button>
        </td>
        </tr></tbody>
      </table>
      <div class="default_reservation" v-show="showOrder">
        <img src="../../assets/rabbit.png" alt="">
        <span>您还没有任何预约</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "MyOrder",
        data:function () {
          return{
            showOrder:false,  //显示预约信息
            orderInfo:[]
          }
        },
        mounted:function () {
          //获取预约信息
            axios.get(this.Global.server_url+'user/getAppointment/',{
              // params:{"user_id":this.Global.user_id}
              params:{"user_id":window.localStorage.getItem("user_id")}
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  // console.log(res.data.content);
                  this.orderInfo=res.data.content;
                  console.log(111);
                  console.log(this.orderInfo);
                  if(this.orderInfo==[]){
                    this.showOrder=true
                  }else {
                    this.showOrder=false
                  }
                }
              })
              .catch(err => {
                console.log(err)
              });
        },
        methods:{
          cancelOrder:function (val) {
            this.orderInfo.length===1 ? this.showOrder=true:this.orderInfo.splice(val,1)
            axios.get(this.Global.server_url+'user/cancelAppointment/',{
              // params:{"user_id":this.Global.user_id}
              params:{"appointment_id":this.orderInfo[val].id}
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  // console.log(res.data.content);
                  this.orderInfo=res.data.content;
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
  .reservation{
    background-color: white;
    min-height: 400px;
  }
  .default_reservation{
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .reservation_header{
    padding: 5px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
    border: solid 1px #cccccc;
    border-bottom: 0;
  }
  .reservation_header b{
    color: #00ce00;
    font-size: 18px;
  }
  .reservation{
    width: 100%;
    border: solid 1px #cccccc;
    box-sizing: border-box;
  }

  .reservation table{
    width: 100%;
    font-size: 12px;
  }
  .td01{
    width: 40%;
  }
  .td02{
    width: 30%;
  }
  .td03{
    width: 15%;

  }
  .td04 {
    width: 10%;
  }
  .reservation table .first_tr{
    height: 34px;
    background-color: #f8f8f8;
    border-bottom: solid 1px #CCCCCC;
    font-size: 14px;
  }
  .reservation table .first_tr td{
    text-align: center;
  }
  .reservation table tbody>tr{
    border-bottom: solid 1px #cccccc;
  }
  .reservation table tbody>tr .td01{
    padding: 20px 30px;
  }
  tbody .td01 .reservation_company_icon{
    width: 80px;
    height: 80px;
    float: left;
    border: solid 1px #CCCCCC;
    border-radius: 50%;
    text-align: center;
    line-height: 80px;
  }
  tbody .td01 .reservation_company_icon img{
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
  tbody .td01 .reservation_company_info{
    float: right;
    padding: 10px 0;
  }tbody .td01 .reservation_company_info>span{
     font-size: 18px;
     font-weight: 700;
     margin-bottom: 20px;
   }

  .reservation table tbody>tr .td02{
    padding-left: 10%;
  }
  tbody .td02 div span:first-child{
    font-size: 14px;
    font-weight: bold;
  }
  tbody .td02 div span:last-child{
    font-size: 14px;
    color: #999999;
  }
  .reservation table tbody>tr .td03{
    text-align: center;
  }
  tbody .td03{
    font-size: 16px;
    color: #00b900;
  }
  .reservation table tbody>tr .td04{
    text-align: center;
    line-height: 20px;
  }
  .reservation table tbody>tr .td04 .cancel{
    color: #F8F8F8;
    font-size: 14px;
    padding: 5px 10px;
    background-color:  red;
    border: 0;
    outline: 0;
  }


</style>
