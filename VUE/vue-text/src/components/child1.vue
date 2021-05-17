<template>
  <div class="page">
    <h1>child1组件</h1>
    <router-link to="/child2">child1到child2页面</router-link>
    <router-view></router-view>
    <div>通过params传递的参数:  {{$route.query.username}}</div>
    <router-link to="/redirect">重定向到home页面</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>