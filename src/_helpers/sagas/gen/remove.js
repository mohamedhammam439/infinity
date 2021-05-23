import {delete as Delete, post} from 'axios';
import {get} from 'lodash';
import {API_URL} from '_config'
import {call, takeLatest} from 'redux-saga/effects';
import {getApp} from './mapping/name';
import store from 'store';
import {pushToRedux} from './mapping/requests_func'
import {v4 as uuid} from 'uuid';


function* Deleting(app, name, action = {}) {
  try {
    if (!app.url) {
      app = getApp(action.app)
      name = app.name;
    }
    const id = get(action, 'data.id', action.data);
    const req_id = uuid()

    return yield call(store.dispatch, [{type: 'set_data_req_line', data: {
      [req_id]: pushToRedux({app, name, action, req_id, remove: true}, Delete, `${API_URL}${app.url}${id}`),
    }}])
    // yield call(Delete, `${API_URL}${app.url}${id}`)
    // let dis = [
    //     { type: mapName('remove_data', name), data: [id] }
    // ]
    // if (action.onSuccess) {
    //     dis = [...dis, ...action.onSuccess(action.data)]
    // }
    // return yield call(store.dispatch, syncData(dis), true)
  } catch (error) {
    if (action.onError) {
      action.onError(error)
    }
  }
}

function* DeletingMany(app, name, action = {}) {
  // app = action.app || app;
  try {
    if (!app.url) {
      app = getApp(action.app)
      name = app.name;
    }
    const req_id = uuid()

    return yield call(store.dispatch, [{type: 'set_data_req_line', data: {
      [req_id]: pushToRedux({app, name, action, req_id, remove: true}, post, API_URL + `${app.url}many_delete/`, action.data),
    }}])
    // const res = yield call(post, API_URL + `${app.url}many_delete/`, action.data)
    // let dis = [
    //     { type: mapName('remove_data', name), data: res.data }
    // ]
    // if (action.onSuccess) {
    //     dis = [...dis, ...action.onSuccess(res.data)]
    // }
    // return yield call(store.dispatch, syncData(dis), true)
  } catch (error) {
    if (action.onError) {
      action.onError(error)
    }
  }
}

export function* deleting(app) {
  yield takeLatest('Deleting', Deleting.bind(this, app, undefined))
  yield takeLatest('DeletingMany', DeletingMany.bind(this, app, undefined))
}
export function* deletingApp(app) {
  yield takeLatest(`Deleting_${app.name}`, Deleting.bind(this, app.settings, app.name))
  yield takeLatest(`DeletingMany_${app.name}`, DeletingMany.bind(this, app.settings, app.name))
}
