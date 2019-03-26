<template>
  <!--搜索-->
  <div class="search">
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
    <div class="search_main">
      <form action="#">
        <input type="text" id="search" v-model="search_content" @keyup.enter="search" />
      </form>
    </div>
    <div class="search_btn">
      <img src="../../assets/search_icon.svg" alt="" @click="search">
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexSearch",
    data:function () {
      return{
        isShow:false,
        search_condition:"装修公司",
        search_content:""
      }
    },
    methods:{
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
          this.search_content=''

        }else{
          alert("搜索内容不能为空")
        }

      }
    }
  }
</script>

<style scoped>
  /*搜索*/
  .search{
    padding-top: 50px;
    padding-bottom: 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .search_criteria{
    height: 42px;
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
    font-size: 12px;
    border-radius: 0;
    min-width: 90px ;
    top: 93%;
    display: block;
  }
  .search_ul li{
    display: block;
    padding: 8px 0;
    font-size: 14px;
    box-sizing: border-box;
    text-align: center;
  }
  .search_ul li:hover{
    cursor: pointer;
    background-color: #F5F5F5;
  }
  .search_main{
    border-top: solid 1px #ccc;
    border-bottom: solid 1px #ccc;
    box-sizing: border-box;
    width: 30%;
  }
  #search{
    width: 100%;
    border: 0;
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  #search:focus{
    border: 0;
    outline: 0;
  }
  .search_btn{
    width: 40px;
    height: 42px;
    border: solid 1px #ccc;
    border-left: 0;
    box-sizing: border-box;
    background-color: white;
    text-align: center;
    padding-top: 6px;
  }

  @media (max-width: 768px){
    .search_btn , .search_criteria{
      height: 34px;
    }
    #search{
      height: 32px;
    }
    .search_btn{
      height: 34px;
      padding-top: 1px;
    }
  }
</style>
