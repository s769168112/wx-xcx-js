const api = require('../public/api')

// 获取健康知识列表
 const URL_HEALTH_TIPS = '/api/tips'
 // 获取文章详情
 const URL_HEALTH_DETAIL = '/api/tips'
// 获取健康知识类型标签
const URL_HEALTH_TIPSLABEL = '/api/label/getTipsLabel'
export class HealthHttpService {
  /** 获取健康知识列表 **/
  getHealthLoreListData(data) {
    let url = URL_HEALTH_TIPS;
    return api.requestGet(url, data);
  }
  /** 获取健康知识详情 **/
  getHealthLoreDetailData(id) {
    let url = URL_HEALTH_TIPS + `/${id}`;
    return api.requestGet(url);
  }
  /** 获取健康知识类型标签 **/
  getTipsLabel(){
    let url = URL_HEALTH_TIPSLABEL
    return api.requestGet(url)
  }
}