import { Random } from 'mockjs'
export default [
  {
    url: '/api/user/info',
    method: 'get',
    response: () => {
      return {
        code: 0,
        status:'success',
        message:'请求成功',
        data: {
          age:'18',
          name: '蔡大大',
          avatar:'images/avatar.jpg',
          permissions:['article_edit','editor_markdown']
        },
      }
    },
  },
  {
    url: '/api/login',
    method: 'post',
    response: () => {
      return {
        code: 0,
        status:'success',
        message:'请求成功',
        data: {
          token:Random.string(10)
        },
      }
    },
  }
]