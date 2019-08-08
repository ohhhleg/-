import Vue from 'vue';
// 第三方组件

import {
  //图标
  Icon,
  //标签
  //标签栏
  Tab, 
  Tabs,
  Tabbar, 
  TabbarItem, 
  //轮播
  Swipe, 
  SwipeItem,
  //图片懒加载
  Lazyload, 
  //卡片
  Card,
  List, 
  //图片
  Image,
  //图片预览
  ImagePreview, 
  //单元格
  Cell, 
  CellGroup, 
  //输入框
  Field,
  //标签
  Tag ,
  //商品导航
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  //商品规格
  Sku,
  //复选框
  Checkbox, 
  CheckboxGroup,
  //提交
  SubmitBar ,
  //提示
  Toast,
} from 'vant';

export default () => {
  Vue.use(Icon),
  Vue.use(Tabbar).use(TabbarItem);
  Vue.use(Swipe).use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Card);
  Vue.use(List);
  Vue.use(Image);
  Vue.use(ImagePreview);
  Vue.use(Cell).use(CellGroup);
  Vue.use(Field);
  Vue.use(Tab).use(Tabs);
  Vue.use(Tag);
  Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
  Vue.use(Sku);
  Vue.use(Checkbox).use(CheckboxGroup);
  Vue.use(SubmitBar);
  Vue.use(Toast);
};
