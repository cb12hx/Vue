import Index from './components/Index'
import Nation from './components/Nation'
import Community from './components/Community'
import Setting from './components/Setting'
import Login from './components/Login'
import Register from './components/Register'
export default function (router) {
  router.map({
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


}