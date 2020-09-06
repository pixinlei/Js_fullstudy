<template>
  <div class="watch">
    <span>{{temp}}度</span>   |       
    <span>{{suggest}}</span>  |
    <button @click="add">add</button> |
    <button @click="reduce">reduce</button>
  </div>
</template>

<script>
// mixins
let addLog = {
  updated () {
    console.log('数据发生变化了，此时温度为' + this.temp);
  }
}

let ext = {
  created () {
    console.log('我是被扩展出来的created');
  },
  methods: {
    add() {
      console.log('我是被扩展出来的add');
    }
  }
}
export default {
  data () {
    return {
      temp: 25,
      suggest: '穿短袖'
    }
  },
  mixins: [addLog],
  extends: ext,
  methods: {
    // add () {
    //   this.temp += 5
    // },
    reduce () {
      this.temp -= 5
    }    
  },
  watch: {
    temp: function (newVal, oldVal) {
      console.log(newVal,oldVal);
      if(newVal < 15 && newVal >= 0) {
        this.suggest = '穿夹克'
      }else if (newVal < 0) {
        this.suggest = '穿羽绒服'
      }else if (newVal >= 15) {
        this.suggest = '穿短袖'
      }
    }
  }
}
</script>

<style>

</style>