<template>
  <div>
    <div class="confirm-modal">
      <button @click="isOpen = true">打开</button>

      <Teleport to="#foot-container">
        <div v-if="isOpen">
          <p>底部信息嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻寻寻寻寻</p>
          <button @click="isOpen = false">取消</button>
        </div>
      </Teleport>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}
</script>

<style>

</style>