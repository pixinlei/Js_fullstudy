<template>
  <div class="home">
    这里是home
    <van-button type="primary" @click="go">三秒后跳转到text</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    
  },
  setup() {
    const router = useRouter()
    function go() {
      setTimeout(() => {
        router.push('/text')
      }, 3000)
    }
    return {
      go
    }
  }
});
</script>
