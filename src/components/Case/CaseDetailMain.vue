<template>
    <div class="start">
      <div v-for="mi in mainInfo">
        <div class="row start_img_small">
          <div class="col-sm-12 col-xs-12 col-md-12">
            <img :src="mi.caseTypeSrc"/>
          </div>
        </div>
        <div class="row start_img">
          <div class="col-sm-12 col-xs-12 col-md-12">
            <img :src="mi.caseSrc"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "CaseDetailMain",
        data:function () {
          return{
            isShow:true,
            mainInfo:
              {
                "caseTypeSrc":"../assets/living_room.png", "caseSrc":"../assets/case_img03.jpg"
              },
          }
        },
        mounted:function(){
          axios.get(this.Global.server_url+'case/getCaseDetailImg/',{
              params:{'case_id':this.$route.query.case_id}
            }
          )
            .then(res=>{
              if(res.data.status_code==='10009'){
                this.mainInfo=res.data.content
              }
            })
            .catch(err=>{
              console.log(err)
            })
        },
    }
</script>

<style scoped>
  .start .start_img {
    text-align: center;
    margin: 20px;
  }
  .start .start_img_small{
    text-align: center;
    margin: 20px;
  }
  @media (max-width: 443px) {
    .start .start_img_small img{
      width: 60%;
    }
    .text{
      display: none;
    }
  }
  .start .start_img img{
    width: 100%;
    object-fit: cover;
  }

</style>
