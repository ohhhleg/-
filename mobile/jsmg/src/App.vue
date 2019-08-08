<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style>
*{
  padding: 0;
  margin: 0;
}
body{
      background-color: #F6F6F6;
}
h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    font-weight: bold;
}
.clearfix:before,
.clearfix:after {
    /*清楚浮动*/
    content: "";
    display: table;
}

.clearfix:after {
    clear: both;
}

.clearfix {
    *zoom: 1;
    /*IE/7/6*/
}

</style>
