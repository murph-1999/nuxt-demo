import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _07ede397 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _29af0204 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _37c12dac = () => interopDefault(import('../pages/list/doing.vue' /* webpackChunkName: "pages/list/doing" */))
const _f05f45be = () => interopDefault(import('../pages/list/todo.vue' /* webpackChunkName: "pages/list/todo" */))
const _27a5be5c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _25ef1d14 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _07ede397,
    name: "about"
  }, {
    path: "/list",
    component: _29af0204,
    name: "list",
    children: [{
      path: "doing",
      component: _37c12dac,
      name: "list-doing"
    }, {
      path: "todo",
      component: _f05f45be,
      name: "list-todo"
    }]
  }, {
    path: "/",
    component: _27a5be5c,
    name: "index"
  }, {
    path: "/:slug",
    component: _25ef1d14,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
