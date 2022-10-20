/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-14 16:05:28
 * @LastEditTime: 2022-10-14 16:12:12
 */
export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}