import {set, omit, merge, get, cloneDeep, keys, cloneDeepWith, assign, assignWith, mergeWith} from 'lodash';
import {array_to_obj} from '_helpers/functions/filters';
import {mergin} from '_helpers/functions/filters';
// console.log(mergin)
const actions = {
  merge, assign, assignWith, mergeWith,
}
const omitDeep = (collection, excludeKeys) => {
  function omitFn(value, k) {
    if (value && typeof value === 'object') {
      excludeKeys.forEach((key) => {
        if (get(value[key], 'id')==key && k!='data') {
          delete value[key];
        }
      });
    }
  }
  return cloneDeepWith(collection, omitFn);
}
const assignUpdated = (src={}, obj, key)=>{
  if (src.updated_at) {
    return (src.updated_at > obj.updated_at) ? src:obj
  }
  if (src.remove) {
    return {}
  }
  return obj
}
export const set_main = (state, action)=>{
  return {...state, ...action.data}
}
export const append_path = (state, action)=>{
  if (!action.path) {
    return state
  }
  const newState = cloneDeep(state)
  const data = Array.isArray(action.data) ? array_to_obj(action.data):action.data
  const mainAction = get(actions, action.action, actions.merge)
  set(newState, action.path, mainAction({}, get(newState, action.path, {}), data));
  return newState
}
export const append_path_with = (state, action)=>{
  if (!action.path) {
    return state
  }
  const newState = cloneDeep(state)
  const data = Array.isArray(action.data) ? array_to_obj(action.data):action.data
  const mainAction = get(actions, action.action, actions.mergeWith)
  set(newState, action.path, mainAction({}, get(newState, action.path, {}), data), mergin.bind({}, {}));
  return newState
}
export const remove_path = (state, action)=>{
  if (!action.path) {
    return state
  }
  const newState = cloneDeep(state)
  const data = omit(get(newState, action.path, {}), action.data)
  set(newState, action.path, data);
  return newState
}
export const assign_path = (state, action)=>{
  if (!action.path) {
    return state
  }
  const newState = cloneDeep(state)
  const data = Array.isArray(action.data) ? array_to_obj(action.data):action.data
  set(newState, action.path, assign(get(newState, action.path, {}), data));
  return newState
}


export const set_data = (state, action)=>{
  const data = Array.isArray(action.data) ? array_to_obj(action.data):action.data
  if (state.groups) {
    return {...omitDeep(state, keys(data)), data: assignWith({}, state.data, data, assignUpdated)}
  }
  return {...state, data: assignWith({}, state.data, data, assignUpdated)}
}


export const omit_data = (state, action)=>{
  return {...state, data: {...omit(state.data, action.data)}}
}
export const set_path = (state, action)=>{
  if (!action.path) {
    return state
  }
  const newState = cloneDeep(state)
  // const data = Array.isArray(action.data) ? array_to_obj(action.data) : action.data
  set(newState, action.path, action.data);
  return newState
}
export const remove_main = (state, action)=>{
  return {...omit(state, action.data)}
}
export const remove_data = (state, action)=>{
  // console.log(state, action)
  if (state.groups) {
    return {...omitDeep(state, action.data), data: {...omit(state.data, action.data)}}
  }
  return {...state, data: {...omit(state.data, action.data)}}
}
export const resetAll = (state, action)=>{
  return {active: '', ...action.data}
}
export const reset_all = (state, action)=>{
  // const data = Array.isArray(action.data) ? array_to_obj(action.data):action.data
  return {}
}
