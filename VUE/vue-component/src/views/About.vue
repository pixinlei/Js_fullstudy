<template>
  <div class="about">
    <User :userName="name" @babyChange="newBaby"></User>
    <animal :aaa="animalBaby"></animal>
  </div>
</template>

<script>
import User from "@/components/User"
import animal from "@/components/animal"
export default {
  data () {
    return {
      name:'皮皮',
      animalBaby:undefined
    }
  },
  components: {
    User,
    animal
  },
  methods: {
    newBaby (e) {
      this.animalBaby = e
    }
  }
}
</script>

<style>
  .about {
    color: red;
  }
</style>