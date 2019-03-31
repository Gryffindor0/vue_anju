<template>
    <!--写日记-begin-->
    <div class="zxgl_write">
        <!--路径导航盒子-begin-->
        <div class="zgs_nav">
            <div class="contain">
                <!--路径导航-begin-->
                <ul class="breadcrumb ">

                    <li class="breadcrumb-pre">
                        <a href="#">装修攻略></a>
                    </li>

                    <li class="breadcrumb-pre">
                        <a href="#">装修日记></a>
                    </li>

                    <li class="breadcrumb-last">雅私阁装饰</li>
                </ul>
                <!--路径导航-end-->
            </div>
        </div>
        <!--路径导航盒子-begin-->

        <!--日记-begin-->

        <div class="contain">

            <!--标题-写日记-begin-->
            <ul class="diary_tab">
                <li class="on">
                    <span>写日记</span>
                </li>
            </ul>
            <!--标题-写日记-end-->

            <div class="write_diary">
                <form action="#">
                    <input type="hidden" name="diary_id" id="diary_id" value="">
                    <input type="hidden" name="action" id="action" value="add">
                    <input type="hidden" name="scene_id" id="scene_id" value="5221268">
                    <!--阶段-begin-->
                    <input type="hidden" name="progress_id" id="progress_id" value="4">
                    <!--标签-begin-->
                    <!--<input type="hidden" name="tag_id" id="tag_id" value="14">-->

                    <!--日记编辑框-begin-->
                    <div class="write_diary_hd clear">

                        <!--编辑区域-begin-->
                        <div class="diary_editor">
                            <div class="diary_textarea">
                            <textarea name="content" id="diaryContent"
                                      placeholder="说点什么吧，来记录您装修过程的点点滴滴"
                                      style="border-color: rgb(221, 221, 221);" v-model="diary_content"></textarea>
                            </div>

                        </div>
                        <!--编辑区域-end-->


                        <!--阶段选择-begin-->
                        <div class="write_info">
                            <div class="write_info_item">
                                <div class="info_hd">选择装修阶段
                                    <em id="progress_exp" v-text="stage_order"></em>
                                </div>

                                <div class="info_bd pick_stage">
                                    <!--阶段选择-->
                                    <div class="stage_hd">
                                        <ul class="clearfix" id="progressType">
                                            <!--<li class="on">-->
                                            <!--<a pro-id="1" pro-type="1" href="javascript:;"-->
                                            <!--order="制定整体预算。选择装修风格、主材、家具、家电配饰等。寻找合适的施工方，签订合同后开工！">-->
                                            <!--<span>准备</span>-->
                                            <!--</a>-->
                                            <!--</li>-->
                                            <li v-for="(stage,index) in stages" :key="index" :class="stage.flag ? 'on':''">
                                                <!--<i></i>-->
                                                <a pro-id="2" pro-type="2"
                                                   :order="stage.order" @click="change_stage(index)" href="javascript:;">
                                                    <span>{{stage.text}}</span></a>
                                            </li>

                                            <!--<li>-->
                                            <!--<i></i>-->
                                            <!--<a pro-id="8" pro-type="8" href="javascript:;"-->
                                            <!--order="全面完工住新房。做完以上工作后，就可以入住新家啦！当然，大部分人都会先让家里散散甲醛味哦！">-->
                                            <!--<span>入住</span></a>-->
                                            <!--</li>-->
                                        </ul>

                                    </div>

                                    <div class="info_hd mt30">
                                        选择日记标签
                                        <em>用一个标签来描述你日记的内容吧~</em>
                                    </div>
                                    <!--分离标签-->
                                    <div class="stage_keys clear" id="tagType">
                                        <div id="tag-type-1" style="">
                                            <a href="javascript:;" tag-id="1" class="keyon">前期准备</a>
                                            <a href="javascript:;" tag-id="2" class="">交房验房</a>
                                            <a href="javascript:;" tag-id="3" class="">前期设计</a>
                                            <a href="javascript:;" tag-id="5">签装修保</a>
                                            <a href="javascript:;" tag-id="500">开工大吉</a>

                                            <a href="javascript:;" pro-id="9" id="tag_50" tag-id="50">产品选购</a>
                                            <a href="javascript:;" pro-id="9" id="tag_51" tag-id="51">碎碎念</a>
                                        </div>
                                        <div id="tag-type-2" style="display: none">
                                            <a href="javascript:;" tag-id="6">装修开工</a>
                                            <a href="javascript:;" tag-id="7">主体拆改</a>

                                        </div>
                                        <div id="tag-type-3" style="display: none">
                                            <a href="javascript:;" tag-id="9">水电改造</a>
                                            <a href="javascript:;" tag-id="10">水电验收</a>

                                        </div>
                                        <div id="tag-type-4" style="display: none">
                                            <a href="javascript:;" tag-id="12">防水</a>
                                            <a href="javascript:;" tag-id="13">贴砖</a>
                                            <a href="javascript:;" tag-id="14">木工</a>
                                            <a href="javascript:;" tag-id="15">泥木验收</a>

                                        </div>
                                        <div id="tag-type-5" style="display: none">
                                            <a href="javascript:;" tag-id="19">油漆验收</a>
                                            <a href="javascript:;" tag-id="17">墙面刷漆</a>
                                            <a href="javascript:;" tag-id="18">家具刷漆</a>

                                        </div>
                                        <div id="tag-type-6" style="display: none">
                                            <a href="javascript:;" tag-id="22">橱柜安装</a>
                                            <a href="javascript:;" tag-id="23">门窗安装</a>
                                            <a href="javascript:;" tag-id="24">铺地板</a>
                                            <a href="javascript:;" tag-id="25">贴壁纸</a>
                                            <a href="javascript:;" tag-id="26">插座安装</a>
                                            <a href="javascript:;" tag-id="27">灯具安装</a>
                                            <a href="javascript:;" tag-id="28">五金安装</a>
                                            <a href="javascript:;" tag-id="29">洁具安装</a>
                                            <a href="javascript:;" tag-id="30">窗帘安装</a>
                                            <a href="javascript:;" tag-id="31">竣工验收</a>
                                            <a href="javascript:;" tag-id="21">厨卫吊顶</a>

                                        </div>
                                        <div id="tag-type-7" style="display: none">
                                            <a href="javascript:;" tag-id="33">拓荒保洁</a>
                                            <a href="javascript:;" tag-id="34">家具进场</a>
                                            <a href="javascript:;" tag-id="35">家电安装</a>
                                            <a href="javascript:;" tag-id="36">后期装饰</a>
                                            <a href="javascript:;" tag-id="37">甲醛检测</a>

                                        </div>
                                        <div id="tag-type-8" style="display: none">
                                            <a href="javascript:;" tag-id="40">毕业照</a>
                                            <a href="javascript:;" tag-id="41">经验总结</a>
                                            <a href="javascript:;" tag-id="39">乔迁新居</a>

                                        </div>
                                        <div id="tag-type-9" style="display: none">
                                            <a href="javascript:;" tag-id="51">碎碎念</a>
                                            <a href="javascript:;" tag-id="50">产品选购</a>

                                        </div>
                                    </div>

                                    <a href="javascript:;" class="more" id="unfold" style="display: block;">
                                        更多
                                    </a>

                                    <a href="javascript:;" class="more" id="fold" style="display: none;">
                                        收起
                                    </a>
                                </div>

                            </div>

                        </div>
                        <!--阶段选择-end-->

                    </div>
                    <!--日记编辑框-end-->

                    <!--日期选择-begin-->
                    <div class="write_info_item">
                        <div class="info_hd mb20">
                            选择日期
                            <em>如果是写回忆贴，可修改为日记发生当天的日期</em>
                        </div>

                        <div class="info_bd border_line clearfix">
                        <span class="text_date">
                            <input type="date" class="demo-input" name="otime" ref="datetime">
                            <!--<a class="text_date_ico" href="javascript:;"></a>-->
                        </span>

                        </div>

                    </div>
                    <!--日期选择-end-->


                    <!--上传图片-begin-->
                    <div class="upload_pic">
                        <div class="upload_hd">
                            上传装修照片
                            <span>
                            选择装修过程中的照片，每张低于5M，支持JPG/JPEG/PNG格式，最多9张
                        </span>
                        </div>

                        <div class="upload_bd">
                            <ul class="clearfix" id="upload_result_1">
                                <li>
                                    <div class="upload_lnk" @click="btnpic">
                                        选择图片
                                    </div>
                                    <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg"
                                           @change="changepic()" id="open"
                                           style="display: none" ref="fileinput">

                                </li>


                                <!--v-for="(plist,idx) in piclist"-->
                                <!--v-if="!uploadpic"-->
                                <li v-for="(plist,idx) in piclist" v-if="!uploadpic">
                                    <img :id="idx" ref="imglist" :src="plist"  alt="日记图片">
                                    <span class="delete" @click="imgclick(idx)">x</span>
                                </li>

                                <!--<li>-->
                                <!--<img src="" alt="">-->
                                <!--</li>-->

                            </ul>
                        </div>
                    </div>
                    <!--上传图片-end-->

                    <!--发布按钮-begin-->

                    <div class="write_btn">
                        <a href="javascript:;" class="post_btn" @click="publish_diary">发布日记</a>
                    </div>
                    <!--发布按钮-end-->


                </form>

            </div>

        </div>
        <!--日记-end-->

    </div>
    <!--写日记-end-->
</template>

<script>

    export default {
        name: "WriteDiary",

        components: {

        },

        data: function () {
            return {

                stages:[
                    {
                        "name":"前期准备",
                        "text":"准备",
                        "order":"制定整体预算。选择装修风格、主材、家具、家电配饰等。寻找合适的施工方，签订合同后开工!",
                        "flag":true
                    },

                    {
                        "name":"主体拆改",
                        "text":"拆改",
                        "order":"开工前到物业办理装修许可，现场核对装修项目，若是二手房，需要拆掉旧有电器装饰，改变房屋格局。",
                        "flag":false
                    },



                    {
                        "name":"水电改造",
                        "text":"水电",
                        "order":"切割开槽，布设电/水管。进行第一次验收。水路要打压测试电路要通电验收。这是装修大坑，需控制预算，小心超支!",
                        "flag":false

                    },

                    {
                        "name":"泥木",
                        "text":"泥木",
                        "order":"防水和基层处理。包含天花吊顶，铺墙砖地砖和家具的定制。这一阶段历时最久，工序最复杂，要做好项目量核对。",
                        "flag":false

                    },

                    {
                        "name":"油漆",
                        "text":"油漆",
                        "order":"墙面和家具粉饰工作。这里油漆真伪和施工质量，会影响房屋整体装修感觉。",
                        "flag":false

                    },

                    {
                        "name":"竣工",
                        "text":"竣工",
                        "order":"施工现场完工。安装橱柜、地板、水龙头等基础设备，做最后一次验收，结清尾款并索要质保单。",
                        "flag":false

                    },

                    {
                        "name":"软装",
                        "text":"软装",
                        "order":"设计居家装饰布置。选购家具电器、家居配饰行摆放布置。在施工前定好家具的尺寸和摆放位置，这个阶段会更省心。",
                        "flag":false

                    },

                    {
                        "name":"入住",
                        "text":"入住",
                        "order":"全面完工住新房。做完以上工作后，就可以入住新家啦！当然，大部分人都会先让家里散散甲醛味哦！",
                        "flag":false

                    },

                ],


                stage_order:"制定整体预算。选择装修风格、主材、家具、家电配饰等。寻找合适的施工方，签订合同后开工!",

                stage_name:"",


                diary_id:this.$route.query.diary_id,
                diary_content: '',

                // 上传图片
                uploadpic:true,

                // motai:false,
                // showtitle: true,
                // dis: 'block',

                piclist:[],
                picjson:{},
                picarr:[],//  文件名
                picfiles:[],// files[0]

                sqlpiclist:[]

            }
        },

        methods: {

            change_stage:function(index){
                for (var i=0;i<this.stages.length;i++){
                    this.stages[i].flag=false;
                }
                // alert(index);
                this.stage_order=this.stages[index]["order"];
                this.stages[index]["flag"]=true;
                this.stage_name=this.stages[index]["name"]

            },

            // 选择文件
            btnpic:function () {
                open = this.$refs.fileinput;
                open.click();
                this.$data.uploadpic = false;
            },
            //  把图片渲染在网页上
            changepic:function() {
                var reads= new FileReader();
                this.$refs.fileinput.files[0];
                // console.log(this.$refs.fileinput.files[0]);
                if( this.$refs.fileinput.files[0]){
                    reads.readAsDataURL( this.$refs.fileinput.files[0]);
                    var that = this
                    reads.onloadend=function(e){
                        // 把路径添加到piclist中
                        that.$data.piclist.push(this.result);
                        // 把 value 和 files[0] 添加到picjson 中
                        // that.picjson[that.$refs.fileinput.value]=that.$refs.fileinput.files[0]
                        that.picfiles.push(that.$refs.fileinput.files[0])

                        that.picarr.push(that.$refs.fileinput.value)
                        // console.log(that.$data.piclist);
                        // arr.push(open.value);
                    }
                }
            },

            // 删除图片
            imgclick:function (val) {
                if(this.piclist){
                    // console.log(this.picarr[val]);
                    // console.log(this.picjson);
                    // 删除 picjson 里的数据 不上传
                    delete this.picjson[this.picarr[val]];
                    // console.log(this.picjson);

                    this.$data.piclist.splice(val,1)
                }

            },



            publish_diary:function () {
                let self=this;

                // 遍历 picjson 循环上传多张图片
                let i=0;

                function recursion() {
                    if(i >= self.picarr.length){

                        let diarycentent={
                            'user_id':this.Global.user_id,
                            'title':self.title,
                            'city':self.city,
                            'date':self.$refs.datetime.value,
                            'impress':self.impress,

                            // 'images':self.sqlpiclist,
                        };

                        // console.log(articleinfo);
                        // console.log(articleinfo.images,111);
                        axios.post(this.Global.server_url+'diary/',diarycentent)
                            .then((response)=>{
                                if(response && response.data.status_code == '10018'){
                                    alert(response.data.status_text)
                                    self.$router.push({path:'/personalCenter/'})
                                }
                            })
                            .catch((error)=> {
                                console.log(error);
                            })
                    }
                }

            }



        },

        mounted: function () {
            // diary_id=this.$route.query.diary_id;

        },

    }

</script>

<style scoped>

    body {
        background: #fff;
    }

    /*日记主体*/
    .zxgl_write {
        /*my*/
        background: #fff;
        padding-bottom: 60px;
    }

    /*路径导航盒子-begin-*/
    .zgs_nav {

        margin-top: -30px;
        width: 100%;
        height: 44px;
        position: relative;
        border-bottom: 1px solid #eee;
        background: #fff;
    }

    .contain {
        width: 1000px;
        height: 100%;
        background: #fff;
        margin: 0 auto;
    }

    /*路径导航-begin-*/
    .breadcrumb {
        background-color: #fff;
        position: relative;
        padding: 10px 0;
        font-size: 12px;
    }

    .breadcrumb li {
        float: left;
        height: 20px;
        margin-right: 8px;
        line-height: 20px;
    }

    .breadcrumb .breadcrumb-pre a {
        float: left;
        color: #999;
    }

    .breadcrumb > li + li:before {
        padding: 0;
        content: "";
    }

    /*路径导航-end-*/
    /*路径导航盒子-end-*/

    /*日记-begin*/
    .diary_tab {
        width: 100%;
        height: 38px;

        padding: 0;
        padding-top: 10px;

        list-style: none;
        margin-bottom: 0;
    }

    /*写日记-title-*/
    .diary_tab li {
        color: #333;
        float: left;
        font-size: 18px;
        margin-top: -1px;
        text-align: center;
        width: 130px;

    }

    .diary_tab .on {
        border-bottom: 2px solid #01af63;
        height: 38px;
    }

    .diary_detail_tab li span {
        cursor: pointer;
        display: inline-block;
        height: 38px;
    }

    /*写日记-title-end-*/

    /*日记主体-begin-*/
    .zxgl_write .write_diary_hd {
        /* height: 230px; */
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        overflow: hidden;
    }

    /*日记编辑框-begin-*/
    .write_diary .diary_editor {
        /*float: left;*/
        width: 520px;
    }

    .zxgl_write .diary_textarea {
        position: relative;
        margin-bottom: 40px;
    }

    .zxgl_write .write_diary .diary_editor textarea {
        border: 1px solid #ccc;
        width: 498px;
        padding: 5px;
        height: 358px;
        resize: none;
        padding-bottom: 24px;
    }

    /*日记编辑框-end-*/

    /*日记标签选择-begin-*/
    .zxgl_write .write_diary .write_info {
        background: #fff;

        float: right;
        width: 453px;
        margin-top: -2px;
    }

    .zxgl_write .write_info_item {
        margin-bottom: 12px;
    }

    /*标题-begin-*/
    .zxgl_write .write_info_item .info_hd {
        font-size: 16px;
        color: #333;
        margin-bottom: 15px;
    }

    /*字体-begin-*/
    address, cite, dfn, em, var {
        font-style: normal;
    }

    .zxgl_write .write_info_item .info_hd em {
        color: #999;
        font-size: 12px;
        margin-left: 15px;
    }

    /*字体-end-*/

    /*标签-begin-*/

    .zxgl_write .stage_hd ul {
        margin: 0;
        padding: 0;
        list-style: none;
        /*margin-bottom: 0;*/

    }

    .zxgl_write .stage_hd li {
        float: left;

    }

    .zxgl_write .stage_hd li {
        margin: 0;
        margin-right: 10px;

        padding: 0;

        display: list-item;
        text-align: -webkit-match-parent;
        font: 12px/1.5 "Source Han Sans SC", "HanHei SC", "PingFang SC", "Helvetica Neue", Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;

    }

    .zxgl_write .stage_hd li a {
        width: 44px;
        height: 44px;
        background-position: -50px -180px;
        display: inline-block;
        vertical-align: middle;
        line-height: 44px;
        text-align: center;
        color: #666;
    }

    .stage_hd li a, .stage_hd li a {

        background: url('../../assets/zxgl_global.png') no-repeat;
        /*background: #00AF63;*/
        overflow: hidden;

    }

    .zxgl_write .stage_hd li.on a {

        background-position: 0 -180px;
        color: #fff;

    }

    .zxgl_write .stage_hd li a span {
        height: 44px;
        width: 34px;
        display: inline-block;
        text-align: center;

    }

    .zxgl_write .stage_hd li i {
        width: 11px;
        height: 1px;
        background: #f1f1f1;
        display: inline-block;
        font-style: italic;
        margin: 0;
        padding: 0;
    }

    /*清除浮动*/
    .clearfix:after {
        display: block;
        clear: both;
        content: "\0020";
        visibility: hidden;
        height: 0;
    }

    /*选择标签*/
    .zxgl_write .write_info_item .info_hd.mt30 {
        margin-top: 30px;
    }

    /*矩形标签*/
    .zxgl_write .pick_stage .stage_keys a {
        display: block;
        width: 63px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #cbcbcb;
        float: left;
        text-align: center;
        color: #333;
        margin-right: 7px;
        margin-bottom: 10px;
    }

    .zxgl_write .pick_stage .stage_keys a.keyon {
        border-color: #01af63;
        color: #01af63;
    }

    /*清除浮动*/
    .clear:after {
        display: block;
        clear: both;
        content: "\0020";
        visibility: hidden;
        height: 0;
    }

    .zxgl_write .write_info a.more {
        display: block;
        text-align: center;
        color: #999;
    }

    /*选择日期-begin-*/

    .zxgl_write .write_info_item .info_hd.mb20 {
        margin-bottom: 20px;
    }

    .zxgl_write .info_bd.border_line {
        border-top: 1px solid #eee;
        padding-top: 20px;
    }

    .zxgl_write .text_date {
        display: inline-block;
        width: 186px;
        height: 34px;
        position: relative;
        float: left;

        /*--日期下边距--*/
        margin-bottom: 30px;
    }

    .zxgl_write .text_date input {
        border: 1px solid #ccc;
        padding: 7px 10px;
        color: #999;
        width: 180px;
    }

    .zxgl_write .text_date input[type="date"]::-webkit-inner-spin-button {
        visibility: hidden;
    }

    .zxgl_write .text_date input[type="date"]::-webkit-calendar-picker-indicator {
        width: 25px;
        height: 60%;
        color: #1abc9c
    }

    .zxgl_write .text_date input[type="date"] {
        height: 40px;
        /*margin-left: 80px;*/
        outline: none;
    }

    .text_date_ico {
        background: url('../../assets/zxgl_global.png') no-repeat;
        /*background: #00AF63;*/
        overflow: hidden;

    }

    .zxgl_write .text_date .text_date_ico {
        display: inline-block;
        width: 18px;
        height: 19px;
        background-position: -75px -39px;
        position: absolute;
        right: 11px;
        top: 7px;
    }

    /*选择日期-end-*/

    /*上传图片-begin-*/
    /*.zxgl_write .upload_pic {*/
        /*!*--图片组下边距--*!*/
        /*margin-bottom: 100px;*/

    /*}*/
    .zxgl_write .upload_pic .upload_hd {
        color: #333;
        font-size: 16px;
    }

    .zxgl_write .upload_pic .upload_hd span {
        color: #999;
        font-size: 12px;
        margin-left: 12px;
    }

    .zxgl_write .upload_bd {
        padding-top: 20px;
        border-width: 1px 0;
        border-style: solid;
        border-color: #eee;
        margin-top: 15px;

    }

    .zxgl_write .upload_bd ul {

        padding: 0;
    }

    .zxgl_write .upload_bd li {
        width: 100px;
        height: 100px;
        float: left;
        list-style: none;
        margin-right: 18px;
        position: relative;
        margin-bottom: 40px;

    }

    /*li 图片背景*/
    /*.zxgl_write .upload_bd li {*/

        /*background: #ec3901;*/
    /*}*/

    .zxgl_write .upload_lnk {
        display: block;
        width: 98px;
        height: 98px;
        font-size: 0;
        border: 1px solid #ccc;
        background: url('../../assets/upload_bg.png') no-repeat;
        position: relative;

    }

    .zxgl_write .upload_bd input[type="file"] {
        display: block;
        width: 98px;
        height: 98px;
        opacity: 0;
        position: relative;
        top: -98px;
        z-index: -1;

    }

    .zxgl_write .upload_bd li img {
        width: 100px;
        height: 100px;
    }

    .zxgl_write .upload_bd .delete {
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        color: #fff;
        background: rgba(0, 0, 0, 0.7);
        line-height: 20px;
        text-align: center;
        border-radius: 50%;
        top: 3px;
        right: 3px;
        cursor: pointer;
    }

    /*上传图片-end-*/

    /*发布按钮-begin-*/
    .zxgl_write .write_btn {
        margin-top: 34px;
    }

    .zxgl_write .post_btn {
        display: inline-block;
        height: 42px;
        line-height: 42px;
        color: #fff;
        font-size: 14px;
        padding: 0 30px;
        background-color: #00b34a;
    }

    .zxgl_write .disbtn, .zxgl_write .disbtn:hover {
        /*-webkit-pointer-events: none;*/
        /*-moz-pointer-events: none;*/
        /*-o-pointer-events: none;*/
        pointer-events: none;
        background-color: #999;
    }

    /*发布按钮-end-*/


</style>