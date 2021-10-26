<template>
  <div class="changeSrc">
    <img :src="img" alt="" style="user-select: none">
    <a-icon type="left" :style="{ fontSize: '32px', color: '#08c'}"
            style="cursor: pointer;position: absolute;left: 5%;top:50%;"
            @click="clickLeft"
    />
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
        let current = 1
        const left = setInterval(() => {
          ++current
          this.img = `https://www.atlantide.top:19000/public/images/img/Gabriel${current}.jpg`
          if (current === 180) {
            clearInterval(left)
          }
        }, 50)
      }, 800),
      clickRight: _.debounce(function() {
        let current = 180
        const right = setInterval(() => {
          --current
          this.img = `https://www.atlantide.top:19000/public/images/img/Gabriel${current}.jpg`
          if (current === 1) {
            clearInterval(right)
          }
        }, 50)
      }, 800),
    },
  }
</script>
<style lang="scss" scoped>
  .changeSrc {
    img {
      width: 80%;
    }
  }
</style>
