<template>
  <div id="idData" class="row case module-cont">
    <div class="card-bx col-md-3 col-sm-3 col-xs-6  case_item" :id="ci.id" v-for="ci in caseInfo">
      <router-link :to="{path:'/caseDetail/',query:{case_id:ci.id}}">
        <div class="img-ct">
          <img :src="ci.case_src"/></div>
        <div class="card-info">
          <p class="card-name ect" v-text="ci.case_name"></p>
          <p class="card-detail" v-text="ci.area+'m² / '+ci.house_type+' / '+ci.house_style+' / '+ci.reno_type"></p>
          <p  class="card-cost ect">
                                <span v-text="ci.cost">

                                </span>
            万
          </p>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        props:['caseInfo'],
        name: "Case",
        data:function () {
          return{
            // caseInfo:[
            //   // {"id":1,"case_src":require("../assets/company_img02.jpg"),"case_name":"案例一","area":"120",
            //   // "house_type":"三居","house_style":"欧式","reno_type":"全包","cost":"12"}
            //   ]
          }
        },
        mounted:function(){
          // console.log(2222+this.caseInfo+111111111);
        },
        methods:{

        }
    }
</script>

<style scoped>
  #idData {
    background: white;
    min-height: 360px;
  }
  .module-cont .card-bx {
    padding: 9px 10px;
  }
  .module-cont .card-bx a{
    text-decoration: none;
  }
  .module-cont .card-bx img {
    width: 100%;
    height: 180px;
  }

  .module-cont .card-info {
    position: relative;
    margin: 12px 10px 0;
  }

  .module-cont .card-name {
    font-size: 16px;
    color: #333;
  }

  .ect {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .module-cont .card-detail {
    margin-top: 6px;
    font-size: 12px;
    color: #999;
  }

  .module-cont .card-cost {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 12px;
    color: #999;
  }

  .module-cont .card-cost span {
    color: #ff5a00;
  }
  .module-cont .card-bx:hover{
    box-shadow: 0 0 10px grey;
  }

</style>
