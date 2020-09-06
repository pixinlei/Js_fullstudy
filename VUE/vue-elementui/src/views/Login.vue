<template>
  <div class="login">
    <h2>旅梦后台管理系统</h2>
    <div class="login-wrapper">
      <p class="input">
        <el-input v-model="user" placeholder="请输入账号"></el-input>
      </p>
      <p class="input">
        <el-input placeholder="请输入密码" v-model="passWord" show-password></el-input>
      </p>
      <p class="btn">
        <el-button type="primary" round @click="login">登录</el-button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      passWord: "",
    };
  },
  methods: {
    login() {
      // if (this.user === "admin" && this.passWord === '123456') {
      //   console.log("登陆成功");
      // }else {
      //   console.log('登陆失败');
      // }

      // if(!this.user || !this.passWord) {
      //   this.$message.error('账号或密码不能为空');
      // }else if (this.user === "admin" && this.passWord === '123456') {
      //   this.$message.success('登陆成功');

      //   //路由跳转
      //   this.$router.push({ path:'/home'}) 
      // }else {
      //   this.$message.warning('账号或密码错误');
      // }

      if(!this.user || !this.passWord) {
        this.$message.error('账号或密码不能为空');
      }else {
        localStorage.setItem('name',this.user)
        this.$router.push({
          name:'Home',
          params : {
            user: this.user,
            passWord: this.passWord
          }
        }) 
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aquamarine;
}
.login-wrapper {
  margin-top: 30px;
  width: 250px;
}
.input {
  margin-bottom: 20px;
}
.btn button {
  width: 100%;
}
</style>