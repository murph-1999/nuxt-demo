/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-17 16:07:40
 * @LastEditTime: 2022-10-17 16:07:43
 */
export const state = () => ({
  counter: 0
})

export const mutations = {
  increment(state) {
    state.counter++
  }
}
