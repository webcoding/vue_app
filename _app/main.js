'use strict'

import Vue from 'vue'
import Router from 'vue-router'

import App from './pages/App.vue'
import IndexView from './pages/IndexView.vue'
import RemView from './pages/RemView.vue'
// import ButtonView from './pages/ButtonView.vue'
// import ToastView from './pages/ToastView.vue'
// import DialogView from './pages/DialogView.vue'
// import ActionSheet from './pages/ActionSheetView.vue'
// import MsgView from './pages/MsgView.vue'
// import ArticleView from './pages/ArticleView.vue'
// import CellView from './pages/CellView.vue'
// import ProgressView from './pages/ProgressView.vue'
// import IconsView from './pages/IconsView.vue'

// install router
Vue.use(Router)

// register filters globally

// routing
var router = new Router()

router.map({
  '/': {
    name: 'index',  // 路径别名
    component: IndexView
  },
  '/rem': {
    name: 'rem',
    component: RemView
  },
  // '/toast': {
  //   component: ToastView
  // },
  // '/dialog': {
  //   component: DialogView
  // },
  // '/actionsheet': {
  //   component: ActionSheet
  // },
  // '/msg': {
  //   component: MsgView
  // },
  // '/article': {
  //   component: ArticleView
  // },
  // '/cell': {
  //   component: CellView
  // },
  // '/progress': {
  //   component: ProgressView
  // },
  // '/icons': {
  //   component: IconsView
  // }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')

// function aa(){console.log('hahah')}
