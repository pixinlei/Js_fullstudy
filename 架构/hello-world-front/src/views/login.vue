<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h1>登录</h1>
      </div>
    </template>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
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
</template>

<script lang="ts">
import { get, post } from '../util/axios'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    let username = ref('')
    let password = ref('')
    let router = useRouter()
    function onSubmit() {
      if (username.value == '') return ElMessage('请输入用户名')
      if (password.value == '') return ElMessage('请输入密码')
      let form = {
        username: username.value,
        password: password.value
      }
      post('users/login', form).then(res => {
        console.log(res)
        if (res.code == '200') {
          window.localStorage.setItem('token', res.data.token)
          router.push({
            path: '/'
          })
        } else {
          ElMessage('用户不存在，登录失败')
        }
      })
    }
    return {
      username,
      password,
      onSubmit
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
</style>