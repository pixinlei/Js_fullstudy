<template>
  <div>
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <!-- <Star :rating={stars:[1,1,1,1,0],score:8.5}></Star> -->
    <!-- <Movie :movie="{image:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1,1,1,0,0], score:6.5}}"></Movie> -->
    <MovieSection :section="test"></MovieSection>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Star from '@/components/Star.vue'
import Movie from '@/components/Movie.vue'
import MovieSection from '@/components/MovieSection.vue'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
    'v-header': Header,
    Star,
    Movie,
    MovieSection
  },
  setup() {
    const test = ref({
      movies:[
        {image:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1,1,1,0,0], score:6.5}},
        {image:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1,1,1,0,0], score:6.5}},
        {image:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3855684193,1508653948&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1,1,1,0,0], score:6.5}}
      ]
    })
    return {
      test
    }
  }
}
</script>

<style>

</style>