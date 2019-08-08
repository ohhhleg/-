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
        checkedGoods: ['1',],
        goods: [{
          id: '1',
          title: '进口香蕉',
          price: 200,
          num: 1,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
        }, ]
      };
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
