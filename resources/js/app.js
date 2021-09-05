require('./bootstrap');

window.Vue = require('vue').default;
import store from '@/store'
import router from '@/router/index'

Vue.component('main-template', require('@/components/Main.vue').default);
Vue.component('Header', require('@/components/partials/Header.vue').default);

const app = new Vue({
    el: '#app', router, store,
});
