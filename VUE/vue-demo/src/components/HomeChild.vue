<template>
  <div class="home">
    <p>首页的子主页</p>
    <hr />
    <h3>{{count}}</h3>
    <p>{{$store.state.a.count}}</p>
    <div class="btn">
      <button @click="addAction">+</button>
      <button @click="reduce">-</button>
    </div>
  </div>
</template>

<script>
import store from '@/vuex/store.js'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      msg: 'helloworld'
    }
  },
  store,
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({
  //   count: state => state.count
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  // methods: {
  //   add () {
  //     // this.$store.state.count++
  //     this.$store.commit('add',10)
  //   },
  //   reduce () {
  //     this.$store.commit('reduce')
  //     // this.$store.state.count--
  //   }
  // }
  // methods: mapMutations([
  //   'add','reduce'
  // ])
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>
</style>