import {createStore, applyMiddleware, compose} from 'redux'
import {reduxBatch} from '@manaflair/redux-batch';
import rootReducer from './reducers'
import dynostore, {dynamicReducers, shallowStateHandler} from '@redux-dynostore/core';
import createSagaMiddleware from 'redux-saga'
import * as Sagas from '_helpers/sagas';
import init from './init';
import {storeEnhancer, initStoreEnhancer} from './middlewares'

import {mode} from '_config'

const initialState = init();
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const enhancer = composeEnhancer(
    compose(
        storeEnhancer,
        initStoreEnhancer,
        reduxBatch,
        dynostore(
            dynamicReducers({stateHandler: shallowStateHandler}),
            // dynamicSagas(sagaMiddleware)
        ),
        applyMiddleware(...middleware),
    )
);



// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = {
  ...createStore(rootReducer, initialState, enhancer),
  runSaga: sagaMiddleware.run,
};
// console.log(Sagas)
setTimeout(()=>{
  // store.runSaga(Sagas.Sagas())
  store.runSaga(Sagas.ExtraSagas({}, store))
  // store.dispatch({type: 'Clock'})
}, 50)
// export const persistor = persistStore(store);


if (window && mode=='dev') {
  window.st = store
}
export default store;
