import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/app.scss'
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')