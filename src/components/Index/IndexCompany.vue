<template>
  <!--公司-->
  <div class="container company">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 company_title">
        <span class="span01">装修公司</span>
        <span class="span02">——Company——</span>
      </div>
    </div>
    <div class="row company_main">
      <index-company-item></index-company-item>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 more">
        <router-link to="/CompanyList">More</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import IndexCompanyItem from './IndexCompanyItem'

  export default {
    name: "IndexCompany",
    components: {
      "index-company-item": IndexCompanyItem
    },
    data: function () {
      return {
      }
    },
    methods: {},

  }
</script>

<style scoped>
  /*公司*/

  .company a {
    color: #575757;
  }

  .company a:hover {
    color: #575757;
    text-decoration: none;
  }

  .company_title {
    text-align: center;
    padding: 20px 0px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .span01 {
    color: #444444;
    font-size: 30px;
    margin-bottom: 5px;
  }

  .more {
    margin-top: 30px;
    margin-bottom: 80px;
    text-align: center;
  }

  .more a {
    font-size: 18px;
    padding: 5px 50px;
    display: inline-block;
    box-sizing: border-box;
    border: solid 1px #CCC;
  }

  .more a:hover {
    background-color: #C4AD4F;
  }


</style>
