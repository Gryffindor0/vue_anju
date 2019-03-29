<template>
  <div>
    <unload-img></unload-img>
    <timer-btn></timer-btn>
  </div>
</template>

<script>
  import unloadImg from '../unloadImg'
  import dxyz from '../dxyz'
  import duanxinyz from '../duanxinyz'
  export default {
    name: "CompanyList",
    components:{
      "unload-img":unloadImg,
      "timer-btn":duanxinyz
    }
  }
</script>

<style scoped>

</style>
