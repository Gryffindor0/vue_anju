<template>
    <div>
      <detail-top></detail-top>
      <detail-main></detail-main>
    </div>
</template>

<script>
  import CaseDetailTop from './CaseDetailTop'
  import CaseDetailMain from './CaseDetailMain'
    export default {
        name: "CaseDetail",
        components:{
          'detail-top':CaseDetailTop,
          'detail-main':CaseDetailMain
        }
    }
</script>

<style scoped>
  .start{
    margin-top: 20px;
    padding: 20px 10%;
    background: white;
  }
</style>
