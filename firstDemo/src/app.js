import Vue from 'vue'

import VueRouter from 'vue-router'
import styles from './assets/base.scss'
import routerConfig from './router'
import main from './main'
Vue.use(VueRouter)
let routerObj=new VueRouter();
routerConfig(routerObj)
routerObj.start(main, '#app')

