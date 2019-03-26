<template>
  <ul class="nav navbar-nav navbar-right">
    <li v-show="isSelect">
      <form action="#">
        <div class="dropdown search_header">
          <button class="btn btn-default dropdown-toggle search_criteria" type="button" id="dropdownMenu1"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                  @click="changeStatus">{{search_condition}}<span class="caret"></span>
          </button>
          <ul class="dropdown-menu search_ul" aria-labelledby="dropdownMenu1" v-show="isShow">
            <li class="li_company" @click="changeText">装修公司</li>
            <li class="li_strategy" @click="changeText">装修攻略</li>
            <li class="li_diary" @click="changeText">装修日记</li>
          </ul>
        </div>
        <input type="text" id="search_txt" v-model="search_content" placeholder="搜索公司、攻略、日记" @keyup.enter="search">
        <a href="###" id="search_btn_none" name="submit" @click="change_search">
          <img src="../../assets/delete.svg" alt="">
        </a>
      </form>
    </li>
    <li v-show="!isSelect">
      <a href="###" id="search_btn_block" name="submit" @click="change_search">
        <img src="../../assets/search_icon.svg" alt="">
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "NavMainSearch",
    data() {
      return {
        isSelect: false,
        isShow:false,
        search_condition:"装修公司",
        search_content:""
      }
    },
    methods:{
      change_search:function () {
        this.isSelect=!this.isSelect
      },
      changeStatus:function(){
        this.isShow=!this.isShow
      },
      changeText:function (event) {
        this.search_condition=event.target.innerText
        this.isShow=!this.isShow
      },
      search:function () {
        if(this.search_content!=""){
          if (this.search_condition=='装修公司') {
            this.$router.push({path:"/CompanyList",
              query:{search_content:this.search_content,search_condition:this.search_condition}})
          }else if (this.search_condition=='装修日记') {
            this.$router.push({path:"/StrategyList/DiaryListItem",
              query:{search_content:this.search_content,search_condition:this.search_condition}})
          }else if(this.search_condition=='装修攻略'){
            this.$router.push({path:"/StrategyList/StrategyListItem",
              query:{search_content:this.search_content,search_condition:this.search_condition}})
          }
          this.search_content='';
          this.isSelect=!this.isSelect
        }else{
          alert("搜索内容不能为空")
        }
      }
    }
  }
</script>

<style scoped>
  .nav_hidden form{
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 12px;
    border: solid 1px #888888;
  }
  .search_criteria{
    /*height: 42px;*/
    border-radius: 0;
  }
  .search_criteria:hover{
    background-color: white;
  }
  .search_criteria:focus,
  .search_criteria:active:focus,
  .search_criteria.active:focus,
  .search_criteria.focus,
  .search_criteria:active.focus,
  .search_criteria.active.focus {
    outline: none;
    box-shadow: none;
    background-color: #FFFFFF;
  }

  .search_ul{
    border-radius: 2px;
    min-width: 90px ;
    display: block;
  }
  .search_ul li{
    display: block;
    font-size: 14px;
    padding: 5px 0;
    box-sizing: border-box;
    text-align: center;
  }
  .search_ul li:hover{
    cursor: pointer;
    background-color: #F5F5F5;
  }
  .search_header .search_criteria{
    border: 0;
    border-right: solid 1px #CCCCCC;
  }
  #search_txt{
    padding-left: 10px;
    width: 400px;
    height: 30px;
    outline: 0;
    border: 0;
  }
  #search_btn_block{
    padding: 10px;
  }


  @media (max-width: 767px) {
    .nav_hidden{
      background-color: #FFFFFF;
    }
    .nav_hidden form{
      display: none;
    }
  }
  @media (max-width: 992px) {
    #search_txt{
      width: 98px !important;
      height: 30px;
      outline: 0;
      border: 0;
      display: block;
      border-radius: 6px;
    }
    .nav_hidden form{
      font-size: 12px;
      padding: 0 6px;
    }
    .search_criteria{
      font-size: 12px;
      padding: 5px;
    }
    .search_ul{
      border-radius: 2px;
      min-width: 67px ;

    }
    .search_ul li{
      display: block;
      font-size: 12px;
      box-sizing: border-box;
      text-align: center;
    }
  }
  @media (max-width: 1200px) {
    #search_txt{
      width: 300px;
      height: 30px;
      outline: 0;
      border: 0;
      display: block;
    }
  }
</style>
