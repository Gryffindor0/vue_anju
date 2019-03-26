<template>
  <!--底部-->
  <div class="container-fluid footer">
    <div class="row">
      <div class="col-xs-12">
        <span class="footer_link">友情链接:</span>
        <span>/</span>
        <img src="../../assets/footer01.png" alt="">
        <span>/</span>
        <img src="../../assets/footer02.png" alt="">
        <span>/</span>
        <img src="../../assets/footer03.png" alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <p>我的网站 版权所有 2008-2014 湘ICP备8888888</p>
        <p>本页面内容为网站演示数据，前台页面内容都可以在后台修改。</p>
        <p>Powered by <b>Ctrl ACV</b> 6.1.3 ©2008-2019.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterMain"
  }
</script>

<style scoped>
  /*底部*/
  .footer{
    background-color: #221F1E;
    text-align: center;
    margin-top: 50px;
    position: relative;
    z-index: 100;
  }
  .footer_link{
    color: #D8902D;
    font-size: 16px;
  }
  .footer>div:first-child{
    padding: 10px 0;
    border-bottom: solid 1px #777777;
    box-sizing: border-box;
  }
  .footer>div:last-child{
    padding: 20px 0 30px 0;
    box-sizing: border-box;
  }
  .footer>div:last-child p{
    color: #AFA9A9;
  }
  .footer>div:last-child b{
    color: #D8902D;
  }
</style>
