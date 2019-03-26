<template>
  <div class="go-top" id="go_top" v-show="goTopShow" @click="goTop">
    <span class="glyphicon glyphicon-menu-up " aria-hidden="true"></span>
  </div>
</template>

<script>
  export default {
    name: "ReturnTop",
    data() {
      return {
        scrollTop: "",
        goTopShow: false
      };
    },
    watch: {
      scrollTop(val) {
        if (this.scrollTop > 500) {
          this.goTopShow = true;
        } else {
          this.goTopShow = false;
        }
      }
    },
    methods: {
      handleScroll() {
        this.scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        if (this.scrollTop > 500) {
          this.goTopShow = true;
        }
      },
      goTop() {
        let timer = null,
          _that = this;
        cancelAnimationFrame(timer);
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50;
            document.body.scrollTop = document.documentElement.scrollTop =
              _that.scrollTop;
            timer = requestAnimationFrame(fn);
          } else {
            cancelAnimationFrame(timer);
            _that.goTopShow = false;
          }
        });
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
</script>

<style scoped>
  /*-------返回顶部-----------*/
  .go-top {
    width: 45px;
    height: 45px;
    background: white;
    position: fixed;
    right: 0;
    bottom: 100px;
    font-size: 3rem;
    text-align: center;
    line-height: 50px;
    border: solid 1px rgba(203, 203, 203, 0.6);
    cursor: pointer;
    z-index: 200;
  }
</style>
