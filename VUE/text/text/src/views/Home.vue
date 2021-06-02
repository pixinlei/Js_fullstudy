<template>
  <div class="home">
    这里是home页面
    ------------------
    <component :is="currentPage"></component>
    <button @click="changePage(item)" v-for="item in list" :key="item">{{item}}组件</button>
  </div>
</template>

<script>
  import Child1 from "../components/Child1";
  import Child2 from "../components/Child2";
export default {
  components: {
    Child1,
    Child2
  },
  data() {
    return {
      currentPage: 'Child1',
      list: [0, 1]
    }
  },
  methods: {
    changePage(item) {
      if(item === 0) return  this.currentPage = 'Child1'
      if(item === 1) return  this.currentPage = 'Child2'
      return 
    }
  },
}
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
