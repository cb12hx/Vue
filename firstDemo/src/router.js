
import Index from './components/Index'
import Nation from './components/Nation'
import Community from './components/Community'
import Setting from './components/Setting'
import Login from './components/Login'
import Register from './components/Register'
import Loading from './components/Loading'
import VuexTest from './components/VuexTest'
import Main from './components/Main'

export default function (router) {
  router.map({
    '*': {
      component: Loading
    },

    '/main': {
      name: 'main',
      component: Main,
      subRoutes: {
        '/index': {
          // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
          // 一个Bar组件
          component: Index,
          name: '/main/index'
        },
        '/nation': {
          // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
          // 一个Bar组件
          component: Nation,
          name: '/main/nation'
        },
        '/community': {
          // Baz也是一样，不同之处是匹配的路由会是/foo/baz
          component: Community,
          name: '/main/community'
        },
        '/setting': {
          // Baz也是一样，不同之处是匹配的路由会是/foo/baz
          component: Setting,
          name: '/main/setting'
        }
      }
    },
    '/login': {
      name: 'login',
      component: Login
    }
  })
  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)

  })

}