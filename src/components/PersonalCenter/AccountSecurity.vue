<template>
  <div class="account_security center_right">
    <div class="row center_right_top">
      <div class="col-xs-11 diary">
        <h5>绑定手机</h5>
      </div>

      <div class="row personal_info">
        <span>个人资料完整度:</span>
        <div class="schedule">
          <div class="progress_bar">50%</div>
        </div>
        <span>绑定＋20%</span>
      </div>

      <div class="row">
        <div class="rows">
          <img src="../../assets/email.png" height="34" width="42"/>

          <span>邮箱绑定</span>
          <span>您还未绑定邮箱</span>

          <button class="btn-default btn">立即绑定</button>
        </div>
        <div class="rows">
          <img src="../../assets/phone.png" height="34" width="42"/>
          <em>手机号绑定</em>
          <span>187*****587</span>
          <button class="btn-default btn">修改</button>
          <button class="btn-default btn">解绑</button>
        </div>
      </div>
      <div class="col-xs-11 diary">
        <h5>注销账号</h5>
      </div>
      <div class="col-xs-11 rows account">
        <img src="../../assets/main-cancel.png" height="28" width="32"/>
        <span>注销账号后，将永久无法恢复，请谨慎操作！</span>
        <button class="btn-default btn">申请注销</button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AccountSecurity"
    }
</script>

<style scoped>
  .diary{
    padding: 10px 0;
    border-bottom:dotted 1px  grey;
    margin-left: 4%;
  }
  .personal_info{
    width: 500px;
    display: flex;
    border-radius: 0;
    background: white;
    margin: auto;
    padding-top: 10px;
  }
  .schedule{
    width: 220px;
    height: 15px;
    background: white;
    border-radius: 0;
    border: solid 1px grey;
    margin: 3px 10px 0 10px;
  }
  .progress_bar{
    width: 110px;
    height: 14px;
    color: white;
    text-align: center;
    line-height: 15px;
    background: #00ba00;
    font-size: 0.1em;
  }
  .progress_bar_60{
    width: 132px;
  }
  .progress_bar_70{
    width: 154px;
  }
  .progress_bar_80{
    width: 176px;
  }
  .center_right .center_right_top{
    border: solid 1px #cccccc;
    background-color: white;
    margin-left: 15px;
  }
  .diary{
    padding: 10px 0;
    border-bottom:dotted 1px  grey;
    margin-left: 4%;
  }
  .diary :first-child{
    border-left:solid 2px green;
    padding-left: 10px;
    font-weight: 600;
  }

  .table_info tr td {
    border: none!important;
    font-size: 14px;
    padding: 8px;
  }
  .table_info tr td:nth-child(1){
    text-align: right;
    width: 25%;
  }
  .table_info tr td:nth-child(2){
    padding-left: 30px;
    width: 50%;
  }
  .table_info tr td:nth-child(3){
    padding-left: 30px;
    width: 25%;
  }
  .table_info tr td select{
    height: 30px;
    outline: none;
  }
  .table_info .submit{
    width: 80px;
    background: orangered;
    color: white;
  }
  .table_info .submit :visited{
    outline: none;
    background: #e43c00!important;
  }


  .rows{
    margin-left: 40px;
    margin-top: 30px;
    line-height: 100px;
    padding-left: 20px;
    width: 800px;
    height: 100px;
    border: solid 1px grey;
  }
  .rows button{
    float: right;
    margin-right: 20px;
    margin-top: 28px;
  }
  .account {
    margin-left: 25px;
    margin-bottom: 20px;
  }
  .account button{
    margin-right: 1px;
  }

</style>
