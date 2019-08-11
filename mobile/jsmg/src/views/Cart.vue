<template>
  <div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox class="card-goods__item" v-for="item in goods" :key="item.id" :name="item.id">
        <van-card :title="item.title" :desc="item.desc" :num="item.num"
          :price="formatPrice(item.price)" :thumb="item.thumb" />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar :price="totalPrice" :disabled="!checkedGoods.length"
      :button-text="submitBarText" @submit="onSubmit" />
  </div>
</template>

<script>
  export default {
    // components: {
    //   [Card.name]: Card,
    //   [Checkbox.name]: Checkbox,
    //   [SubmitBar.name]: SubmitBar,
    //   [CheckboxGroup.name]: CheckboxGroup
    // },
  
    data() {
      return {
        listid:this.$route.params.listid,
        checkedGoods: ['1',],
        goods: [{
          id: '1',
          title: 'Air Jordan 13 Lakers aj13湖人 白紫 篮球鞋 414571-105（2019.7.20发售）',
          price: 200000,
          num: 1,
          thumb: 'http://images.dunkhome.com/product/image/10028/medium_JORDAN-ECLIPSE-414571_105_A_PREM__1_.jpg'
        }, ]
      };
    },
     async created() {
      //获取数据
      let srcs = await this.$axios.get(
        "http://localhost:3000/test"
      );
      // console.log(srcs.data.filter(item => item.listid==this.listid));
      this.srcs=srcs.data.filter(item => item.listid==this.listid);
      console.log(this.srcs);
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -
          1 ? item.price : 0), 0);
      }
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
         this.$toast('点击结算');
      }
    }
  };

</script>
<style>
  .card-goods {
    padding: 10px 0;
    background-color: #fff;
  }

  .card-goods__item {
    position: relative;
    background-color: #fafafa;
  }

  .van-checkbox__label {
    width: 100%;
    height: auto;
    padding: 0 10px 0 15px;
    box-sizing: border-box;
  }

  .van-checkbox__icon {
    top: 50%;
    left: 10px;
    z-index: 1;
    position: absolute;
    margin-top: -10px;
  }

  .van-card__price {
    color: #f44;
  }

</style>
