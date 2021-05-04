
const api = require('../public/api')

// 获取用户收藏的手术视频
const URL_USER_SURGERY_LIST = '/api/user/getCollectSurgery'
// 获取用户收藏的文章
const URL_USER_ARTICLE_LIST = '/api/user/getCollectTips'

export class UserHttpService {
  /** 获取用户收藏的手术视频 **/
  getUserVideoListData(data) {
    let url = URL_USER_SURGERY_LIST;
    return api.requestGet(url, data);
  }
  /** 获取用户收藏的文章 **/
  getUserArticleListData(data) {
    let url = URL_USER_ARTICLE_LIST;
    return api.requestGet(url, data);
  }
}