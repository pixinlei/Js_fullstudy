<template>
  <div class="home">
    这里是home ---- {{count}}
    <br/>
    <el-button type="primary" @click="add">主要按钮</el-button>
    <van-button type="primary" @click="go">三秒后跳转到text</van-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
// import {createNamespacedHelpers, useStore} from 'vuex'
// const {mapState, mapActions} = createNamespacedHelpers('text')
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const router = useRouter()
    const store = useStore()
    let count = computed(() => store.state.text.count)
    function add() {
      store.commit('text/add', 1)
    }
    function go() {
      setTimeout(() => {
        router.push('/text')
      }, 3000)
    }
    return {
      go,
      count,
      add
    }
  }
})
</script>
