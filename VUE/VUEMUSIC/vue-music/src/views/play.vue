<template>
  <div class="page">
    <audio ref="audio" muted></audio> 
    <div class="musicname"><van-icon style="right:25vw" name="arrow-left" @click="back" />{{musicname}}</div>
    <div class="singername">{{singername}}</div>
    <div class="roundImg">
      <div class="myimg"><img :src="img" alt=""></div>
    </div>
    <div class="play">
    <i @click="before" class="iconfont icon-zuo"></i>
    <i @click="change" class="iconfont icon-zantingtingzhi"></i>
    <i @click="next" class="iconfont icon-right-circle"></i>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { mapGetters } from 'vuex'
import { Toast } from 'vant';

export default {
  data() {
    return {
      url: "",
      img: '',
      musicname:'',
      singername: '',
      // list: [],
      params: {},
      list: []
    };
  },
  methods: {
    before() {
      console.log("left");
      let that = this
      console.log(that.getList);
      for(let i=0;i<=that.getList.length-1;i++){
        if(i>=1) {
          if(that.getList[i].id  == that.params.id) {
            console.log(that.params);
            that.params = {
              id: that.getList[i-1].id + ''
            }
            that.musicname = that.getList[i-1].name
            console.log(that.params);
            console.log(1,that.url);
            that.musicUrl().then((res) => {
              console.log(res);
              that.url = res.data[0].url;
              // that.img = that.$route.query.img
              // that.singername = that.$route.query.singername
              // that.musicname = that.$route.query.musicname
              that.$refs.audio.src = that.url;

              console.log(2,that.$refs.audio.src);
              this.$refs.audio.pause()
              this.$refs.audio.play()
              // console.log(that.url);
            })
            // that.MusicDetail().then((res) => {
            //   that.list = res
            //   console.log(res);
            // })
            break
          }
        } else {
          Toast('没有上一首了')
        }
      }
    },
    next() {
      console.log("next");
      let that = this
      console.log(that.getList);
      for(let i=0;i<=that.getList.length-1;i++){
        if(i<=that.getList.length-2) {
          if(that.getList[i].id  == that.params.id) {
            console.log(that.params);
            that.params = {
              id: that.getList[i+1].id + ''
            }
            that.musicname = that.getList[i+1].name
            console.log(that.params);
            console.log(1,that.url);
            that.musicUrl().then((res) => {
              console.log(res);
              that.url = res.data[0].url;
              // that.img = that.$route.query.img
              // that.singername = that.$route.query.singername
              // that.musicname = that.$route.query.musicname
              that.$refs.audio.src = that.url;

              console.log(2,that.$refs.audio.src);
              this.$refs.audio.pause()
              this.$refs.audio.play()
              // console.log(that.url);
            })
            // that.MusicDetail().then((res) => {
            //   that.list = res
            //   console.log(res);
            // })
            break
          }
        } else {
          Toast('没有下一首了')
        }
      }
    },
    // 歌曲名
    // MusicDetail () {
    //   let that = this
    //   return new Promise((resolve, reject) => {
    //     api.singerDetail(that.params).then((res) => {
    //       console.log(res);
    //       resolve(res)
    //     }).catch((error) => {
    //       console.log(error);
    //       reject(error)
    //     }) 
    //   })
    // },
    change(event) {
      // console.log(event);
      if(event.target.className === "iconfont icon-bofang1") {
        event.target.className = "iconfont icon-zantingtingzhi"
        this.$refs.audio.play()
        console.log(1);

      } else {
        event.target.className = "iconfont icon-bofang1"
        console.log(1);
        this.$refs.audio.pause()
      } 
      
    },
    back() {
      this.$router.go(-1)
    },
    musicUrl() {
      let that = this;
      return new Promise((resolve, reject) => {
        // console.log(that.$route.query.id);
        api
          .musicUrl(that.params)
          .then((res) => {
            // console.log(res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  created() {
    // console.log(123);
    let that = this
    that.params = {
      id: that.$route.query.id,
    };
    this.musicUrl().then((res) => {
      // console.log(res);
      this.url = res.data[0].url;
      this.img = this.$route.query.img
      this.singername = this.$route.query.singername
      this.musicname = this.$route.query.musicname
      // this.list = this.$route.query.list
      // console.log(this.list);
      // console.log();
      this.$refs.audio.src = this.url;
      console.log(this.$refs.audio);
    });
  },
  mounted() {
    this.$refs.audio.controls = "true";
    this.$refs.audio.autoplay = "autoplay";
  },
  computed: {
    // ...mapState(['list']),
    ...mapGetters(['getList'])
  },
  // watch: {
  //   params(newVal) {

  //   }
  // }
};
</script>

<style lang="stylus" scoped>
i {
  font-size 40px
}
.play {
  position absolute
  bottom 10px
  width 100px
  height 60px  
  left 150px
}
.myimg {
  display flex
  justify-content center
  align-items center
}
.singername {
  display flex
  justify-content center
  align-items center
  margin-top 20px
  font-size 15px
}
.musicname {
  margin-top 10px
  display flex
  justify-content center
  align-items center
  font-size 20px
}
audio {
  display: none;
}
img {
  width 100%
  height 100%
  border-radius 50%
}
.roundImg {
  width: 250px;
  height: 250px;
  position relative
  z-index: 1;
  top 50px
  left 50px
  background-size: contain;
  -webkit-animation: round_animate 5s linear infinite;
  animation: round_animate 5s linear infinite;
}

@keyframes round_animate {
  to {
    transform: rotate(1turn);
  }
}
</style>