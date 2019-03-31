<template>
  <div class="tab">
    <table class="table table-bordered font">
      <tr>
        <td colspan="8" class="zx">
          <router-link to="/" class="ago">苏州装修</router-link>
          >
          <router-link to="/companyList" class="ago">苏州装修公司</router-link>
          >
          共 19 结果
          <span class="condition" v-if="price" v-text="price" @click="clearPrice"></span>
          <span class="condition" v-if="style" v-text="style" @click="clearStyle"></span>
          <span class="condition" v-if="address" v-text="address" @click="clearAddress"></span>
        </td>
        <td colspan="2" class="sz">
          <a href="#">苏州装修公司哪家强 ?</a>
        </td>
      </tr>
      <tr>
        <td class="line">承接价位</td>
        <td v-for="p in prices" v-text="p" class="screen" @click="getPrice(p)"></td>
      </tr>
      <tr>
        <td class="line">专长风格</td>
        <td v-for="s in styles" v-text="s" class="screen" @click="getStyle(s)"></td>
      </tr>
      <tr>
        <td class="line">所在区域</td>
        <td v-for="a in addresses" v-text="a" class="screen" @click="getAddress(a)"></td>
      </tr>
    </table>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: "CompanyScreen",
    data: function () {
      return {
        prices: ['3万以下', '3~5万','5~10万','10~20万','20~50万','50~80万','80~100万','100万以上'],
        styles: ['简约', '现代','中式','欧式','美式','日式','田园','北欧','东南亚'],
        addresses: ['沧浪区', '虎丘区','金阊区','平江区','吴中区','相城区','高新区','吴江区','工业园区'],
        price:'',
        style:'',
        address:'',
        condition:{"price":"","style":"","address":"","pageNum":0,"perPageNum":5}
      }
    },
    methods: {
      getPrice: function (val) {
        this.$data.price = val + ' ×';
        this.$data.condition.price = val;
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      getStyle: function (val) {
        this.$data.style = val + ' ×';
        this.$data.condition.style = val;
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      getAddress: function (val) {
        this.$data.address = val + ' ×';
        this.$data.condition.address = val;
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      clearPrice: function () {
        this.$data.price = '';
        this.$data.condition.price = '';
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      clearStyle: function () {
        this.$data.style = '';
        this.$data.condition.style = '';
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      clearAddress: function () {
        this.$data.address = '';
        this.$data.condition.address = '';
        // console.log(this.$data.condition);
        this.condition.pageNum = 0;
        this.getCompanyInfo();
        this.$emit('getScreenCondition', this.condition);
      },
      getCompanyInfo: function () {
        let con = this.condition;
        let num = [];
        axios.get(this.Global.server_url + 'company/getConditionCompany/', {
          params: con
        })
          .then(res => {
            if (res.data.status_code === '10009') {
              // console.log(res.data.content);
              this.$emit('getScreenCompany', res.data.content)
            } else if (res.data.status_code === '10008') {
              this.$emit('getScreenCompany', res.data.content)
            }
          })
          .catch(err => {
            console.log(err)
          });
        axios.get(this.Global.server_url + 'company/getConditionComNum/', {
          params: con
        })
          .then(res => {
            if (res.data.status_code === '10009') {
              console.log(res.data.content);

              for (let n = 1; n <= Math.ceil(res.data.content / 5); n++) {
                num.push(n)
              }

              this.$emit('getScreenComNum', num)
            } else if (res.data.status_code === '10008') {
              this.$emit('getScreenComNum', num)
            }
          })
          .catch(err => {
            console.log(err)
          });
      }
    }
  }
</script>

<style scoped>
  /*-----------筛选条件开始--------------------*/
  body, ul, li, a {
    margin: 0;
    padding: 0;
  }

  body {
    background: #f8f8f8;
  }
  .tab{
    width: 90%;
    margin: auto;
  }
  .table {
    background: white;
    margin-top: 55px;
  }

  .table .zx {
    text-align: left !important;
    border-right: none;
  }

  .table  .zx .condition{
    margin-left: 10px;
    padding: 2px 10px;
    color: darkseagreen;
    box-sizing: border-box;
    border: solid 1px greenyellow;
    cursor: pointer;
  }
  .table .screen{
    width: 10%;
    cursor: pointer;
    color: grey;
    text-align: center;
  }
  .table .screen:hover{
    background-color: #00F7DE;
  }
  .table :nth-child(1) .sz {
    width: 20%;
    text-align: right;
  }

  .table :nth-child(2) :first-child {
    width: 10%;
  }

  .table-bordered > tr > td {
    border: none;
    padding: 8px;
  }

  .table-bordered a {
    color: grey;
    text-decoration: none;
  }

  .table-bordered > tr {
    border-top: solid 1px #ddd;
  }

  .table-bordered > tr .line {
    border-right: solid 1px #ddd;
    text-align: center;
    background: rgba(193, 193, 193, 0.15);
  }

  @media (min-width: 768px)and (max-width: 993px) {
    .font {
      font-size: 12px;
    }

  }


</style>
