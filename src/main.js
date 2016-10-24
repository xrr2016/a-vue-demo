import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)


import hello from './components/hello.vue'
import world from './components/world.vue'

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {
      path:'/hello',
      component:hello
    },
    {
      path:'/world',
      component:world
    }
  ]
})

const app = new Vue({
  router : router,
  render: h => h(App)
}).$mount('#app')
