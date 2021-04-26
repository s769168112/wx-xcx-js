const api = require('../public/api')

// 获取手术列表
const URL_SURGERY_LIST = '/api/sur'
// 获取手术详情
const URL_SURGERY_DETAIL = '/api/sur'


export class SurgeryHttpService {
  /** 手术全解列表 **/
  getSurgeryListData(data) {
    let url = URL_SURGERY_LIST;
    return api.requestGet(url, data);
  }
  /** 手术详情 **/
  getSurgeryDetailData(id) {
    let url = URL_SURGERY_DETAIL + `/${id}`;
    return api.requestGet(url);
  }
}