
const baseUrl = 'http://47.94.16.114:8080'
const app = getApp()
console.log('app数据',app)
const token = app.globalData.token
export function requestPost(url, data,isReturnAll = false) {
    return new Promise(function(resolve, reject) {
        let header = {
            'content-type': 'application/json',
            'X-Auth-Token': token
        };
        wx.request({
            url: baseUrl + url,
            method: 'POST',
            data: data,
            header: header,
            success(res) {
                //判断状态码
                if (res.data.code == 0) {
                  if(isReturnAll){
                    resolve(res);
                  } else {
                    resolve(res.data.data);
                  }
                    
                } else {
                    //其他异常
                    reject('运行时错误,请稍后再试');
                }
            },
            fail(err) {
                //请求失败
                reject(err)
            }
        })
    })
}


export function requestGet(url, data, isReturnAll = false) {
  return new Promise(function(resolve, reject) {
      let header = {
          'content-type': 'application/json',
          'X-Auth-Token': token
      };
      wx.request({
          url: baseUrl + url,
          method: 'GET',
          data: data,
          header: header,
          success(res) {
              //判断状态码
              if (res.data.code == 0) {
                if(isReturnAll){
                  resolve(res);
                } else {
                  resolve(res.data.data);
                }
              } else {
                  //其他异常
                  reject('运行时错误,请稍后再试');
              }
          },
          fail(err) {
              //请求失败
              reject(err)
          }
      })
  })
}