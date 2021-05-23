// import {} from 'redux-saga/effects'
// import {delay} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
// import moment from 'moment'
import {post} from 'axios'
// import {MINIMUM_MS} from '_config'
// import {v4 as uuid} from 'uuid';
import {map, get} from 'lodash'
// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// function* runClockForwards() {
//   while (true) {
//     yield put({type: 'set_main_main', data: {time: moment()}})
//     yield call(delay, 1000)
//   }
// }
function* runUploadModels(props, action) {
  try {
    const data = yield call(post, '/api/Init/PersistChanges', action.data)
    // yield call(store.dispatch, [{type: 'set_data_req_line', data: {
    //   [req_id]: pushToRedux({action, req_id, update_models: {gun: true}}, post, API_URL + 'update_models/', {data: action.data}),
    // }}])
    // const data = yield call(post, API_URL + 'update_models/', {data: action.data})
    let dis = map(action.data, (val, key) => ({
      type: `set_data_${key}`,
      data: [...val.filter((d)=>(!d.remove)), ...get(action.data, key).filter((d)=>d.remove).map((d)=>({...d, active: false}))],
    }))
    if (action.onSuccess) {
      dis = [...dis, ...(action.onSuccess(action.data) || [])]
    }
    return yield props.store.dispatch(dis)
  } catch (error) {
    if (action.onError) {
      action.onError(error)
    }
  }
}

// export function* clock() {
//   console.log('dis')
//   yield takeLatest('Clock', runClockForwards.bind(this))
// }
export function* uploadModels(app, props) {
  // console.log('dis')
  yield takeLatest('UpdatingModels', runUploadModels.bind(this, props))
}
