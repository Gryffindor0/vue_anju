<template>
  <div>
    <div class="col-xs-12 col-sm-6 col-md-3 my_company"
         v-for="(item,index) in items"
         :key="index"
         @click="toDetail(item.id)">
      <div class="content">
        <div class="company_image">
          <img :src="item.companyimg__name" alt="">
        </div>
        <div class="company_logo">
          <img :src="item.company_icon" alt="">
        </div>
        <div class="company_name">
          <span v-text="item.name"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "IndexCompanyItem",
    data: function () {
      return {
        items: []
      }
    },
    methods: {
      toDetail: function (id) {
        this.$router.push({path: "/CompanyDetail", query: {company_id: id}})
      }
    },
    mounted: function () {
      axios.get(this.Global.server_url + "company/indexCompanyList/")
        .then((response) => {
            if (response.data.status_code == 10009) {
              this.items = response.data.content;
            }else {
              console.log(response)
            }
          }
        )
        .catch(error =>{
          console.log(error);
        })
    }
  }
</script>

<style scoped>
  .content {
    width: 95%;
    height: 95%;
    border-bottom: solid 1px #D2D2D2;
    margin-bottom: 50px;
    background-color: white;
  }

  .content:hover {
    box-shadow: 0px 0px 10px #696969;
  }

  .company_image {
    width: 100%;
    height: 160px;
  }

  .company_image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .company_logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 20px #bcbcbc;
    margin: auto;
    text-align: center;
    line-height: 100px;
    position: relative;
    top: -50px;
  }

  .company_logo img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }

  .company_name {
    font-size: 20px;
    position: relative;
    top: -30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .company_main .my_company:nth-child(2) ~ div {
      display: none;
    }
  }
</style>
