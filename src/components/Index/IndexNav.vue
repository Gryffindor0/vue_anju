<template>
  <nav class="navbar navbar-default navbar-fixed-top my_container">
    <div class="container my_nav">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" id="nav_btn" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand title" href="###">安居家装</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse nav_hidden" id="bs-example-navbar-collapse-1">
        <nav-index-login></nav-index-login>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/" class="a1">首页</router-link></li>
          <li class="ss"><a href="#">/</a></li>
          <li><router-link to="/CompanyList" class="a1" >装修公司</router-link></li>
          <li class="ss"><a href="#">/</a></li>
          <li><router-link to="/StrategyList/StrategyListItem" class="a1">装修攻略</router-link></li>
          <li class="ss"><a href="#">/</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import IndexNavLogin from './IndexNavLogin'

  export default {
    name: "IndexNav",

    components: {
      "nav-index-login": IndexNavLogin,
    }
  }
</script>

<style scoped>
  /*导航*/
  .my_container{
    background-color: rgba(0, 0, 0, 0.2);
    padding: 0;
    box-sizing: border-box;
    border-bottom: 0;
  }
  .title{
    color: #FFFFFF !important;
    font-size: 30px;
    padding: 0;
    margin-top: 15px;
  }
  .title img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .my_nav{
    height: 80px;
    padding-top: 16px;
    box-sizing: border-box;
  }
  .my_nav ul li a{
    font-size: 16px;
    color: white !important;
    font-weight: 700;
  }
  .my_nav ul li .a1:hover{
    color: #15a616 !important;
  }
  @media (max-width: 767px) {
    .nav_hidden{
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
</style>
