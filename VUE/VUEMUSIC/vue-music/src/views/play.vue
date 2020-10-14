<template>
  <div class="page">
    <audio ref="audio" muted></audio> 
    <div class="musicname"><van-icon style="right:25vw" name="arrow-left" @click="back" />{{musicname}}</div>
    <div class="singername">{{singername}}</div>
    <div class="roundImg">
      <div class="myimg"><img :src="img" alt=""></div>
    </div>
    <div class="play"><i @click="change" class="iconfont icon-bofang1"></i></div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      url: "",
      img: '',
      musicname:'',
      singername: ''
    };
  },
  methods: {
    change(event) {
      // console.log(event);
      if(event.target.className === "iconfont icon-bofang1") {
        event.target.className = "iconfont icon-zantingtingzhi"
        console.log(this.$refs.audio.play());

      } else {
        event.target.className = "iconfont icon-bofang1"
        console.log(this.$refs.audio.pause());
      } 
      
    },
    back() {
      this.$router.go(-1)
    },
    musicUrl() {
      let that = this;
      return new Promise((resolve, reject) => {
        // console.log(that.$route.query.id);
        let params = {
          id: that.$route.query.id,
        };
        api
          .musicUrl(params)
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
    this.musicUrl().then((res) => {
      // console.log(res);
      this.url = res.data[0].url;
      this.img = this.$route.query.img
      this.singername = this.$route.query.singername
      this.musicname = this.$route.query.musicname
      console.log(this.url);
      console.log(this.img);
      console.log(this.singername);
      console.log(this.musicname);
      this.$refs.audio.src = this.url;
      console.log(this.$refs.audio);
    });
  },
  mounted() {
    this.$refs.audio.controls = "true";
    this.$refs.audio.autoplay = "autoplay";
  },
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