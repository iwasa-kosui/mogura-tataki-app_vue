import Vue from 'vue'
import App from './App.vue'
import Game from './components/Game.vue'
import Moles from './components/Moles.vue'
import Mole from './components/Mole.vue'
import Counter from './components/Counter.vue'

Vue.config.productionTip = false

Vue.component('game', Game)
Vue.component('moles', Moles)
Vue.component('mole', Mole)
Vue.component('counter', Counter)

new Vue({
  render: h => h(App),
}).$mount('#app')
