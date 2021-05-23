import {get, omit, drop, join} from 'lodash'
import applyFilters from '_helpers/functions/filters';
import mapDispatchFunc from '_helpers/actions/main/async'

const funcs = mapDispatchFunc()
const setActivity = (data = {}, app, item) => {
  let out = []
  const afterAction = applyFilters({path: `${app}.afterAction`}) || (() => ([]))
  const active = applyFilters({path: `${app}.active`})
  // const { app, active, item, afterAction } = this.props;
  const dis = [...afterAction(data), ...get(item, 'onSuccess', () => ([]))(data)]
  if (item.not_active) {
    out.unshift({type: `set_main_${app}`, data: {item: {}}})
  } else {
    out.unshift({type: `set_main_${app}`, data: {active: active || data.id, item: {}}})
  }
  out = [...out, ...dis]
  return out;
}
export const add = (props) => {
  let {item, app, type} = props;
  if (!app) {
    app = getApp(type)
  }
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.CreateApp(omit(item, ['action']), onSuccess, null, app)
}

export const bulkAdd = (props) => {
  let {item, app, type} = props;
  if (!app) {
    app = getApp(type)
  }
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.CreateBulkApp(item, onSuccess, null, app)
}

export const updateModel = (props)=>{
  const {item} = props;
  const onSuccess = (data) => {
    return setActivity(data, null, item)
  }
  return funcs.UpdateModels(item, onSuccess)
}

export const bulkEdit = (props) => {
  let {item, app, type} = props
  if (!app) {
    app = getApp(type)
  }
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.UpdateBulkApp(item, onSuccess, null, app)
}

export const manyEdit = (props) => {
  let {item, exclude, app, type} = props
  if (!app) {
    app = getApp(type)
  }
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.UpdateManyApp({exclude, ...item}, onSuccess, null, app)
}

export const manyDelete = (props) => {
  let {item, exclude, app, type} = props
  if (!app) {
    app = getApp(type)
  }
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.DeleteManyApp({exclude, ...item}, onSuccess, null, app)
}

export const update = (props) => {
  let {item, app, type} = props
  if (!app) {
    app = getApp(type)
  }
  const active = applyFilters({path: `${app}.active`})
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.UpdateApp({id: active, ...item}, onSuccess, null, app)
}

export const getApp = (type) => {
  return join(drop(type.split('_'), 2), '_')
}

export const deleted = (props) => {
  let {item, app, type} = props
  if (!app) {
    app = getApp(type)
  }
  const active = applyFilters({path: `${app}.active`})
  const onSuccess = (data) => {
    return setActivity(data, app, item)
  }
  return funcs.DeleteApp({id: active, ...item}, onSuccess, null, app)
}


