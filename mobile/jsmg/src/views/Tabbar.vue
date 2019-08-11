<template>
  <div>
    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 标签栏 -->
    <van-tabbar :route="true" v-model="active">
      <!-- 声明式导航 :url="t.url" -->
      <van-tabbar-item @click="navTo(t.url)" v-for="(t,index) in tabbarsItems" :key="index"
        :icon="t.icon"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 记录你所在第几项
        active: 0,
        tabbarsItems: [{
            url: "cebian",
            icon: "wap-nav"
          },
          {
            url: "home",
            icon: "http://www.dunkhome.com/images/icon_app_get.png"
          },
          {
            url: "sign",
            icon: "user-o"
          }
        ]
      };
    },
    methods: {
      navTo(name) {
        // 编程式导航
        this.$router.push({
          name
        });
      },  
    }
  };

</script>
<style>
  .van-tabbar--fixed {
    top: 0;
  }

  .van-image {
    margin-left: -10px;
  }

  .van-tabbar-item__icon img {
    width: 40px;
  }

</style>
