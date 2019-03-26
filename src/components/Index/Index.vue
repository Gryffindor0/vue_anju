<template>
  <div>
    <!--轮播开始-->
    <index-carousel></index-carousel>
    <!--轮播结束-->

    <!--搜索开始-->
    <index-search></index-search>
    <!--搜索结束-->

    <!--公司开始-->
    <div class="container-fluid company">
      <index-company></index-company>
    </div>
    <!--公司结束-->

    <!--日记开始-->
    <index-diary></index-diary>
    <!--日记结束-->

    <!--服务流程开始-->
    <index-service></index-service>
    <!--服务流程结束-->

    <!--攻略开始-->
    <index-strategy></index-strategy>
    <!--攻略结束-->
  </div>
</template>

<script>
import IndexNav from './IndexNav'
import IndexCarousel from './IndexCarousel'
import IndexSearch from './IndexSearch'
import IndexCompany from './IndexCompany'
import IndexDiary from './IndexDiary'
import IndexService from './IndexService'
import IndexStrategy from './IndexStrategy'
  export default {
    name: "Index",
    data:function(){
      return{
        flag:null
      }
    },
    components:{
      'index-nav':IndexNav,
      'index-carousel':IndexCarousel,
      'index-search':IndexSearch,
      'index-company':IndexCompany,
      'index-diary':IndexDiary,
      'index-service':IndexService,
      'index-strategy':IndexStrategy
    },
    methods:{
      changeNav:function (val) {
        this.flag=val;
      }
    }
  }
</script>

<style scoped>
  .company{
    background-color: #FFFFFF;
  }
</style>
