# ajaxRequest
## 使用方法
```
  ajaxRequest({
      url: 'http://mock-api.com/3Egd0XgM.mock/blueData.do',
      type: 'Get', // 非必填 不填默认是get
      data: {},
      dataType: 'json', // 非必填 默认是json
      async: true, // 非必填 默认是异步
      header: '', // 非必填 请求头 默认application/json;charset=UTF-8
      success: function(data) {
          console.log(data)
      },
      fail: function (err) {
          console.log(err)
      }
  })
 ```
 ## 说明
 默认没有兼容IE低版本
