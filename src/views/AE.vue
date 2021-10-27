<template>
  <div class="border">
    <div v-show="show">
      <div id="left1" v-show="animation1Show"></div>
      <div id="left2" v-show="animation2Show"></div>
      <div id="left3" v-show="animation3Show"></div>
      <div id="left4" v-show="animation4Show"></div>
      <div id="right1" v-show="animation5Show"></div>
      <div id="right2" v-show="animation6Show"></div>
      <div id="right3" v-show="animation7Show"></div>
      <div id="right4" v-show="animation8Show"></div>
      <a-icon type="left" :style="{ fontSize: '32px', color: '#08c'}"
              style="cursor: pointer;position: fixed;left: 5%;top:50%;"
              @click="clickLeft"
      />
      <a-icon type="right" :style="{ fontSize: '32px', color: '#08c'}"
              style="cursor: pointer;position: fixed;right: 5%;top:50%;"
              @click="clickRight"
      />
    </div>
    <div v-if="!show" style="font-size: 50px;position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%)">
      加载中...
    </div>
  </div>
</template>
<script>
import lottie from 'lottie-web'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      show: false,
      lock: true,
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
  mounted() {
    let mulitImg = [
      'http://atlantide.top:18080/lottie/left1/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_43.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_44.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_45.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_46.jpg',
      'http://atlantide.top:18080/lottie/left1/images/img_47.jpg',

      'http://atlantide.top:18080/lottie/left2/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/left2/images/img_43.jpg',

      'http://atlantide.top:18080/lottie/left3/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_43.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_44.jpg',
      'http://atlantide.top:18080/lottie/left3/images/img_45.jpg',

      'http://atlantide.top:18080/lottie/left4/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/left4/images/img_36.jpg',

      'http://atlantide.top:18080/lottie/right1/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/right1/images/img_36.jpg',

      'http://atlantide.top:18080/lottie/right2/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_43.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_44.jpg',
      'http://atlantide.top:18080/lottie/right2/images/img_45.jpg',

      'http://atlantide.top:18080/lottie/right3/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/right3/images/img_43.jpg',

      'http://atlantide.top:18080/lottie/right4/images/img_1.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_2.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_3.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_4.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_5.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_6.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_7.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_8.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_9.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_10.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_11.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_12.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_13.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_14.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_15.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_16.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_17.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_18.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_19.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_20.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_21.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_22.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_23.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_24.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_25.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_26.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_27.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_28.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_29.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_30.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_31.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_32.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_33.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_34.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_35.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_36.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_37.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_38.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_39.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_40.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_41.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_42.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_43.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_44.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_45.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_46.jpg',
      'http://atlantide.top:18080/lottie/right4/images/img_47.jpg',
    ];
    let promiseAll = [], img = [], imgTotal = mulitImg.length;
    for(let i = 0 ; i < imgTotal ; i++){
      promiseAll[i] = new Promise((resolve, reject)=>{
        img[i] = new Image()
        img[i].src = mulitImg[i]
        img[i].onload = function(){
          //第i张加载完成
          resolve(img[i])
        }
      })
    }
    Promise.all(promiseAll).then((img)=>{
      this.show = true
      this.lock = false
    })

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
  }
}
</script>
<style lang="scss" scoped>
#left1, #left2, #left3, #left4, #right1, #right2, #right3, #right4 {
  width: 1200px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
