<template>
    <div id="barcon">
        <span class='btn btn-default page_1' @click="go_page(index)" v-for="(p,index) in pageNum" v-text="p"
              :class="{'active':index===isActive}"></span>
    </div>
</template>

<script>
    export default {
        name: "GoPage",
        data: function () {
            return {
                page: '',
                pageNum: [1, 2, 3],
                isActive: -1
            }
        },
        mounted: function () {
            if (this.$route.path.slice(1, -1) === 'companyList') {
                this.$data.pageNum = [1, 2, 3, 4];
                console.log('companyList')
            } else if (this.$route.path.slice(1, -1) === 'caseList') {
                this.$data.pageNum = [1, 2, 3, 4, 5];
                console.log('caseList')
            }

        },
        methods: {
            go_page: function (val) {
                this.$data.isActive = val;
            }
        }
    }
</script>

<style scoped>
    #barcon {
        text-align: center;
        padding: 15px;
    }

    .active {
        background: #0CB469;
        color: white;
    }

    #barcon .page_1 {
        margin: 5px;
    }

    @media (max-width: 993px) {
        #barcon {
            margin-left: 25%;
        }
    }

    @media (max-width: 768px) {
        #barcon {
            margin-left: 20%;
        }
    }

    @media (max-width: 610px) {
        #barcon {
            margin-left: 8%;
        }

        .page_1 {
            width: 15%;
        }
    }

    @media (max-width: 437px) {
        #barcon {
            margin-left: 8%;
        }

        .page_1 {
            width: 10%;
        }
    }
</style>
