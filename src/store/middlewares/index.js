
import {get, isArray, map, isEmpty, filter, groupBy, mapValues, concat} from 'lodash'
// import {callReqFunc} from 'subscribers/req'
// import * as actions from './item_functions'
// import {syncSocketData} from './syncing'
import initFun from '_helpers/functions/init_for_table.js'

// export const detectReqLine = (store) => (next) => (action) => {
//   const {type} = action
//   let result = null
//   // console.log('active_order', get(store.getState(), 'orders__main.active'))
//   if (type && type.includes('set_data_req_line')) {
//     const new_requests = get(store.getState(), 'req_line.data')
//     result = next(action)
//     if (isEmpty(new_requests)) {
//       callReqFunc()
//     }
//   } else {
//     result = next(action)
//   }
//   return result
// }


export const storeEnhancer = (createStore) => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer)
  const dispatch = (action, ...params) => {
    const new_action = isArray(action) ? action : [action]
    const extra_actions = new_action
    const current_store_state = store.getState()
    const active_station = get(current_store_state, `licensing__station.active`)
    if (active_station) {
      // syncSocketData(new_action, ...params)
      map(new_action, (val) => {
        const {data = {}, app, action} = val
        let item = {...(data && data.item)}
        // if (!app) {
        //   app = actions.getApp(type)
        // }
        if (action && isEmpty(item)) {
          item = {...get(store.getState(), `${app}.item`), ...val.data}
        }

        // if (get(item, 'action')) {
        //   let action_data = item
        //   // if (item.id) {
        //   //   const prev_data = get(current_store_state, `${app}.data.${item.id}`) || {}
        //   //   action_data = {...prev_data, ...item}
        //   // }
        //   // const added_action = get(actions, item.action, () => [])({...val, item: action_data})
        //   // extra_actions.push(added_action)
        // }
      })
    }
    return store.dispatch(extra_actions)
  }
  return {
    ...store,
    dispatch,
  }
}

export const initStoreEnhancer = (createStore) => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer)
  const dispatch = (action) => {
    const new_actions = isArray(action) ? action : [action]
    const store_actions = filter(new_actions, (v) => !isEmpty(v))
    const set_data = filter(store_actions, (val) => (val.type.includes('set_data') && !val.type.includes('req_line'))).filter((d)=>(!d.reject))
    let init_actions = []
    const removed_data = filter(store_actions, (val) => (val.type.includes('remove_data') && !val.type.includes('req_line')))
    if (!isEmpty(set_data) || !isEmpty(removed_data)) {
      const out = groupBy(set_data, (val) => val.type.slice(9))
      const app_data = mapValues(out, (val) => concat([], ...map(val, (d) => d.data)))
      const remove_out = groupBy(removed_data, (val) => val.type.replace('remove_data_', ''))
      const remove_data = mapValues(remove_out, (val) => concat([], ...map(val, (d) => d.data)))
      init_actions = initFun(store, app_data, remove_data)
    }
    return store.dispatch([...store_actions, ...init_actions])
  }
  return {
    ...store,
    dispatch,
  }
}

