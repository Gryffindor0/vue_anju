<template>

    <div class="row case module-cont" >
      <div class="card-bx col-md-3 col-sm-3 col-xs-6" v-for="di in designerInfo">
        <div class="content">
          <router-link :to="{path:'/DesignerDetail',query:{designer_id:di.id}}">
            <div class="img-ct">
              <img :src="di.des_icon"/></div>
            <div class="card-info">
              <p class="card-name ect" v-text="di.des_name"></p>
              <p class="card-detail"><span v-text="di.case_num+'套案例'"></span></p>
              <p class="card-cost ect" v-text="'设计理念: '+di.design_concept"></p>
            </div>
          </router-link>
        </div>
      </div>
    </div>


</template>

<script>
    export default {
        props:['designerInfo'],
        name: "Designer",
        data:function () {
          return{
            // designerInfo:[
            //   {
            //     "id":"1","des_icon":"","des_name":"","case_num":"","design_concept":""
            //   }
            // ]
          }
        }
    }
</script>

<style scoped>
  /*----------媒体查询结束-----------*/
  .container .text a{
    color: #858585;
  }
  .container .text{
    margin-bottom: 5px;
  }

  /*-----------案例列表开始-------------*/

  .module-cont{
    margin-top: 50px;
  }

  .module-cont .card-bx {
    padding: 10px ;
    margin-top: 25px;
    /*height: 340px;*/
  }
  .content{
    border: solid 1px #d5d5d5;
    background: white;
    padding: 20px;
  }

  .content:hover{
    box-shadow: 0 0 10px grey;
    border: none;
  }
  .module-cont .card-bx a{
    text-decoration: none;
    text-align: center;
  }
  .module-cont .card-bx img {
    width: 60%;
    border-radius: 50%;
    margin: 25px 0;
  }

  .module-cont .card-name {
    font-size: 18px;
    color: #333;
  }


  .module-cont .card-detail {
    margin-top: 6px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #999;
  }

  .module-cont .card-cost {
    font-size: 14px;
    color: #676767;
    text-align: left;
  }


</style>
