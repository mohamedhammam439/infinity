/* eslint-disable no-throw-literal */
/* eslint-disable complexity */
import {get, map, isArray} from 'lodash';
import store from 'store';
import mapName, {syncData} from './name'
import Connect from '_helpers/functions/attach'

// import {message} from 'antd'
export function pushToRedux(app_data, axios_method, url, data) {
  return (() => {
    return req_fun(app_data, axios_method, url, data)
  })
}

let trials = 0
const req_fun = (app_data, axios_method, url, data) => {
  return axios_method(url, data)
  // .then(resp => app_data.bulk ? afterBulkReq(app_data,get(resp, 'data')) : afterReq(app_data,get(resp, 'data')))
      .then((resp) => afterReq(app_data, get(resp, 'data')))
      .catch((error) => {
        if (trials >= 2) {
          trials = 0
          store.dispatch({
            type: 'set_main_main',
            data: {status: 'offline'},
          })
        } else {
          trials ++
          return req_fun(app_data, axios_method, url, data)
        }
        if (get(app_data, 'action.onError')) {
          app_data.action.onError(error)
        }
        throw 'error in requesting'
      })
}

export function afterBulkReq(app_data, data) {
  const db_ids = map(data, (val) => val.id)
  const new_data = [...get(app_data, 'action.data.data', []).filter((val) => !db_ids.includes(val.id)), ...data]
  afterReq(app_data, new_data)
}

export function afterReq(app_data, data) {
  const {name, action={}, req_id, bulk, update_models, remove, create} = app_data
  // console.log(req_id)
  const extra_dis = [{type: 'remove_data_req_line', data: [req_id]}]
  let dis = []
  let removed_data = []
  if (name) {
    if (remove) {
      const main_data = get(action, 'data.id') ? [get(action, 'data.id')] : data
      dis = [{type: mapName('remove_data', name), data: main_data}]
    } else {
      dis = [{type: mapName('set_data', name), data: isArray(data)? data :[data]}]
      if (bulk) {
        removed_data = action.data.data.filter((d) => d.remove)
        dis = [...dis, {type: mapName('remove_data', name),
          data: action.data.data.filter((d) => d.remove).map((d) => d.id)},
        ]
      }
    }
    if (action.onSuccess) {
      dis = [...dis, ...action.onSuccess(data, removed_data)]
    }
    store.dispatch([...syncData(dis, true, create), ...extra_dis], true, {update_data: true})
  }
  if (update_models) {
    const state = store.getState();
    dis = map(data, (redux_data, app_key)=>{
      if (!state[app_key]) {
        Connect(app_key)
      }
      return {
        type: `set_data_${app_key}`,
        data: redux_data,
      }
    })
    dis = [...dis, ...map(action.data, (d, key)=>({
      type: `remove_data_${key}`,
      data: d.filter((d)=>d.remove).map((d)=>d.id),
    }))]
    if (action.onSuccess) {
      dis = [...dis, ...action.onSuccess(data)]
    }
    if (update_models.gun) {
      store.dispatch([...syncData(dis, true, create), ...extra_dis], true, {update_data: true})
    } else {
      store.dispatch([...dis, ...extra_dis], true, {update_data: true})
    }
  }
}
