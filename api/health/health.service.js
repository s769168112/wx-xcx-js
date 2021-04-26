const api = require('../public/api')

// 获取健康知识列表
 const URL_HEALTH_TIPS = '/api/tips'

export class HealthHttpService {
  /** 获取健康知识列表 **/
  getHealthLoreListData(data) {
    let url = URL_HEALTH_TIPS;
    return api.requestGet(url, data);
  }
}