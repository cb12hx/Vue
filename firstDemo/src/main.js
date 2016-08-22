import Vue from 'vue'

import VueRouter from 'vue-router'
import Login from './components/Login'
import Register from './components/Register'
import styles from './assets/base.scss'
Vue.use(VueRouter)
/* eslint-disable no-new */
var App = Vue.extend({
  methods:{
     goToLogin () {//方法，定义路由跳转，注意这里必须使用this，不然报错
        this.$route.router.go({ path: "login" });
     }
  },
  ready:function(){
    this.goToLogin();
  }
})

var router = new VueRouter()
router.map({
    '/login': {
        component: Login
    },
    '/register': {
        component: Register
    }
})

router.start(App, '#app')