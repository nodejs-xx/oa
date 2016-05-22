import Vue from 'vue'
import App from './App'
import { all } from 'vue-client'

all()
require('./bootstrap/less/bootstrap.less')

// 异步注册应用组件
Vue.component('functions', (resolve) => { require(['./components/Functions'], resolve) })

// project
Vue.component('project', (resolve) => { require(['./components/project/Project'], resolve) })
Vue.component('project-form', (resolve) => { require(['./components/project/ProjectForm'], resolve) })

// task
Vue.component('task-list', (resolve) => { require(['./components/task/TaskList'], resolve) })
Vue.component('dispatch-form', (resolve) => { require(['./components/task/DispatchForm'], resolve) })

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
