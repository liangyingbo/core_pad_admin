export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 0,
        status: 'success',
        errno: 0,
        message: '上传成功',
        data: {
          url: 'images/avatar.jpg',
        },
      }
    },
  }
] 