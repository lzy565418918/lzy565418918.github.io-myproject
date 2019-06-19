import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import herolist from './assets/components/herolist.vue'
import foo from './assets/components/foo.vue'
import bar from './assets/components/bar.vue'
import addHero from './assets/components/addHero.vue'
import editHero from './assets/components/editHero.vue'


let routes = [{
    path: '*',
    redirect: '/herolist'
  },
  {
    path: '/herolist',
    component: herolist
  },
  {
    path: '/foo',
    component: foo
  },
  {
    path: '/bar',
    component: bar
  },
  {
    path: '/herolist/addHero',
    component: addHero
  },
  {
    path: '/herolist/editHero/:id',
    component: editHero
  }
]

const router = new VueRouter({
  routes
})

export default router
