<template>
  <div>
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
          <ul class="nav navbar-nav navbar-left">
            <li>
              <router-link to="/" class="a1">首页</router-link>
            </li>
            <li>
              <router-link to="/CompanyList" class="a1">装修公司</router-link>
            </li>
            <li>
              <router-link to="/StrategyList/StrategyListItem" class="a1">装修攻略</router-link>
            </li>
          </ul>
          <nav-main-login :isExitLogin="isExitLogin"></nav-main-login>
          <nav-main-search></nav-main-search>

        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
  import NavMainLogin from './NavMainLogin'
  import NavMainSearch from './NavMainSearch'

  export default {
    name: "NavMain",
    data: function () {
      return {
        isLogin: false,
        isExitLogin: false
      }
    },
    components: {
      "nav-main-login": NavMainLogin,
      "nav-main-search": NavMainSearch,
    },
    watch: {
      '$route'(to) {
        console.log(to.path);
        if (to.path.indexOf("personalCenter") != -1) {
          this.isExitLogin = true;
        } else {
          this.isExitLogin = false;
        }
      }
    },
    mounted: function () {
      if (this.$route.path.indexOf("personalCenter") == 1) {
        this.isExitLogin = true;
      }else{
        this.isExitLogin = false;
      }
    }
  }
</script>

<style scoped>
  /*导航*/
  body {
    margin: 0;
    padding: 0;
  }

  .my_container {
    background-color: #FFFFFF;
    padding: 0;
    box-sizing: border-box;
    border-bottom: 0;
    box-shadow: 0px 0px 5px #cccccc;
  }

  .title {
    font-size: 30px;
  }

  .my_nav {
    height: 80px;
    padding-top: 16px;
    box-sizing: border-box;
  }

  .my_nav ul li a {
    font-size: 16px;
    font-weight: 700;
  }

  .my_nav ul li .a1:hover {
    color: #15a616 !important;
  }

</style>
