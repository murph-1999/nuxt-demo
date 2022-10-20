/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-17 16:08:13
 * @LastEditTime: 2022-10-17 16:08:17
 */
export const state = () => ({
  list: []
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}