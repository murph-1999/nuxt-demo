<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-09 14:23:26
 * @LastEditTime: 2022-10-18 16:22:08
-->
<template>
  <div>
    <h1 class="red">Hello {{ name }}!</h1>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li>
        <input placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </li>
    </ul>
    <nuxt-child />
  </div>

</template>

<script>
import { mapMutations } from 'vuex'

export default {
  layout: 'global',
  async asyncData({ $axios, req, res }) {
    // 请检查您是否在服务器端
    // 使用 req 和 res
    // 在服务端获取不到？

    // const ip = await $axios.$get('http://icanhazip.com')

    if (process.server) {
      return { name: req.headers.host }
    }
    return {
      name: 'sss',

    }
  },
  fetch() {
    // 填充状态树
    // The fetch method is used to fill the store before rendering the page
  },
  head() {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }

}
</script>

<style>
.red {
  color: red;
}
</style>