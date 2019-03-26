<template>
  <div>
    <!--主体开始-->
    <div v-for="(d,index) in data" :id="d.good_id">
      <span v-text="d.good_name"></span>
      <input type="text" v-model="mycount[index]" />
      <button @click="add(index)">+</button>
    </div>
    <!--主体结束-->
  </div>
</template>

<script>
  export default {
    name: "CompanyList",
    data:function () {
      return{
        data:[],
        mycount:[]
      }
    },
    methods:{
      add:function (val) {
        // this.data[val].good_num++
        this.mycount[val]++;
        console.log(this.mycount);
      }
    },
    mounted:function () {
      var goods=[
        {"good_name":"iphone","good_id":1,"good_num":3},
        {"good_name":"huawei","good_id":2,"good_num":4},
        {"good_name":"oppo","good_id":3,"good_num":6}
      ];
      for (var g of goods){
        this.mycount.push(g.good_num)
      }
      console.log(this.mycount);
      this.data=goods

    },
    watch:{
      mycount() {
        console.log("44")
        console.log(this.mycount);
      }
    }
  }
</script>

<style scoped>
  .div01 {
    height: 80px;
    margin-bottom: 30px;
  }
</style>
