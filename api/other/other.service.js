const api = require('../public/api')

// 获取健康知识列表
 const URL_OTHER_SEARCH = '/api/search'

export class OtherHttpService {
  /** 首页搜索 **/
  getSearchData(data) {
    let url = URL_OTHER_SEARCH;
    return api.requestGet(url, data);
  }
}