<template>
  <div class="top">
    <!-- 列表 -->
    <van-tabs v-model="active" sticky>
      <van-tab v-for="index in 2" :key="index" :title="title[index-1]">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <!-- 卡片 -->
          <van-card v-for="(item,index) in shopList" :key="index" :price="item.newpirce"
            :title="item.title" :thumb="item.src" @click="navTo(item.listid)">
            <div slot="tags">
              <van-tag plain type="danger" style="margin:10px 0">自营</van-tag>
            </div>
          </van-card>
        </van-list>
      </van-tab>

      <van-tab :title="title[2]">
        <van-list v-model="loading" :finished="true" finished-text="没有更多了">
          <!-- 卡片 -->
          <van-card v-for="(item,index) in shopList2" :key="index" :price="item.newpirce"
            :title="item.title" :thumb="item.src" @click="navTo(item.listid)">
            <div slot="tags">
              <van-tag plain type="danger" style="margin:10px 0">自营</van-tag>
            </div>
          </van-card>
        </van-list>
      </van-tab>

      <van-tab :title="title[3]">
        <van-list v-model="loading" :finished="true" finished-text="没有更多了">
          <!-- 卡片 -->
          <van-card v-for="(item,index) in shopList3" :key="index" :price="item.newpirce"
            :title="item.title" :thumb="item.src" @click="navTo(item.listid)">
            <div slot="tags">
              <van-tag plain type="danger" style="margin:10px 0">自营</van-tag>
            </div>
          </van-card>
        </van-list>
      </van-tab>

    </van-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
        title: ['综合排序', '折扣优先', '价格↓', '价格↑'],
        shopList3:[],
        shopList2: [],
        shopList: [],
        List3:[],
        List2: [],
        List: [],
        loading: false,
        finished: false,
      };
    },
    methods: {
      onLoad() {
        this.shopList = [...this.shopList, ...this.List];
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.shopList.length >= 8) {
          this.finished = true;
        }
      },
      // 编程式导航
      navTo(listid) {
        this.$router.push({
          name: "detail",
          params: {
            listid
          }
        });
      },
    },
    async created() {
      //获取数据
      let List = await this.$axios.get(
        "http://localhost:3000/test"
      )
      // console.log(newslists.data);
      this.List = List.data;

      let List2 = await this.$axios.get(
        "http://localhost:3000/test"
      )
      // console.log(List.data.sort((a,b)=>a.newpirce-b.newpirce));
      this.shopList2 = List2.data.sort((a, b) => b.newpirce - a.newpirce);

      let List3 = await this.$axios.get(
        "http://localhost:3000/test"
      )
      // console.log(List.data.sort((a,b)=>a.newpirce-b.newpirce));
      this.shopList3 = List3.data.sort((a, b) => a.newpirce - b.newpirce);
      }
  }

</script>
<style>
  .top {
    position: relative;
    top: 50px;
  } 
</style>
