import Vue from 'vue';
// 全局引入vuetouter
import VueRouter from 'vue-router';
// 定义路由组件
import Tabbar from '../views/Tabbar';
//列表
import List from '../views/Tabbar/List';
//购物车
import Cart from '../views/Cart';
// import axios from 'axios';
// 安装路由
Vue.use(VueRouter);

// 懒加载路由
const Detail = () => import('../views/Tabbar/Detail');
// 嵌套组件
const Home = () => import('../views/Tabbar/Home');
// 侧边页
const Cebian = () => import('../views/Tabbar/Cebian');
// 登陆注册
const Sign = () => import('../views/Tabbar/Sign');
// 同步加载

const routes = [{
    name: 'tabbar',
    path: '/tabbar',
    component: Tabbar,
    // 嵌套路由，先进底部选项卡，再去找首页
    children: [{
        name: 'home',
        path: 'home',
        component: Home,
      }, {
        name: 'cebian',
        path: 'cebian',
        component: Cebian,
      },
      {
        name: 'sign',
        path: 'sign',
        component: Sign,
      },
      {
        name: 'list',
        path: 'list',
        component: List,
      },
      {
        name: 'detail',
        path: '/detail/:listid',
        component: Detail,
        // 我往detail组建里面传入了props
        props: {
          default: true,
          sidebar: false
        }
      },
    ],
  },
  {
    name: 'cart',
    path: '/cart/:listid',
    component: Cart,
  },
  // 重定向
  {
    path: '/',
    // 别名
    alias: '/index.html',
    redirect: () => {
      // 我要跳进/123获取路由的一些详情信息
      // console.log(to)
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
      return '/tabbar/home'
    }
  }
]

const router = new VueRouter({
  // 你默认是哈希模式，改为H5 history模式
  mode: 'history',
  routes
});

// 全局前置守卫

// 要进入路由，都要先通过这个守卫

router.beforeEach(async (to, from, next) => {
  function getCookie(key) {//获取cookie值
    var cookies = document.cookie;
    var arr = cookies.split('; ');
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (key == arr2[0]) {
        return arr2[1];
      }
    }
  }
  // console.log(getCookie('username'));
  let islogin = getCookie('username') ? true : false;
  if ((to.path === '/sign' || to.path === '/tabbar/home' || to.name === 'detail') && !islogin) {
    router.push({ name: 'sign' })
  } else {
    next();
  }
})
export default router;
