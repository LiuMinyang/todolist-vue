
import Vue from 'vue'
import Todolist from './todolist'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Todolist },
  template: '<Todolist/>'
})
