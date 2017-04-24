// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Details1 from './components/Details1.vue'
import store from './store/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/task/:id', name: 'task', component: Details1 }
    ]
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})
