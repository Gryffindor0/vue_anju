<template>
  <div class="personal_info center_right">
    <div class="row center_right_top">
      <div class="col-xs-11 diary">
        <h5>我的个人资料</h5>
      </div>
      <div class="row info_container">
        <table class="table table_info">
          <tr>
            <td><span>个人资料完整度:</span></td>
            <td>
              <div class="schedule_bar">
                <div class="schedule">
                  <div :class="progress_bar_css" v-text="progress_bar"></div>
                </div>
                <span class="detail" v-text="detail "></span>
              </div>
            </td>
          </tr>
          <tr>
            <td>昵   称:</td>
            <td><input type="text" v-model="user_nickname" v-show="!changeBef"><span v-text="userInfo[0].nickname" v-show="changeBef"></span></td>
          </tr>
          <tr>
            <td>性   别:</td>
            <td>
              <div v-show="!changeBef">
                <label><input name="sex" type="radio" checked @click="Male">男</label>
                <label><input name="sex" type="radio" @click="Female">女</label>
              </div>
              <span v-text="userInfo[0].sex" v-show="changeBef"></span>
            </td>
          </tr>
          <tr>
            <td>QQ:</td>
            <td><input type="text" placeholder="提交时请填写正确的QQ号" v-model="QQ" v-show="!changeBef"><span v-text="userInfo[0].QQ" v-show="changeBef"></span></td>
          </tr>
          <tr>
            <td>所在地区:</td>
            <td class="address">
              <div v-show="!changeBef">
                <select v-model="District">
                  <option v-for="h_d in district" :value="h_d" v-text="h_d" ></option>
                </select>
                <input type="text" placeholder="请输入详细地址" v-model="village">
              </div>
              <span v-show="changeBef" v-text="userInfo[0].address"></span>
            </td>
          </tr>
          <tr>
            <td v-if="changeBef">当前头像:</td>
            <td v-if="!changeBef">修改头像:</td>
            <td v-if="changeBef"><img :src="userInfo[0].icon" height="100" width="100" class="icon"/></td>
            <td v-if="!changeBef" class="uploadicon"><input name="usericon" type="file" class="input-file" accept="image/png,image/gif,image/jpeg"
                       @change="uploadqiniu"/>
              <img :src="imgURL" alt="" class="img-file"></td>
          </tr>
          <tr>
            <td></td>
            <td><button class="btn btn-default submit"  @click="addPersonalInfo" v-show="!changeBef">提交</button>
              <button class="btn submit btn-default change" @click="changePersonalInfo"  v-show="changeBef">修改</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "PersonalData",
        data:function () {
          return{
            district: ['沧浪区', '金阊区','吴中区', '吴江区', '相城区', '虎丘区', '平江区', '高新区', '工业园区'],
            District:'沧浪区',      //用户选择地区
            village: '',            //用户填写街区
            QQ:'________________',          //用户填写QQ
            user_nickname:'',  //用户昵称
            sex:'男',                          //用户性别
            changeBef:true,                   //显示修改页面还是显示信息页面
            progress_bar:'50%',               //进度条
            detail:'完善QQ+20%，完善地区+10%', //进度条后面的提示信息
            progress_bar_css:' progress_bar', //进度条样式
            address:'________________',           //用户显示的详细地址
            userInfo:[],
            imgURL:'',
          }
        },
        mounted:function () {
          // 获取用户数据
          this.getUserInfo()
        },
        methods:{
          // 修改男
          Male:function () {
            this.sex='男'
          },
          //修改女
          Female:function () {
            this.sex='女'
          },
          // 获取信息进度
          getProgress:function(){
            if(Boolean(this.userInfo[0].QQ) && Boolean(this.userInfo[0].address)){
              this.detail='';
              this.progress_bar='80%';
              this.progress_bar_css='progress_bar progress_bar_80'
            }else if(Boolean(this.userInfo[0].QQ) && Boolean(!this.userInfo[0].address)){
              this.detail='完善地区+10%';
              this.progress_bar='70%';
              this.progress_bar_css='progress_bar progress_bar_70';
              this.address='________________'
            }else if(Boolean(!this.userInfo[0].QQ) && Boolean(this.userInfo[0].address)){
              this.detail='完善QQ+20%';
              this.progress_bar='60%';
              this.progress_bar_css='progress_bar progress_bar_60';
              this.QQ='________________';
            }else{
              this.address='________________';
              this.QQ='________________';
            }

          },
          // 添加修改个人信息
          addPersonalInfo:function () {
            this.changeBef=true;
            this.address=this.District+this.village;
            if(this.QQ.trim() && this.village.trim()){
              this.detail='';
              this.progress_bar='80%';
              this.progress_bar_css='progress_bar progress_bar_80'
            }else if(this.QQ.trim() && !this.village.trim()){
              this.detail='完善地区+10%';
              this.progress_bar='70%';
              this.progress_bar_css='progress_bar progress_bar_70';
              this.address='________________'
            }else if(!this.QQ.trim() && this.village.trim()){
              this.detail='完善QQ+20%';
              this.progress_bar='60%';
              this.progress_bar_css='progress_bar progress_bar_60';
              this.QQ='________________';
            }else{
              this.address='________________';
              this.QQ='________________';
            }
            let user_info={};
            user_info.id=window.localStorage.getItem("user_id");
            user_info.nickname=this.user_nickname;
            user_info.sex=this.sex;
            this.address==='________________'? user_info.address='':user_info.address=this.address;
            this.QQ==='________________'? user_info.QQ='':user_info.QQ=this.QQ;
            console.log(user_info);
            axios.post(this.Global.server_url+'user/changeUserInfo/',user_info)
              .then(res=>{
                if(res.data.status_code==='10014'){
                  this.getUserInfo()
                }
              })
              .catch(err => {
                console.log(err)
              });
          },
          //修改资料
          changePersonalInfo:function () {
            this.changeBef=false;
            this.QQ='';
          },

          //上传图片
          uploadqiniu:function (e) {
            var self = this;

            axios.get(this.Global.server_url+"qiniuToken/",{
              params:{
                filename:e.target.value
              }
            })
              .then(response => {

                //  七牛云存储
                var response=response.data;
                if(response && response.code==='908'){
                  let file = e.target.files[0];
                  let token=response.qiniu_token;
                  let filename=response.key;
                  let domain=response.domain;


                  var config = {
                    useCdnDomain: false,
                    disableStatisticsReport: true,
                    retryCount: 6,
                    region: qiniu.region.z0   //此处表示服务器所在的区域
                  };
                  var putExtra = {
                    fname: "",
                    params: {},
                    mimeType: ["image/png", "image/jpeg", "image/gif"]
                  };

                  // 添加上传dom面板
                  putExtra.params["x:name"] = filename.split(".")[0];
                  var subscription;
                  // 调用sdk上传接口获得相应的observable，控制上传和暂停
                  var observable = qiniu.upload(file, filename, token, putExtra);

                  subscription = observable.subscribe({
                    next(res){
                      // ...
                    },
                    error(err){
                      alert('error！')
                    },
                    complete(res){
                      if (res){
                        axios.post(self.Global.server_url+"user/unloadImg/",{
                          "icon":domain+'/'+res.key+'?imageView2/1/w/200/h/200/q/100',
                          "user_id":window.localStorage.getItem("user_id")
                        })
                          .then(response=>{
                            if (response && response.data.status_code === "10012") {
                              console.log(res.key);
                              self.imgURL=domain+'/'+res.key
                            }
                          })
                          .catch(error=>{
                            console.log(error);
                          })
                      }
                    }
                  });

                }

              })
          },

          //获取用户信息
          getUserInfo:function () {
            axios.get(this.Global.server_url+'user/getUserInfo/',{
              // params:{"user_id":this.Global.user_id}
              params:{"user_id":window.localStorage.getItem("user_id")}
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  // console.log(res.data.content);
                  this.userInfo=res.data.content;
                  this.user_nickname=this.userInfo[0].nickname;
                  this.getProgress()
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
  .progress{
    display: flex;
    margin-left: 20px;
    margin-top: 20px;
    background: white;
    border: none;
    box-sizing: border-box;
  }
  .info_container{
    margin-top: 30px;
  }
  .schedule_bar{
    display: flex;
  }
  .schedule{
    width: 220px;
    height: 15px;
    border: solid 1px grey;
    margin-top: 3px;
    margin-right: 10px;
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



  .input-file {
    display: block;
    width: 100px;
    height: 100px;
    opacity: 0;
    position: relative;
    z-index: 100;
    /*top: 50px;*/

  }

  .img-file {
    display: block;
    width: 100px;
    height: 100px;
    background-image: url("../../assets/camera.png");
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
    position: absolute;
    top: 270px;
    z-index: 1;
  }
  .uploadicon{
    height: 100px;
  }
</style>
