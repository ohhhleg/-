<template>
  <div class="top">
    <van-tabs type="card" v-model="active" color="#03abea">
      <van-tab title="登录">
        <van-field v-model="username" required clearable label="用户名" right-icon="question-o"
          placeholder="请输入用户名" :error-message="emessage" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        <button class="bt" @click="DL">登录</button>
      </van-tab>
      <van-tab title="注册">
        <van-field v-model="username2" required clearable label="用户名" right-icon="question-o"
          placeholder="请输入用户名" :error-message="emessage" />
        <van-field v-model="password2" type="password" label="密码" placeholder="请输入密码" required />
        <button class="bt" @click="ZC">注册</button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 2,
        username: "",
        username2: "",
        password: "",
        password2: "",
        emessage: "",
        telok:false,
      };
    },
    // async created() {

    // },
    methods: {
      async DL() {
        let userinf = await this.$axios.post("http://localhost:3000/login", {
          name: this.username,
          psw: this.password
        });
        // console.log(this.username);
        // console.log(this.password);
        // console.log(userinf.data[0].name);
        if (userinf.data[0].name==this.username) {
          this.$toast('登录成功');
         document.cookie = "username="+this.username+";path=/";
           this.$router.push({
              name: "home",
           });
        } else {
          this.$toast('登录失败');
          this.emessage = '用户名或密码错误'
        }
      },
      async ZC() {
        let userinf = await this.$axios.post("http://localhost:3000/reg", {
          name: this.username2,
          psw: this.password2
        });
        // console.log(userinf.data);
        if (userinf.data==1) {
          this.$toast('注册成功');
        } else {
          this.$toast('注册失败');
          this.emessage = '用户名重复'
        }
      }
    }

  };

</script>
<style>
  .top {
    position: relative;
    top: 50px;
  }

  .bt {
    display: block;
    margin: 10px auto;
    width: 180px;
    line-height: 40px;
  }

</style>
