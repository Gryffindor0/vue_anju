<template>
  <div class="change_password center_right">
    <div class="row center_right_top">
      <div class="col-xs-11 diary">
        <h5>修改密码</h5>
      </div>
      <div class="row">
        <table class="table table_info ">
          <tr>
            <td class="change_passwords">手机号码:</td>
            <td class="telephone" v-text="telephone"></td>
          </tr>
          <tr>
            <td class="change_passwords">验证码:</td>
            <td class="identifying_code"><img :src="codeInfo[0].url_code"  id=""><span class="change_code" @click="changeCode">看不清,换一张</span></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="text" value="" class="input input_code" v-model="codeContent">
              <button class="btn btn-default" @click="pushCode">发送验证码</button>
              <span class="check_result_s green" v-text="checkCodeSuc"></span>
              <span class="check_result_f red" v-text="checkCodeErr"></span>
            </td>
          </tr>
          <tr>
            <td class="change_passwords">旧密码:</td>
            <td>
              <input type="password" class="input" v-model="oldPassword">
              <span class="old_password_error red" v-text="oldPasswordError"></span>
            </td>

          </tr>
          <tr>
            <td class="change_passwords">新密码:</td>
            <td>
              <input type="password" value="" class="input" v-model="newPassword">
              <span class="new_password_s green" v-text="newPasswordSuccess"></span>
              <span class="new_password_error red"  v-text="newPasswordError"></span>
            </td>
          </tr>
          <tr>
            <td class="change_passwords">确认密码:</td>
            <td>
              <input type="password" class="input" v-model="passWordConfirm">
              <span class="password_error red" v-text="passWordConfirmErr"></span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button class="btn btn-default submit" @click="changePassword">提交</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "UpdatePassword",
        data:function () {
          return{
            telephone:'187*****587',          //手机号
            codeSrc:'', //验证码地址
            codeInfo:[],                        //后台获取的验证码内容
            codeContent:'',                    //用户输入的验证码内容
            checkCodeSuc:'',                   //验证码验证成功后的内容
            checkCodeErr:'',                   //验证码验证失败后的内容
            oldPassword:'',                    //旧密码
            oldPasswordError:'',              //旧密码输入错误
            newPassword:'',                    //新密码
            newPasswordSuccess:'',            //新密码修改成功后提示
            newPasswordError:'',               //新密码修改失败后提示
            passWordConfirm:'',               //二次密码比对成功后提示
            passWordConfirmErr:'',            //二次密码比对失败后提示
          }
        },
        mounted:function () {
          this.changeCode()
        },
        methods:{
          // 换验证码
          changeCode:function(){
            axios.get(this.Global.server_url+'user/getIdentifyingCode/')
              .then(res=>{
                if(res.data.status_code==='10009'){
                  // console.log(res.data.content);
                  this.codeInfo=res.data.content;
                }
              })
              .catch(err => {
                console.log(err)
              });
          },
          //发送验证码
          pushCode:function(){
            if(this.codeContent===this.codeInfo[0].code_content){
              this.checkCodeSuc="验证成功";
              this.checkCodeErr=""
            }else{
              this.checkCodeSuc="";
              this.checkCodeErr="验证失败"
            }
          },
          //查看密码是否符合规范
          checkPassword:function () {
            let regMobile=/^\w{6,}$/;
            if(this.newPassword){
              if(regMobile.test(this.newPassword)){
                this.newPasswordError='';
                return true;
              }else {
                this.newPasswordError='*密码必须大于六位';
                return false;
              }
            }else {
              this.newPasswordError='*密码不能为空';
              return false;
            }
          },
          //对比两次输入的密码是否一致
          checkConfirm:function () {
            if(this.newPassword===this.passWordConfirm){
              this.passWordConfirmErr='';
              return true
            }else {
              this.passWordConfirmErr='*两次密码不一致';
              return false;
            }
          },
          //修改密码
          changePassword:function () {
            if(this.checkCodeSuc==="验证成功"){
              if(this.checkPassword() && this.checkConfirm()){
                let password={};
                password.old_pwd=this.oldPassword;
                password.new_pwd=this.newPassword;
                password.id=window.localStorage.getItem("user_id");
                console.log(password);
                axios.post(this.Global.server_url+'user/updatePassword/',password)
                  .then(res=>{
                    if(res.data.status_code==='10014'){
                      console.log(res.data);
                      this.newPasswordSuccess="密码修改成功";
                      this.oldPasswordError="";
                      this.newPasswordError=""
                    }else if(res.data.status_code==='10005') {
                      this.oldPasswordError="密码输入错误";
                      this.newPasswordSuccess="";
                      this.newPasswordError=""
                    }else{
                      this.newPasswordError="密码修改失败";
                      this.newPasswordSuccess="";
                      this.oldPasswordError="";
                    }
                  })
                  .catch(err => {
                    console.log(err)
                  });
              }
            }else {
              this.checkCodeSuc='';
              this.checkCodeErr='请先输入验证码';

            }

          }
        }
    }
</script>

<style scoped>
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


  .input{
    height: 35px;
    border-radius: 5px;
    border:solid 1px darkgrey;
    outline: none;
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
  .change_code{
    padding-left: 90px;
    cursor: pointer;
  }
  .green{
    color: #00e300;
  }
  .red{
    color: red;
  }
</style>
