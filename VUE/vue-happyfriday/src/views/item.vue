<template>
  <div class="page">
    <img class="next" :src="next" alt @click="nextquestion" />
    <img class="bgcimg" :src="bgcimg" alt />
    <img class="blackboard" :src="blackboard" alt />
    <img class="WechatIMG2" :src="WechatIMG2" alt />
    <div class="item" v-for="(item, index) in question" :key="index">
      <span v-if="item.isShow" class="title">{{item.timu}}</span>
      <div v-if="item.isShow" class="item-title">{{item.title}}</div>
      <ul v-for="(ans, index) in item.ans" :key="index">
        <li @click="selectAns(index)" v-if="item.isShow" ref="decChange">{{ans}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import bgcimg from "@/assets/images/1-1.jpg";
import WechatIMG2 from "@/assets/images/WechatIMG2.png";
import blackboard from "@/assets/images/2-1.png";
import next from "@/assets/images/2-2.png";
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      temp: '',
      bgcimg: bgcimg,
      WechatIMG2: WechatIMG2,
      blackboard: blackboard,
      next: next,
    };
  },
  computed: {
    ...mapState(['question']),
    ...mapGetters(['myans'])
  },
  methods: {
    // ...mapMutations(['myans']),
    ...mapActions(['myansActions']),
    selectAns(index) {
        //将所有样式重置
        this.$refs.decChange.map(item=>{
        return item.className = ''
      })
      this.$refs.decChange[index].className = "myColor";
      this.temp = index
    },
    nextquestion() {
      if (this.temp === '') {
        alert('你还没有选择答案')
        return
      } else {
          if (this.question[0].isShow && this.myans.length === 0) {
            this.question[0].isShow = false;
            this.question[1].isShow = true;
            this.myansActions(this.temp)
            this.temp = ''
          } else if (this.question[1].isShow && this.myans.length === 1) {
            this.question[1].isShow = false;
            this.question[2].isShow = true;
            this.myansActions(this.temp)
            this.temp = ''
          } else if (this.question[2].isShow && this.myans.length === 2) {
            this.question[2].isShow = false;
            this.question[3].isShow = true;
            this.myansActions(this.temp)
            this.temp = ''
          } else if (this.question[3].isShow && this.myans.length === 3) {
            this.question[3].isShow = false;
            this.question[4].isShow = true;
            this.myansActions(this.temp)
            this.temp = ''
          } else if (this.question[4].isShow && this.myans.length === 4) {
            this.question[4].isShow = false;
            this.myansActions(this.temp)
            this.temp = ''
            this.$router.push({ path: '/score'})
          }else {
            alert('你还没有选择答案')
          }
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
li {
  position: relative;
  z-index: 999;
}

.myColor {
  color: red;
}

.next {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  z-index: 3;
}

.bgcimg {
  width: 100%;
  height: 100%;
}

.WechatIMG2 {
  position: absolute;
  top: 0;
  right: 10%;
  height: 200px;
}

.blackboard {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.item {
  position: absolute;
  left: 30%;
  top: 28%;
  width: 40%;
  height: 40%;
}

.title {
  position: absolute;
  top: -35px;
  right: -33%;
  color: red;
}
</style>