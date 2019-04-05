<template>

  <div class="personal_index center_right">
    <div class="row center_right_top">
      <div class="col-xs-5 img_info">
        <div class="img">
          <router-link to="/personalCenter/personalData" class="image"><img :src="userInfo[0]['icon']" class="user_Icon"/></router-link>
          <router-link to="/personalCenter/personalData" class="text">修改资料</router-link>
        </div>
        <div class="info">
          <h4 class="nickname" v-text="userInfo[0].nickname"></h4>
          <h6>业主ID：<span class="user_id" v-text="userInfo[0].id"></span></h6>
          <span>消息:0</span>
        </div>
      </div>
      <div class="col-xs-6 binding">
        <div class="row">
          <div class="col-xs-6 wechat">
            <img src="../../assets/wechat.png"/>
            <span class="wechat_bind">微信绑定</span>
            <div>
              <span>未绑定</span>
              <router-link to="/personalCenter/accountSecurity">立即绑定</router-link>
            </div>

          </div>
          <div class="col-xs-6 tel">
            <img src="../../assets/tel.png"/>
            <span>手机绑定</span>
            <div>
              <span>已绑定</span>
              <router-link to="/personalCenter/accountSecurity">修改</router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="row center_right_middle my_house" >
      <div class="col-md-11 diary">
        <h5>我的房屋</h5>
      </div>
      <div class="row house_info_text">
        <div id="1" v-for="(h_i,index) in house_infos">
          <table class="table table_info dis" v-show="!h_i.flag">
            <tr>
              <td>房屋信息:</td>
              <td><span v-text="h_i.name"></span> 丨 <span>{{h_i.area}}m²</span> | <span v-text="h_i.houseType__name"></span></td>
              <td><span class="editor" @click="editor(index)">编辑</span></td>​
            </tr>
            <tr>
              <td>房屋状态:</td>
              <td v-text="h_i.house_status"></td>
              <td><span class="remove" @click="remove(index)">删除</span></td>​
            </tr>
            <tr>
              <td>所在地区:</td>
              <td>
                <span v-text="h_i.address"></span><span v-text="h_i.village"></span>​
              </td>
              <td></td>​
            </tr>
          </table>
          <table class="table table_info dis" v-show="h_i.flag">
            <tr>
              <td>房屋名:</td>
              <td><input type="text" v-model="house_name_u" class="input house_name" placeholder="取个名字"></td>
              <td></td>​
            </tr>
            <tr>
              <td>面 积:</td>
              <td><input type="text" v-model="house_area_u" placeholder="m²" class="input house_area"></td>
              <td></td>​
            </tr>
            <tr>
              <td>户 型:</td>
              <td><select  v-model="H_T_U">
                <option v-for="h_t in house_type" v-text="h_t" ></option>
              </select>
              </td>
              <td></td>​
            </tr>
            <tr>
              <td>房屋状态:</td>
              <td>
                <select  v-model="H_S_U">
                  <option v-for="h_s in house_status" v-text="h_s"></option>
                </select></td>
              <td></td>​
            </tr>
            <tr>
              <td>所在地区:</td>
              <td>
                <select  v-model="H_D_U">
                  <option v-for="h_d in house_district" :value="h_d" v-text="h_d" ></option>
                </select>
                <input type="text" v-model="village_u" class="input district">
              </td>
              <td></td>​
            </tr>
            <tr>
              <td></td>
              <td>
                <button class="btn btn-default submit" @click="updateHouseInfo(index)">保存</button>
              </td>
              <td></td>​
            </tr>
          </table>
        </div>
      </div>
      <div class="row house_list" >
        <table class="table table_info dis" v-if="showHouseList">
          <tr>
            <td>房屋名:</td>
            <td><input type="text" v-model="house_name" class="input house_name" placeholder="取个名字"></td>
            <td></td>​
          </tr>
          <tr>
            <td>面 积:</td>
            <td><input type="text" v-model="house_area" placeholder="m²" class="input house_area"></td>
            <td></td>​
          </tr>
          <tr>
            <td>户 型:</td>
            <td><select id="house_type"  v-model="H_T">
              <option v-for="h_t in house_type"  v-text="h_t" ></option>
            </select>
            </td>
            <td></td>​
          </tr>
          <tr>
            <td>房屋状态:</td>
            <td>
              <select id="reno_type"  v-model="H_S">
                <option v-for="h_s in house_status" v-text="h_s"></option>
              </select></td>
            <td></td>​
          </tr>
          <tr>
            <td>所在地区:</td>
            <td>
              <select id="district"  v-model="H_D">
                <option v-for="h_d in house_district" :value="h_d" v-text="h_d" ></option>
              </select>
              <input type="text" v-model="village" class="input district">
            </td>
            <td></td>​
          </tr>
          <tr>
            <td></td>
            <td>
              <button class="btn btn-default submit" id="save" @click="saveHouseInfo">保存</button>
            </td>
            <td></td>​
          </tr>
        </table>
      </div>

      <div class="row" v-if="noHouse">
        <h3 class="no_house">您还没有添加房屋信息</h3>
      </div>
      <div class="row add_houses">
        <h4 class="add_house" @click="addHouse">+ 新增房屋</h4>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "PersonalIndex",
    data: function () {
      return {
        house_type: ['小户型', '一居', '二居', '三居', '四居', '复式', '别墅', '公寓'],
        house_status: ['还没买房', '已买房,未拿到钥匙', '准备装修', '已定装修公司', '已装修'],
        house_district: ['沧浪区', '金阊区','吴中区', '吴江区', '相城区', '虎丘区', '平江区', '高新区', '工业园区'],
        house_name: '', //用户填写的房屋名
        house_area: '', //用户填写的房屋面积
        village: '',    //用户填写的街道
        house_infos:[], //房屋信息表
        H_T:'小户型',    //选择的房屋类型
        H_S:'还没买房',  //选择的房屋状态
        H_D:'沧浪区',    //选择的区域
        showHouseList:false, //房屋信息填写表是否显示
        noHouse:true,   //没有房屋信息是否显示
        house_num:0,    //统计房屋数量
        house_name_u: '', //更新的房屋名
        house_area_u: '', //更新的房屋面积
        village_u: '',    //更新的房屋街区
        H_T_U:'小户型',    //更新选择的房屋类型
        H_S_U:'还没买房',  //更新选择的房屋状态
        H_D_U:'沧浪区',   //更新选择的区域
        userInfo:[],
      }
    },
    mounted:function () {
      // 获取用户数据
      axios.get(this.Global.server_url+'user/getUserInfo/',{
        // params:{"user_id":this.Global.user_id}
        params:{"user_id":window.localStorage.getItem("user_id")}
      })
        .then(res=>{
          if(res.data.status_code==='10009'){
            // console.log(res.data.content);
            this.userInfo=res.data.content

          }
        })
        .catch(err => {
          console.log(err)
        });
      //获取房屋列表
      this.getHouseList()
    },
    methods:{
      //保存房屋信息
      saveHouseInfo:function () {
        let house_info={};
        house_info.name=this.house_name;
        house_info.area=this.house_area;
        house_info.type=this.H_T;
        house_info.house_status=this.H_S;
        house_info.address=this.H_D;
        house_info.village=this.village;
        house_info.flag=false;
        house_info.user_id=window.localStorage.getItem("user_id");
        this.house_infos.push(house_info);
        this.$data.showHouseList=false;
        this.house_name='';
        this.house_area='';
        this.village='';
        this.H_T='小户型';
        this.H_S='还没买房';
        this.H_D='沧浪区';
        // 保存房屋信息
        axios.post(this.Global.server_url+'user/addHouseInfo/',house_info)
          .then(res=>{
            if(res.data.status_code==='10012'){
              this.getHouseList()
            }
          })
          .catch(err => {
            console.log(err)
          });

      },

      // 更新房屋信息
      updateHouseInfo:function (val) {
        let house_info={};
        house_info.id=this.house_infos[val].id;
        house_info.name=this.house_name_u;
        house_info.area=this.house_area_u;
        house_info.type=this.H_T_U;
        house_info.house_status=this.H_S_U;
        house_info.address=this.H_D_U;
        house_info.village=this.village_u;
        house_info.flag=!this.house_infos[val].flag;
        house_info.user_id=window.localStorage.getItem("user_id");

        // 保存房屋信息
        axios.post(this.Global.server_url+'user/updateHouseInfo/',house_info)
          .then(res=>{
            if(res.data.status_code==='10014'){
              // console.log(res.data.content);
              this.getHouseList()

            }
          })
          .catch(err => {
            console.log(err)
          });

        // 处理数组就要用数组的方法
        this.house_infos.splice(val,1,house_info);
      },
    // 编辑房屋信息
      editor:function (val) {
        console.log(this.house_infos[val])
        this.house_infos[val].flag=true;
      },
      // 删除房屋信息
      remove:function (val) {
        this.$data.house_num-=1;
        this.$data.house_num===0? this.$data.noHouse=true:this.$data.noHouse=false;

        console.log(this.house_infos);
        let con={};

        con.id=this.house_infos[val].id;

        axios.post(this.Global.server_url+'user/delHouseInfo/',con)
          .then(res=>{
            if(res.data.status_code==='10016'){
              // console.log(res.data.content);
             this.getHouseList()
            }
          })
          .catch(err => {
            console.log(err)
          });
        this.house_infos.splice(val,1);
      },
      // 新增房屋信息填写表
      addHouse:function () {
        this.$data.house_num+=1;
        this.$data.showHouseList=true;
        this.$data.noHouse=false
      },
      getHouseList:function () {
        axios.get(this.Global.server_url+'user/getHouseList/',{
          params:{"user_id":window.localStorage.getItem("user_id")}
          // params:{"user_id":"1"}
        })
          .then(res=>{
            if(res.data.status_code==='10009'){
              // console.log(res.data.content);
              this.house_infos=res.data.content;
              // this.house_infos===[]? this.showHouseList=true:this.showHouseList=false
              if(this.house_infos){
                this.showHouseList=false;
                this.noHouse=false;
                this.house_num=this.house_infos.length
              }else{
                this.showHouseList=true;
                this.noHouse=true;
              }
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
   .center_right .img_info{
    display: flex;
    margin: 20px;
  }
   .center_right .img{
    width: 104px;
    height: 104px;
    border-radius: 50%;
    overflow: hidden;
  }
  .container_center .center_right .img a{
    text-decoration: none;
    color: #ffffff;
  }
  .container_center .center_right .img :nth-child(2){
    background: rgba(76, 76, 76, 0.56);
    padding: 10px 20px;
    position: relative;
    left: 4px;
    top: -25px;
  }
   .center_right .img img{
    width: 104px;
    height: 104px;
    border-radius: 50%;
  }
   .center_right .info{
    margin-left: 20px;
    margin-top: 10px;
  }
  .center_right .binding{
    margin-top: 15px;
    padding: 30px;
    border-left: solid 1px grey;
  }
   .center_right .center_right_middle{
    margin-top: 10px;
    border: solid 1px #cccccc;
    background-color: white;
    margin-left: 15px;
  }
   .center_right .center_right_middle .editor,.remove{
    float: right;
    margin-right: 50px;
    cursor: pointer;
  }

  .no_house{
    padding: 100px 50px 100px 0;
    width: 800px;
    margin: auto;
    color: #1a1a1a;
    text-align: center;
  }
  .add_house{
    padding: 14px 50px 14px 0;
    text-align: center;
    cursor: pointer;
    width: 600px;
    margin:0 auto 20px;
    color: #f8f8f8;
    background: #01cb79;
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



</style>
