<template>

  <div id="modal" class="modal_box" >
    <div class="modal-content">

      <div class="content-header">
        <h4>新家装修</h4>
        <span class="close" @click="closeModal">×</span>
      </div>


      <div class="content-body">

        <table class="table table_info dis">
          <tr>
            <td>
              日记标题:
              <span></span>
            </td>
            <td><input type="text" value="" class="input diary_tit" placeholder="取个名字" v-model="diaryTitle"></td>
          </tr>
          <tr>
            <td>
              面   积:
              <span></span>
            </td>
            <td><input type="text" value="" placeholder="m²" class="input diary_area" v-model="houseArea"></td>
          </tr>
          <tr>
            <td>
              风格:
              <span></span>
            </td>
            <td>
              <select class="style_select" v-model="reno_style">
                <option v-for="rs in reno_styles" v-text="rs"></option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              装修方式:
              <span></span>
            </td>
            <td>
              <select class="reno_type" v-model="reno_type">
                <option v-for="rt in reno_types" v-text="rt"></option>

              </select>
            </td>
          </tr>
          <tr>
            <td>
              所在小区:
              <span></span>
            </td>
            <td>
              <input type="text" value="" class="input village" placeholder="请输入房屋所在小区..." v-model="village">
            </td>
          </tr>
          <tr>
            <td>
              装修公司:
              <span></span>
            </td>
            <td>
              <input type="text" value="" class="input company" placeholder="请输入装修公司的名称..." v-model="renoCompany">
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button class="btn btn-default submit btn_diary">保存</button>
            </td>
          </tr>
        </table>

      </div>


    </div>
  </div>

</template>

<script>
    export default {
        name: "ModalBox",
        data:function () {
          return {
            reno_styles: ['选择您的装修风格','简约', '现代', '中式', '欧式', '美式', '田园', '新古典', '宜家','复古','混搭'],
            reno_types: ['选择装修方式','全包（省时省力，装修公司包工包料）', '半包（大众首选，装修公司包施工和辅料）',
                         '清包（预算最低，装修公司只包施工）', '整装（省时省力，装修公司包工包料）'],
            reno_style:'选择您的装修风格',
            reno_type:'选择装修方式',
            diaryTitle:'',
            houseArea:'',
            village:'',
            renoCompany:'',
          }
        },
        methods:{
          closeModal:function () {
            this.$emit('showModalBox')
          }
        }
    }
</script>

<style scoped>
  /*--模态框--begin--*/
  .modal_box {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
  }

  .modal-content {
    width: 35%;
    height: 63%;

    min-width: 260px;
    min-height: 200px;

    margin: 160px auto;
    background: #fff;

  }

  /*--模态框--end--*/
  /*--头部标题--begin--*/
  .content-header {
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    color: #b7b7b7;
    font-size: 30px;
    font-weight: bold;
    margin-right: 20px;
    transition: all 0.3s;
  }

  /*--头部标题--end--*/

  /*--日记信息--begin--*/
  .content-body {

    width: 100%;
    height: 85%;

  }

  .table_info tr td {
    border: none !important;
    padding:8px;
  }

  .table_info tr td:nth-child(1) {

    text-align: right;
    vertical-align: center;
  }

  .table_info tr td select {
    height: 30px;
    outline: none;
  }


  .table_info .submit {
    width: 80px;
    background: orangered;
    color: white;

  }

  .table_info .submit :visited {
    outline: none;
    background: #e43c00 !important;
  }

  .input {
    height: 35px;
    border-radius: 5px;
    border: solid 1px darkgrey;
    outline: none;
  }

  /*--日记信息--end--*/
</style>
