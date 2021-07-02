<template>
  <div class="flex-center page">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>我的设置</span>
        </div>
      </template>
      <el-form :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="头像">
          <el-input v-model="avator"></el-input>
        </el-form-item>
        <el-form-item label="主题颜色">
          <el-color-picker v-model="color1"></el-color-picker>
          <el-color-picker v-model="color2"></el-color-picker>
          <el-color-picker v-model="color3"></el-color-picker>
          <el-color-picker v-model="color4"></el-color-picker>
          <el-color-picker v-model="color5"></el-color-picker>
          <el-color-picker v-model="color6"></el-color-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">立即创建</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { get } from '../util/axios'
export default {
  setup() {
    let colors = reactive({
        color1: '#5A2BA7',
        color2: '#BE1A92',
        color3: '#F64173',
        color4: '#FF7F57',
        color5: '#FFBD4E',
        color6: '#F9F871'
      })
    let ruleForm = reactive({
      name: '',
      avator: '',
      themeColor: ''
    })
    let rules = reactive({})
    async function submitForm() {
      await get('url', ruleForm)
      await ElMessage.success({
        message: '提交成功',
        type: 'success'
      })
      await initRuleForm()
    }
    function resetForm() {
      initRuleForm()
    }
    function initRuleForm() {
      ruleForm = reactive({
        name: '',
        avator: '',
        themeColor: ''
      })
    }
    function initColors() {
      colors = reactive({
        color1: '#5A2BA7',
        color2: '#BE1A92',
        color3: '#F64173',
        color4: '#FF7F57',
        color5: '#FFBD4E',
        color6: '#F9F871'
      })
    }
    onMounted(() => {
      initRuleForm()
      initColors()
    })
    return {
      ...toRefs(ruleForm),
      rules,
      submitForm,
      resetForm,
      ...toRefs(colors)
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  width: 100vw;
  height: 100vh;
}
.box-card {
  width: 80%;
  height: auto;
  margin-top: -20%;
}
</style>