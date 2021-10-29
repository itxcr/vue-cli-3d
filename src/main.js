import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueTouch from '@/config/operation'

Vue.config.productionTip = false
Vue.use(Antd)

Vue.directive('tap', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'tap')
  },
})
Vue.directive('swipe', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'swipe')
  },
})
Vue.directive('swipeleft', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'swipeleft')
  },
})
Vue.directive('swiperight', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'swiperight')
  },
})
Vue.directive('swipedown', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'swipedown')
  },
})
Vue.directive('swipeup', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'swipeup')
  },
})
Vue.directive('longtap', {
  bind: function(el, binding) {
    new VueTouch(el, binding, 'longtap')
  },
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
