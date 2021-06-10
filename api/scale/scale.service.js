
const api = require('../public/api')

// 获取健康知识列表
 const URL_SCALE_LIST = '/api/scale'
//  获取量表题目
const URL_SCALE_TITLE = '/api/scale/getSubject'
// 提交题目
const URL_COMMIT_SCALE_OPTION_ANSWER = '/api/scaleAnswer/submitSubject'
// 提交整张量表
const URL_COMMIT_SCALE_ANSWER = '/api/scaleAnswer/submitAnswer'
// 获取量表结果
const URL_GET_SCALE_RESULT = '/api/scaleAnswer/getResult'
// 获取量表详情
const URL_GET_SCALE_DETAIL = '/api/scale'

export class ScaleHttpService {
  //  + `/${id}`
  /** 量表列表 **/
  getScaleList(data) {
    let url = URL_SCALE_LIST;
    return api.requestGet(url, data);
  }
  /** 获取量表题目 **/
  getScaleTitle(data) {
    let url = URL_SCALE_TITLE
    return api.requestGet(url,data);
  }
  /** 提交每题答案 **/
  commitAnswer(data) {
    let url = URL_COMMIT_SCALE_OPTION_ANSWER
    return api.requestPost(url,data,true);
  }
  /** 提交整张答卷 **/
  commitScale(data) {
    let url = URL_COMMIT_SCALE_ANSWER
    return api.requestPost(url,data,true);
  }
  /** 获取量表结果 **/
  getScaleResult(data) {
    let url = URL_GET_SCALE_RESULT
    return api.requestGet(url,data);
  }
  /** 获取量表详情 **/
  getScaleDetail(id) {
    let url = URL_GET_SCALE_DETAIL + `/${id}`
    return api.requestGet(url);
  }
}