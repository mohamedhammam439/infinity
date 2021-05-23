import store from 'store';
import {get, map, replace, has, mapValues, isArray} from 'lodash';
import {sync_apps, sync_stock_apps} from './sync_apps'
import * as syncFunctions from './sync_app_functions'
import applyFilters from '_helpers/functions/filters'
import moment from 'moment'
import axios from 'axios'
import {API_URL} from '_config';

export const getGun = (path, state=store.getState())=>{
  return get(state.guns, path, null)
}

export const getApp = (name, state = store.getState()) => {
  const app = get(state.apps.apis, name)
  return {
    ...app,
    url: app.api,
  }
}
export const getNotifiApps = (state=store.getState()) => {
  return get(state, 'notification_apps.data.apps')
}

export const syncData = (dis, create) => {
  const hq = applyFilters({path: 'hq_location'})
  hq && map(dis, (val) => {
    const {type, data} = val
    if (type.includes('set_data')) {
      const app = replace(type, 'set_data_', '')
      const notifi_apps = getNotifiApps()
      if (notifi_apps.includes(app)) {
        syncNotifiGun(app, data)
      }
      // if(has(sync_apps, app)){
      syncGun(app, data)
      // }
      if (create && has(sync_stock_apps.check_update, app)) {
        syncStockGun(app, data)
      }
    }
  })
  return [
    ...dis, {type: 'set_main_syncing', data: {local: {data: dis}}},
  ]
}


function syncGun(app, data) {
  const gunDB = getGun('hq')
  let insert = true;
  const func = get(sync_apps, `${app}.func`)
  const new_data = isArray(data) ? data : [data]
  // console.log(new_data)
  if (gunDB) {
    map(new_data, (add_data) => {
      if (func) {
        insert = get(syncFunctions, func, () => true)(add_data, get(sync_apps, `${app}.func_params`))
      }
      const dataId = get(add_data, 'id')
      if (dataId) {
        const app_data = {[dataId]: JSON.stringify(add_data)}
        // every thing has to be synced to hq node to be added to hq db in the server
        gunDB.get('hq').put({[app]: app_data})
        // gunDB.get('hq').get(`${app}_hq`).set(app_data)
        const gun_db = get(sync_apps, `${app}.gun_db`)
        if (gun_db && insert) {
          const added_app = gunDB.get(app)
          added_app.put(app_data)
          gunDB.get(gun_db).set(added_app)
        }
      }
    })
  }
}

// filtering to_gun tables from db based on their updated at thats similer to
// updated at of check_update tables then adding them to gun
function syncStockGun(app, data) {
  // const gun_all = getGun('hq')
  // if(s_all){
  const updated_at = get(data, 'updated_at', get(data, '0.updated_at'))
  const filter = {updated_at__gte: moment(updated_at).subtract(10, 'seconds').utc().format()}
  const stock_data = mapValues(sync_stock_apps.to_gun, ((v) => {
    return ({filter})
  }))
  axios.post(`${API_URL}multi_query/`, stock_data)
      .then(({data}) => {
        // const sync_data = map(data, (table_data, table_name) => {
        //   return {
        //     type: `set_data_${table_name}`,
        //     data: table_data,
        //   }
        // let new_table_data = reduce(table_data, (o,v) => {
        //     return {...o, [v.id ]:JSON.stringify(v) }
        // }, {})
        // let added_app = gun_all.get(table_name)
        // added_app.put(new_table_data)
        // stock_gun.set(added_app)
        // })
      })
  // }
}

function syncNotifiGun(app, data) {
  const gun_all = getGun('hq')
  const notifi_data = applyFilters({
    path: 'settings__notifications',
    key: 'FindNotifi',
    select: {
      app_name: app,
    },
  })
  if (notifi_data && gun_all) {
    const gun_notifications = gun_all.get('notifications')
    const new_data = isArray(data) ? data : [data]
    map(new_data, (val) => {
      const key = get(val, 'id')
      const app_data = {[key]: JSON.stringify({...val, notifi_data: {...notifi_data, seen: {}}})}
      gun_notifications.put({[app]: app_data}, (lol) => {
        //  console.log("ACK", lol)
      })
    })
  }
}
export default (...params) => (params.filter(Boolean).join('_'))
