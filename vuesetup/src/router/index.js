import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import home from './containers/home'
import dashboard from './containers/dashboard'
import projects from './containers/projects'
import Resource from 'vue-resource'
Vue.use(Resource)
const routes = [
    { path: '/', component: home },
    { path: '/dashboard', component: dashboard },
    { path: '/projects', component: projects }
  ]
  // export router instance
  export default new Router({
    mode: 'history',
    routes,
    linkActiveClass: 'is-active'
  })
