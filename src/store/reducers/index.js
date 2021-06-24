import {combineReducers} from 'redux'

import buildReducers from './main';

export const stores = [
  'main',
  'apps',  
]
const gReduce = stores.map((d) => buildReducers(d)).reduce((o, k) => ({...o, ...k}), 0);
export default combineReducers({
  ...gReduce,
})
