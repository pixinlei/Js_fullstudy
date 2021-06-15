<template>
  <div>home---{{a}}</div>
  <button @click="showDlg">显示弹窗</button>
</template>

<script>
import { toast, show, comform } from '../util/dialog'
import { ref } from 'vue'
export default {
  setup() {
    let a = ref('0')
    function showDlg() {
      show()
    }
    toast({
      title: '我的标题',
      message: '我的内容'
    })
    comform(() => {
      console.log(1)
    })
    return {
      a,
      showDlg
    }
  }
}
</script>

<style>
</style>