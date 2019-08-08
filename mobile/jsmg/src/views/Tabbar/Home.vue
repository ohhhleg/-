<template name="component-name">
  <div class="top">
    <van-swipe :autoplay="3000" :height="140">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <!-- 最新资讯 -->
    <div class="section-title news-title">
      <a>
        <img src="../../assets/icon_home_news.svg" alt />
      </a>
    </div>
    <div class="news-list">
      <ul>
        <li  v-for="(nl, index) in newslists" :key="index">
          <a href="###">
             <div class="c-main">
            <div class="m-text">
              <h6 v-text="nl.title"></h6>
                <div class="tip-count">
              <span><img src="../../assets/icon_view.svg"><span v-text="nl.zaikan"></span></span>
              <span><img src="../../assets/icon_comment.svg"><span v-text="nl.pinglun"></span></span>
            </div>
            </div>
            <div class="m-image">
              <img :src="nl.src">
            </div>
          </div>
          </a>
        </li>
      </ul>
    </div>

    <!-- 今日扫货 -->
    <div class="section-title products-title">
      <a @click="navTo2()">
        <img src="../../assets/icon_home_products.svg" alt />
      </a>
    </div>

    <div class="main">
      <div class="list-item" v-for="(list, index) in lists" :key="index">
        <a @click="navTo(list.listid)">
          <div class="s-image-box">
            <img :src="list.src" alt />
          </div>
          <h6 v-text="list.title"></h6>
          <div class="prices">
            <span class="price-market" v-text="'￥'+list.newpirce"></span>
            <span class="price-default" v-text="'￥'+list.oldpirce"></span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        images: [
          "http://images.dunkhome.com/pc-banner/image/595/medium______20190713145808.jpg",
          "http://images.dunkhome.com/pc-banner/image/601/medium______20190802093652.jpg",
          "http://images.dunkhome.com/pc-banner/image/594/medium______20190710165818.jpg",
          "http://images.dunkhome.com/pc-banner/image/598/medium______20190723162059.jpg"
        ],
        newslists: [
          // {
          //   src: "",
          //   title: "本周四登场？Nike Air Fear of God 1 全新 “Sail” 配色不要错过了",
          //   zaikan: "1151",
          //   pinglun:"0",
          // }, 
          // {
          //   src:"http://images.dunkhome.com/newsitem/image/57719/app_image_13.png",
          //   title:"抢眼白+黑组合！这双 Nike Air Max 95 有点小好看",
          //   zaikan: "1968",
          //   pinglun:"0",
          // },{
          //   src:"http://images.dunkhome.com/newsitem/image/57715/app_image_12-1ZP5140A0.jpg",
          //   title:"漫画元素+解构设计！全新 Air Force 1 吸睛度爆棚",
          //   zaikan: "4312",
          //   pinglun:"0",
          // },{
          //   src:"http://images.dunkhome.com/newsitem/image/57710/app_image_4.jpg",
          //   title:"今晚4款首发登场！可口可乐 x KITH 联名系列不要错过了",
          //   zaikan: "6819",
          //   pinglun:"23",
          // }
        ],
        lists: [
          // {
          //   src: "http://images.dunkhome.com/product/image/10303/medium_JORDAN-ECLIPSE-CD6579_071_A_PREM__1_.jpg",
          //   title: "Air Jordan 1 AJ1 拆线 黄钩 男子篮球鞋CD6579-071（2019.7.27发售）",
          //   oldpirce: "2899.00",
          //   newpirce: "1592.00",
          //   id: 1,
          // }, {
          //   src: "http://images.dunkhome.com/product/image/10445/medium_O1CN01HqgY6c1y42TeLIBmX___2914266524.jpg",
          //   title: "美国官网直发！Adidas Yeezy Boost 350 V2 “Lundmark” 做旧天使芝麻美洲限定 FU9161",
          //   oldpirce: "3999.00",
          //   newpirce: "2489.00",
          //   id: 2,
          // },
          // {
          //   src: "http://images.dunkhome.com/product/image/10028/medium_JORDAN-ECLIPSE-414571_105_A_PREM__1_.jpg",
          //   title: "Air Jordan 13 Lakers aj13湖人 白紫 篮球鞋 414571-105（2019.7.20发售）",
          //   oldpirce: "1799.00",
          //   newpirce: "1559.00",
          //   id: 3,
          // }, {
          //   src: "http://images.dunkhome.com/product/image/10296/medium_JORDAN-ECLIPSE-CK1197_300_A_PREM__1_.jpg",
          //   title: "NIKE ZOOM KD12 杜兰特12 彩虹蓝粉 篮球鞋 CK1197-300",
          //   oldpirce: "1499.00",
          //   newpirce: "1349.00",
          //   id: 4,
          // },
        ],
      };
    },
    methods: {
      // 编程式导航
      navTo(listid) {
        this.$router.push({
          name: "detail",
          params: {
            listid
          }
        });
      },
      navTo2() {
        this.$router.push({
          name: "list",
        })
      }
    },
    async created(){
      //获取数据
      let newslists = await this.$axios.get(
        "http://localhost:3000/test"
      )
      // console.log(newslists.data);
      this.newslists=newslists.data.slice(0,4);

      let lists = await this.$axios.get(
        "http://localhost:3000/test"
      )
      // console.log(newslists.data);
      this.lists=lists.data.slice(4,8)
    },
    
  };

</script>
<style>
  .news-list li {
    margin: 15px;
  }

  .news-list li a {
    display: block;
    position: relative;
    padding-bottom: 15px;
    border-bottom: 1px solid #ECECEC;
  }

  .news-list li a .c-main .m-text {
    margin-right: 160px;
    min-height: 94px;
  }

  .news-list li a .c-main .m-text h6 {
    font-size: 16px;
    font-weight: normal;
    color: #222222;
    letter-spacing: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 24px;
    height: 48px;
  }
.tip-count {
    font-size:12px;
    line-height:20px;
    margin-top: 20px;
}
  .news-list li a .c-main .m-image {
    width: 150px;
    height: 94px;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
  }

  .news-list li a .c-main .m-image img {
    max-width: 100%;
  }

  .news-list li a .tip-count>span {
    margin-left: 10px;
  }
  .news-list li a .tip-count img {
    height: 8px;
    margin-top: -2px;
    margin-right: 5px;
  }

  .main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 15px;
  }

  .list-item {
    margin-bottom: 15px;
    width: calc(50% - 7.5px);
  }

  .list-item a {
    display: block;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    color: #333;
  }

  .list-item a .s-image-box {
    position: relative;
  }

  .list-item a .s-image-box img {
    width: 100%;
    vertical-align: middle;
  }

  .list-item h6 {
    display: block;
    margin-top: 10px;
    font-weight: normal;
    color: #4a4a4a;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .list-item .prices {
    margin-top: 10px;
  }

  .list-item .prices .price-market {
    font-size: 14px;
    color: #222222;
    font-weight: bold;
  }

  .list-item .prices .price-default {
    font-size: 10px;
    color: #929292;
    text-decoration: line-through;
    margin-left: 5px;
  }

  .top {
    position: relative;
    top: 50px;
  }

  .section-title {
    text-align: center;
    margin: 20px 0;
  }

  .section-title img {
    width: 100px;
  }
</style>
