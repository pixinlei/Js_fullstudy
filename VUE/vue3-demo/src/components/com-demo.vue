<template>
  <div>
    <!-- fragment -->
    <ul>
      <FragmentDemo :data="[5,3,1,6,9,4,2,8]" />
    </ul>
    <hr/>
    <teleportdemo />
    <hr/>
    <!-- <AsyncComponent /> -->
    <Suspense>
        <template #default>
          <AsyncComponent :timeout="3000" />
        </template>
        <template #fallback>
          <loading />
        </template>
    </Suspense>
  </div>
</template>

<script>
import teleportdemo from './teleport.vue'
import FragmentDemo from './fragment.vue'
import AsyncComponent from './suspense.vue'
import loading from './loading.vue'
export default {
  components: {
    FragmentDemo,
    teleportdemo,
    AsyncComponent,
    loading
  }
}
</script>

<style>

</style>