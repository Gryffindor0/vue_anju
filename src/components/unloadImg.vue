<template>
  <div>
    <input name="usericon" type="file" class="input-file" accept="image/png,image/gif,image/jpeg"
           @change="uploadqiniu"/>
    <img :src="imgURL" alt="" class="img-file">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "unloadImg",
    data:function(){
      return{
        imgURL:''
      }
    },
    methods:{
      uploadqiniu:function (e) {
        var self = this;

        axios.get(this.Global.server_url+"qiniuToken/",{
          params:{
            filename:e.target.value
            }
        })
          .then(response => {

            //  七牛云存储
            var response=response.data;
            if(response && response.code=='908'){
              let file = e.target.files[0];
              let token=response.qiniu_token;
              let filename=response.key;
              let domain=response.domain;


              var config = {
                useCdnDomain: false,
                disableStatisticsReport: true,
                retryCount: 6,
                region: qiniu.region.z0   //此处表示服务器所在的区域
              };
              var putExtra = {
                fname: "",
                params: {},
                mimeType: ["image/png", "image/jpeg", "image/gif"]
              };

              // 添加上传dom面板
              putExtra.params["x:name"] = filename.split(".")[0];
              var subscription;
              // 调用sdk上传接口获得相应的observable，控制上传和暂停
              var observable = qiniu.upload(file, filename, token, putExtra);

              subscription = observable.subscribe({
                next(res){
                  // ...
                },
                error(err){
                  alert('error！')
                },
                complete(res){
                  if (res){
                    axios.post(self.Global.server_url+"user/unloadImg/",{
                      "icon":domain+'/'+res.key+'?imageView2/1/w/200/h/200/q/100',
                      "user_id":6
                    })
                    .then(response=>{
                      if (response && response.data.status_code == 10012) {
                        self.imgURL=domain+'/'+res.key
                      }
                    })
                      .catch(error=>{
                        console.log(error);
                      })
                  }
                }
              });

            }

          })
      }
    }

  }
</script>

<style scoped>
  .input-file {
    display: block;
    width: 200px;
    height: 200px;
    opacity: 0;
    position: relative;
    z-index: 100;

  }

  .img-file {
    display: block;
    width: 200px;
    height: 200px;
    background: red;
    position: relative;
    top: -200px;
    z-index: 1;
  }
</style>
