<template>
  <div class="border" style="z-index: 9999" ref="border">
    <div v-show="show" v-swipeleft="clickLeft" v-swiperight="clickRight">
      <div id="left1" v-show="animation1Show"></div>
      <div id="left2" v-show="animation2Show"></div>
      <div id="left3" v-show="animation3Show"></div>
      <div id="left4" v-show="animation4Show"></div>
      <div id="right1" v-show="animation5Show"></div>
      <div id="right2" v-show="animation6Show"></div>
      <div id="right3" v-show="animation7Show"></div>
      <div id="right4" v-show="animation8Show"></div>
      <!--      <a-icon type="left" :style="{ fontSize: '32px', color: '#08c'}"-->
      <!--              style="cursor: pointer;position: absolute;left: 5%;top:50%;"-->
      <!--              @click="clickRight"-->
      <!--      />-->
      <!--      <a-icon type="right" :style="{ fontSize: '32px', color: '#08c'}"-->
      <!--              style="cursor: pointer;position: absolute;right: 5%;top:50%;"-->
      <!--              @click="clickLeft"-->
      <!--      />-->
    </div>
    <div class="process" v-if="!show">
      <a-progress class="p" :percent="percent" :strokeWidth="6" :show-info="false" strokeColor="#1890ff"/>
    </div>
  </div>
</template>
<script>
import lottie from 'lottie-web'
import { imgList } from '@/config/preloadImg'
import { isMobile } from '@/config/operation'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      show: false,
      lock: true,
      count: 0,
      percent: 0,
      leftCurrent: 1,
      rightCurrent: 1,
      animation1: null,
      animation2: null,
      animation3: null,
      animation4: null,
      animation5: null,
      animation6: null,
      animation7: null,
      animation8: null,
      animation1Show: true,
      animation2Show: false,
      animation3Show: false,
      animation4Show: false,
      animation5Show: false,
      animation6Show: false,
      animation7Show: false,
      animation8Show: false,
    }
  },
  beforeCreate() {
    for (let img of imgList) {
      let image = new Image()
      image.src = img
      image.onload = () => {
        this.count++
        this.percent = Math.floor((this.count / imgList.length) * 100)
      }
    }
  },
  watch: {
    count: function(val) {
      if (val === imgList.length) {
        setTimeout(() => {
          this.lock = false
          this.show = true
        }, 600)
      }
    },
  },
  mounted() {
    //全部加载完成
    this.animation1 = lottie.loadAnimation({
      container: document.getElementById('left1'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/left1/data.json',
    })
    this.animation2 = lottie.loadAnimation({
      container: document.getElementById('left2'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/left2/data.json',
    })
    this.animation3 = lottie.loadAnimation({
      container: document.getElementById('left3'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/left3/data.json',
    })
    this.animation4 = lottie.loadAnimation({
      container: document.getElementById('left4'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/left4/data.json',
    })
    this.animation5 = lottie.loadAnimation({
      container: document.getElementById('right1'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/right1/data.json',
    })
    this.animation6 = lottie.loadAnimation({
      container: document.getElementById('right2'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/right2/data.json',
    })
    this.animation7 = lottie.loadAnimation({
      container: document.getElementById('right3'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/right3/data.json',
    })
    this.animation8 = lottie.loadAnimation({
      container: document.getElementById('right4'),// the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: './lottie/right4/data.json',
    })
    this.animation1.setSpeed(2)
    this.animation2.setSpeed(2)
    this.animation3.setSpeed(2)
    this.animation4.setSpeed(2)
    this.animation5.setSpeed(2)
    this.animation6.setSpeed(2)
    this.animation7.setSpeed(2)
    this.animation8.setSpeed(2)

    this.animation1.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation2.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation3.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation4.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation5.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation6.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation7.addEventListener('complete', () => {
      this.lock = false
    })
    this.animation8.addEventListener('complete', () => {
      this.lock = false
    })
    if (isMobile()) {
      let startX, startY
      document.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX
        startY = e.targetTouches[0].pageY
      })
      document.addEventListener('touchmove', function(e) {
        var moveX = e.targetTouches[0].pageX
        var moveY = e.targetTouches[0].pageY
        if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
          e.preventDefault()
        }
      }, { passive: false })
    } else {
      let MouseY = 0, MouseX = 0, changeX = 0, changeY = 0
      let X = 0, Y = 0
      this.$refs['border'].addEventListener('mousedown', (e) => {
        MouseX = e.clientX
        MouseY = e.clientY
      })
      this.$refs['border'].addEventListener('mouseup', (e) => {
        changeX = e.clientX
        changeY = e.clientY
        X = changeX - MouseX
        Y = changeY - MouseY
        if ((((X > 0 && Y < 0) && (X > Math.abs(Y))) || (X > 0 && Y > 0 && X > Y) || (X > 0 && Y == 0))) {
          //右移动
          this.clickLeft()
        }
            // else if (((Y > 0 && X < 0) && (Y > Math.abs(X))) || (Y > 0 && X > 0 && Y > X) || (Y > 0 && X == 0)) {//下移动
            //   console.log('下移动')
        // }
        else if (((X < 0 && Y > 0) && (Math.abs(X) > Y)) || ((X < 0 && Y < 0) && (Math.abs(X) > Math.abs(Y))) || (X < 0 && Y == 0)) {//左移动
          this.clickRight()
        }
        // else if (((Y < 0 && X < 0) && Math.abs(Y) > Math.abs(X)) || ((Y < 0 && X > 0) && (Math.abs(Y) > X)) || (Y < 0 && X == 0)) {//上移动
        //   console.log('上移动')
        // }
        // else if (X == 0 && Y == 0) {
        //   console.log('位置没变')
        // }
      })
    }
  },
  methods: {
    clickLeft() {
      if (this.lock) {
        return
      }
      this.lock = true

      if (this.rightCurrent === 2) {
        this.rightCurrent = 1
        this.leftCurrent = 4
      }
      if (this.rightCurrent === 3) {
        this.rightCurrent = 2
        this.leftCurrent = 3
      }
      if (this.rightCurrent === 4) {
        this.rightCurrent = 3
        this.leftCurrent = 2
      }
      if (this.leftCurrent === 5) {
        this.leftCurrent = 1
      }
      console.log('left', this.leftCurrent, 'right', this.rightCurrent)
      switch (this.leftCurrent) {
        case 1:
          this.animation1Show = true
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.play()
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.leftCurrent = 2
          break
        case 2:
          this.animation1Show = false
          this.animation2Show = true
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.play()
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.leftCurrent = 3
          break
        case 3:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = true
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.play()
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.leftCurrent = 4
          break
        case 4:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = true
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.play()
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.leftCurrent = 5
          break
        default:
          break
      }
    },
    clickRight() {
      if (this.lock) {
        return
      }
      this.lock = true
      if (this.leftCurrent === 2) {
        this.leftCurrent = 1
        this.rightCurrent = 4
      }
      if (this.leftCurrent === 3) {
        this.leftCurrent = 2
        this.rightCurrent = 3
      }
      if (this.leftCurrent === 4) {
        this.leftCurrent = 3
        this.rightCurrent = 2
      }

      if (this.rightCurrent === 5) {
        this.rightCurrent = 1
      }
      console.log('left', this.leftCurrent, 'right', this.rightCurrent)
      switch (this.rightCurrent) {
        case 1:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = true
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.play()
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.rightCurrent = 2
          break
        case 2:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = true
          this.animation7Show = false
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.play()
          this.animation7.goToAndStop(0, true)
          this.animation8.goToAndStop(0, true)
          this.rightCurrent = 3
          break
        case 3:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = true
          this.animation8Show = false
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.play()
          this.animation8.goToAndStop(0, true)
          this.rightCurrent = 4
          break
        case 4:
          this.animation1Show = false
          this.animation2Show = false
          this.animation3Show = false
          this.animation4Show = false
          this.animation5Show = false
          this.animation6Show = false
          this.animation7Show = false
          this.animation8Show = true
          this.animation1.goToAndStop(0, true)
          this.animation2.goToAndStop(0, true)
          this.animation3.goToAndStop(0, true)
          this.animation4.goToAndStop(0, true)
          this.animation5.goToAndStop(0, true)
          this.animation6.goToAndStop(0, true)
          this.animation7.goToAndStop(0, true)
          this.animation8.play()
          this.rightCurrent = 5
          break
        default:
          break
      }
    },
  },
  beforeDestroy() {
    this.animation1.destroy()
    this.animation2.destroy()
    this.animation3.destroy()
    this.animation4.destroy()
    this.animation5.destroy()
    this.animation6.destroy()
    this.animation7.destroy()
    this.animation8.destroy()
  },
}
</script>
<style lang="scss" scoped>
#left1, #left2, #left3, #left4, #right1, #right2, #right3, #right4 {
  width: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.process {
  width: 100%;
  background-image: url("https://cdn.jsdelivr.net/gh/itxcr/oss/images/202110281149046.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .p {
    width: 80%;
    margin-top: 50%;
  }
}
</style>
