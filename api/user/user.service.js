
const api = require('../public/api')

// 获取用户收藏的手术视频
const URL_USER_SURGERY_LIST = '/api/user/getCollectSurgery'
// 获取用户收藏的文章
const URL_USER_ARTICLE_LIST = '/api/user/getCollectTips'
// 用户取消收藏
const URL_USER_FAVORITES_CANCEL = '/api/userOperation/cancelCollect'
// 用户收藏
const URL_USER_FAVORITES = '/api/userOperation/doCollect'
// 用户分享
const URL_USER_SHARE_CANCEL = '/api/userOperation/doShare'
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

  /** 用户分享 **/
  userShare(data) {
    let url = URL_USER_SHARE;
    return api.requestPost(url, data, true);
  }
  /** 用户收藏**/
  userFavorites(data) {
    let url = URL_USER_FAVORITES;
    return api.requestPost(url, data, true);
  }

  /** 用户取消收藏**/
  userFavoritesCancel(data) {
    let url = URL_USER_FAVORITES_CANCEL;
    return api.requestPost(url, data, true);
  }
  
}