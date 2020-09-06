<template>
  <div class="detail">
    <h1>Computed 计算属性</h1>

    <div class="price">
      {{totalPrice}}元
    </div>

    <div class="news">
    <ul>
      <li v-for="(item, index) in reverseNews" :key="index">
        {{ item.title }}-------{{item.date}}
      </li>
    </ul>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: 100,
      num: 4,
      news: [
        {title:'dddddddddddd', date:'2020/08/24'},
        {title:'cccccccccccc', date:'2020/08/25'},
        {title:'bbbbbbbbbbbb', date:'2020/08/26'},
        {title:'aaaaaaaaaaaa', date:'2020/08/27'},
      ]
    }
  },
  computed: {
    totalPrice: function () {
      return this.price * this.num
    },
    revese: function () {
      let news = this.news
      let i = 0,
          j= news.length - 1
      while(j>= i) {
        let temp = news[j]
        news[j] = news[i]
        news[i] = temp
        i++
        j--
      }
      return news
    },

    reverseNews: function () {
      let news = this.news
      return news.reverse()
    }
  }
}
</script>

<style>

</style>