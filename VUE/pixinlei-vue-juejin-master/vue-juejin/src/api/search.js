import request from '../util/request'
import { apiUrl } from '../common/config'
import { commonParams } from './common'
import store from '../store'
const state = store.state


// TODO 添加token
/**
 * 获取banner
 */
export const getEventBanner = () => {
  return request.post(apiUrl.ANDROID_HOME_REQUEST_URL, {
    variables: {
      platformCode: 2,
      positionCodes: [4]
    },
    extensions: {
      query: {
        id: "1623ab25980fadf6bae12e10fc0af1e8"
      }
    }
  }).then(res => res.data)
}

// TODO 添加uid和token
/**
 * 
 * @param {string} before 
 */
export const getEntryByRank = (before) => {
  return request({
    method: 'GET',
    url: '/timeline-merger/v1/get_entry_by_rank',
    params: {
      before,
      limit: 30,
      src: commonParams.src,
      token: state.token,
      uid: state.uid,
      ...commonParams
    }
  }).then(res => res.data)
}

/**
 * 
 * @param {string} query 
 * @param {string} type 
 * @param {string} after 
 */
export const search = (query, type, after='') => {
  return request.post(apiUrl.ANDROID_HOME_REQUEST_URL, {
    variables: {
      after,
      type: type.toUpperCase(),
      query
    },
    extensions: {
      query: {
        id: "caee4ea8b64f5860b8867564230e905f"
      }
    }
  }).then(res => res.data)
}