const api = require('../public/api')
// 获取常见科室一级列表
const URL_DISEABE_DEPARTMENT_LIST = '/api/label/getMedicalLabel'
// 获取科室二级列表
const URL_DISEABE_DEPARTMENT_LOW_LIST = '/api/label/getMedicalLowLabel'
// 获取疾病
const URL_DISEABE_DETAIL = '/api/medical'
// 问答详情
const URL_DISEABE_QA_DETAIL = '/api/qa'
// 获取疾病或症状
const URL_DISEABE_MEDICAL = '/api/medical/searchMedical'
// 查询疾病列表
const URL_DISEABE_MEDICALList = '/api/medical/getMedicalList'

// 获取疾病详情页相关文章
const URL_GET_ABOUT_ARTICLE = '/api/tips/getTipsByMedical'
// 获取疾病详情页相关问题
const URL_GET_ABOUT_QA = '/api/qa/getQaByMedical'





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

  /* 获取疾病或症状 */
  getDiseaseMedicalData(data) {
    let url = URL_DISEABE_MEDICAL;
    return api.requestGet(url,data);
  }

  /* 获取疾病或症状列表 */
  getDiseaseMedicalListData(data) {
    let url = URL_DISEABE_MEDICALList;
    return api.requestGet(url,data);
  }
  
  
  /** 问答详情 **/
  getDiseaseQADetailData(id) {
    let url = URL_DISEABE_QA_DETAIL + `/${id}`;
    return api.requestGet(url);
  }


  // 获取相关文章
  getAboutArticle(data) {
    let url = URL_GET_ABOUT_ARTICLE
    return api.requestPost(url,data);
  }
  // 获取相关问题
  getAboutQa(data) {
    let url = URL_GET_ABOUT_QA
    return api.requestPost(url,data);
  }
  
}