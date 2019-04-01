<template>
  <div class="des">
    <designer :designerInfo="designerInfo"></designer>
    <div id="barcon">
      <span class='btn btn-default page_1' @click="go_page(index)" v-for="(p,index) in pageNum" v-text="p" :class="{'active':index===isActive}"></span>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import Designer from './Designer'
  export default {
        name: "DesignerList",
        components:{
          'designer':Designer
        },
        data:function(){
          return {
            isActive:-1,
            con:{"pageNum":0,"perPageNum":12},
            pageNum:[],
            designerInfo:[
              // {
              //   "id":"1","des_icon":"","des_name":"","case_num":"","design_concept":""
              // }
            ]
          }
        },
        mounted:function () {
          //axios请求所有的案例数据
          this.con.company_id=this.$route.query.company_id;
          axios.get(this.Global.server_url+'designer/designerListNum/',{
            params:this.con
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                // console.log(res.data.content);
                for(let n=1;n<=Math.ceil(res.data.content/12);n++){
                  this.pageNum.push(n)
                }
                console.log(this.pageNum)
              }
            })
            .catch(err => {
              console.log(err)
            });
          //获取第一页案例数据
          axios.get(this.Global.server_url+'designer/designerPage/',{
            params:this.con
          })
            .then(res=>{
              if(res.data.status_code==='10009'){
                console.log(res.data.content);
                for(let c of res.data.content){
                  c.design_concept=c.design_concept.slice(0,35)+'...'
                }
                this.designerInfo=res.data.content
              }
            })
            .catch(err => {
              console.log(err)
            })
        },
        watch:{
          pageNum:function () {
            this.isActive=-1
          }
        },
        methods:{
          go_page:function (val) {
            this.isActive=val;
            // this.pageNum=this.casePageNum;
            this.con.pageNum=val;
            let con=this.con;
            console.log(con);
            axios.get(this.Global.server_url+'designer/designerPage/',{
              params:con
            })
              .then(res=>{
                if(res.data.status_code==='10009'){
                  console.log(res.data.content);
                  for(let c of res.data.content){
                    c.design_concept=c.design_concept.slice(0,30)+'...'
                  }
                  this.designerInfo=res.data.content
                }else if(res.data.status_code==='10008') {
                  this.designerInfo=res.data.content
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
  .des{
    width: 90%;
    margin: auto;
  }
  #barcon{
    text-align: center;
    padding: 15px;
    margin-top: 20px;
  }
  .active{
    background: #0CB469;
    color: white;
  }
  #barcon .page_1{
    margin: 5px;
  }
  @media (max-width: 993px) {
    #barcon{
      margin-left: 25%;
    }
  }
  @media (max-width: 768px) {
    #barcon{
      margin-left: 20%;
    }
  }
  @media (max-width: 610px) {
    #barcon{
      margin-left: 8%;
    }
    .page_1{
      width: 15%;
    }
  }
  @media (max-width: 437px) {
    #barcon{
      margin-left: 8%;
    }
    .page_1{
      width: 10%;
    }
  }
</style>
