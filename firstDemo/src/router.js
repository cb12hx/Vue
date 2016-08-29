import Index from './components/Index'
import Nation from './components/Nation'
import Community from './components/Community'
import Setting from './components/Setting'
import Login from './components/Login'
import Register from './components/Register'
import Loading from './components/Loading'
export default function (router) {
  router.map({
    '*': {
       component: Loading
    },
    '/index': {
       component: Index
    },
    '/nation': {
      component: Nation
    },
    '/community': {
      component: Community
    },
    '/setting': {
      component: Setting
    },
    '/login': {
      component (resolve) {
        require(['./components/Login'], resolve)
      }
    }
    ,
     '/register': {
      component: Register
    }
  })
  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    
  })

}