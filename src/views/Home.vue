<template>
  <div class="home">
    <img v-for="item in 180" :src="`https://www.atlantide.top:19000/public/images/img/Gabriel${item}.jpg`" alt="">
    <a-icon type="left" :style="{ fontSize: '32px', color: '#08c'}"
            style="cursor: pointer;position: absolute;left: 5%;top:50%;"
            @click="clickLeft"
    />
    <!--    <img :src="img" alt="" style="user-select: none">-->
    <a-icon type="right" :style="{ fontSize: '32px', color: '#08c'}"
            style="cursor: pointer;position: absolute;right: 5%;top:50%;"
            @click="clickRight"
    />
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        img: `https://www.atlantide.top:19000/public/images/img/Gabriel180.jpg`,
        current: 1,
        left: null,
        right: null,
      }
    },
    methods: {
      clickLeft: _.debounce(function() {
        let home = document.querySelector('.home')
        if (home.classList.contains('active-left') || home.classList.contains('active')) {
          home.classList.remove('active-left')
          home.classList.remove('active')
          return
        }
        home.classList.add('active-left')
        // if (this.right) {
        //   clearInterval(this.right)
        // }
        // this.current = 1
        // if (this.current >= 1 && this.current <= 180) {
        //   this.left = setInterval(() => {
        //     ++this.current
        //     this.img = `https://www.atlantide.top:19000/public/images/img/Gabriel${this.current}.jpg`
        //     if (this.current === 180) {
        //       clearInterval(this.left)
        //     }
        //   }, 30)
        // }
      }, 800),
      clickRight: _.debounce(function() {
        let home = document.querySelector('.home')
        if (home.classList.contains('active') || home.classList.contains('active')) {
          home.classList.remove('active')
          home.classList.remove('active-left')
          return
        }
        home.classList.add('active')
        // if (this.left) {
        //   clearInterval(this.left)
        // }
        // this.current = 180
        // if (this.current >= 1 && this.current <= 180) {
        //   this.right = setInterval(() => {
        //     --this.current
        //     this.img = `https://www.atlantide.top:19000/public/images/img/Gabriel${this.current}.jpg`
        //     if (this.current === 1) {
        //       clearInterval(this.right)
        //     }
        //   }, 30)
        // }
      }, 800),
    },
  }
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    width: 100%;
    position: relative;

    img {
      width: 80%;
      position: absolute;
      left: 50%;
      top: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);

      &:nth-child(1) {
        left: 40%;
        opacity: 1;
        position: relative;
      }
    }

    &.active {
      img {
        @for $i from 0 to 181 {
          &:nth-child(#{$i}) {
            transition: opacity .01s $i*0.08s + 0.5s;
            z-index: 999;
          }
        }
        opacity: 1
      }
    }

    &.active-left {
      img {
        @for $i from 181 to 0 {
          &:nth-child(#{$i}) {
            transition: opacity .01s $i*0.08s + 0.5s;
            z-index: 999;
          }
        }
        opacity: 1
      }
    }

  }
</style>
