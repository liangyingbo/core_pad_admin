import { Random } from 'mockjs'
export default [
  {
    url: '/api/article',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status: 'success',
        message: '请求成功',
        result: new Array(25).fill(undefined).map((item, index) => {
          return {
            id: index,
            title: Random.ctitle(),
            content: Random.cparagraph()
          }
        })
      }
    },
  },
]