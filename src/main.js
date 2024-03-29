// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import 'element-ui/lib/theme-chalk/index.css';
import element from 'element-ui'
import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.use(vueAxios,axios)
Vue.use(element)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
