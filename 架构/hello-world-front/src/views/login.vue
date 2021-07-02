<template>
  <div v-if="!isPc">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h1>登录</h1>
        </div>
      </template>
      <el-form ref="form" label-width="80px">
        <el-form-item label="用户名" placeholder="请输入用户名">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  <div class="phone-login_wrapper" v-else>
    <div class="card-header">
      <h1 style="fontSize:20px;">登录</h1>
    </div>
    <van-cell-group>
      <form>
        <van-field v-model="username" label="用户名" placeholder="请输入用户名" />
        <van-field type="password" v-model="password" label="密码" placeholder="请输入密码" autocomplete />
        <van-row>
          <van-col span="8"></van-col>
          <van-col span="8">
            <el-button type="primary" @click="onSubmit">登录</el-button>
          </van-col>
          <van-col span="8"></van-col>
        </van-row>
      </form>
    </van-cell-group>
  </div>
</template>

<script>
import { get, post } from '../util/axios'
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
export default {
  setup() {
    let isPc = window.sessionStorage.getItem('pc')
    let username = ref('')
    let password = ref('')
    let router = useRouter()

    async function onSubmit() {
      if (username.value == '') return ElMessage('请输入用户名')
      if (password.value == '') return ElMessage('请输入密码')
      let form = {
        username: username.value,
        password: password.value
      }
      await post('users/login', form).then(res => {
        console.log(res, '这里是登录信息')
        if (res.code == '200') {
          window.localStorage.setItem('token', res.data.token)
          window.localStorage.setItem('id', res.data.res[0].id)
          router.push({
            path: '/'
          })
        } else {
          ElMessage('用户不存在，登录失败')
        }
      })
      let id = { id: Number(window.localStorage.getItem('id')) }
    }
    return {
      username,
      password,
      onSubmit,
      isPc
    }
  }
}
</script>

<style scoped lang="scss">
.box-card {
  width: 600px;
  height: 400px;
  position: relative;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%, -50%);
}
.card-header {
  display: flex;
  justify-content: center;
}
.phone-login_wrapper {
  width: 100vw;
  height: 200px;
  left: 50vw;
  top: 50vh;
  position: relative;
  transform: translate(-50%, -50%);
  // background: pink;
}
</style>