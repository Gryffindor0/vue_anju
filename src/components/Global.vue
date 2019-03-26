<template>

</template>

<script>

  // const server_url = 'http://47.102.45.80:8080/api/';
  const server_url = 'http://127.0.0.1:8000/';
  export default {
    name: "Global",
    server_url: server_url,
    // 用户token
    token:window.localStorage && window.localStorage.getItem('token'),
    // 用户id
    user_id:window.localStorage && window.localStorage.getItem('user_id')
  }
</script>

<style scoped>

</style>
