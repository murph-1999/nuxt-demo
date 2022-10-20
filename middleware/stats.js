/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-14 16:26:13
 * @LastEditTime: 2022-10-14 16:26:39
 */
import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}