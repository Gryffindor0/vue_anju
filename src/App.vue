<template>
  <div id="app">
    <!--导航开始-->
    <header>
      <index-nav v-if="isIndex"></index-nav>
      <nav-main v-if="notIsIndex"></nav-main>
      <div class="div01" v-if="notIsIndex"></div>
    </header>
    <!--导航结束-->

    <!--主体组件开始-->
    <section>
      <router-view/>
    </section>
    <!--导航+主体组件结束-->

    <!--页脚开始-->
    <footer>
      <footer-main v-show="footer_status"></footer-main>
    </footer>
    <!--页脚结束-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        isIndex: true,
        notIsIndex: false,
        footer_status:true,
        // isExitLogin:false
      }
    },
    mounted:function () {
      if (this.$route.name === "Index") {
        this.isIndex = true;
        this.notIsIndex = false;
      }else if(this.$route.name === "Login" || this.$route.name === "Register"){
        this.isIndex = false;
        this.notIsIndex = false;
        this.footer_status=false;
      }
      // else if (this.$route.path.indexOf("personalCenter") == 1){
      //   this.isIndex = false;
      //   this.notIsIndex = true;
      //   this.isExitLogin=true;
      // }
      else{
        this.isIndex = false;
        this.notIsIndex = true;
      }
    },
    watch: {
      '$route'(to) {
        if (to.name === "Index") {
          this.isIndex = true;
          this.notIsIndex = false;
          this.footer_status=true;
          // this.isExitLogin=false;
        }else if(to.name === "Login" || to.name === "Register"){
          this.isIndex = false;
          this.notIsIndex = false;
          this.footer_status=false;
          // this.isExitLogin=false
        }
        // else if (to.path.indexOf("personalCenter") !=-1){
        //   this.isIndex = false;
        //   this.notIsIndex = true;
        //   this.footer_status=true;
        //   this.isExitLogin=true;
        // }
        else{
          this.isIndex = false;
          this.notIsIndex = true;
          this.footer_status=true;
          // this.isExitLogin=false;
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    padding: 0;
    margin: 0;
    background-color: #F8F8F8;
  }

  ul, li {
    padding: 0;
    list-style: none;
  }
  .div01 {
    height: 80px;
    margin-bottom: 30px;
  }
</style>
