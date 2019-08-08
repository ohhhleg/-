<template>
  <div class="top">
    <van-cell-group>
      <van-cell
      style="padding-left: 40px;" 
       v-for="(y, index) in yeshu" 
       :key="index"
       :icon="y.icon"
       :title="y.title" 
       is-link 
       @click="navTo(y.url)" />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data(){
    return {
      yeshu:[{
        icon:"wap-home",
        title:"首页",
        url:"home"
      },{
        icon:"comment-o",
        title:"资讯",
        url:""
      },{
        icon:"shop-o",
        title:"扫货",
        url:"list"
      },{
        icon:"cart-o",
        title:"购物车",
        url:"cart"
      }]
    }
  },
   methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
}
</script>
<style>
.top {
  position: relative;
  top: 50px;
}
</style>
