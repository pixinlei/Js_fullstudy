<template>
  <div id="app">
    <!-- header 组件 -->
    <VHeader :seller="seller"></VHeader>
    <router-view/>
  </div>
</template>

<script>
import VHeader from '@/components/v-header/v-header'
import  { getSeller } from '@/api'
import qs from 'query-string'

export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id,
        seller: {}
      }
    }
  },
  components: {
    VHeader
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller({
        id:this.seller.id
      }).then((seller) => {
        this.seller = Object.assign({},this.seller,seller)
        // console.log(this.seller);
        // console.log(seller);
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
