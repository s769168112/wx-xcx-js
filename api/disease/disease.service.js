const api = require('../public/api')
// 获取常见科室一级列表
const URL_DISEABE_DEPARTMENT_LIST = '/api/label/getMedicalLabel'
// 获取科室二级列表
const URL_DISEABE_DEPARTMENT_LOW_LIST = '/api/label/getMedicalLowLabel'
// 获取疾病
const URL_DISEABE_DETAIL = '/api/medical'





export class DiseaseHttpService {
  /** 获取常见科室列表 **/
  getDepartmentListData(data) {
    let url = URL_DISEABE_DEPARTMENT_LIST;
    return api.requestGet(url, data);
  }
  /** 获取二级科室列表 **/
  getDepartmentLowListData(data) {
    let url = URL_DISEABE_DEPARTMENT_LOW_LIST;
    return api.requestGet(url, data);
  }
  /** 获取疾病详情 **/
  getDiseaseDetailData(id) {
    let url = URL_DISEABE_DETAIL + `/${id}`;
    return api.requestGet(url);
  }
  
}