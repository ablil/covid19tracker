import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './style/app.scss'


import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
