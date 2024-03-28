// import { compose, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './root-saga';
// // import {thunk} from 'redux-thunk'



// const persistConfig = {
//   key:'root',
//   storage,
//   whitelist:['cart']
// };

// const sagaMiddleware = createSagaMiddleware();

// const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV !== 'development' && logger].filter(
    Boolean
 );

// const composeEnhancer = 
//  ( process.env.NODE_ENV !== 'production' &&
//    window &&
//    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
//   compose;


// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

 export const store = configureStore({
   reducer:rootReducer,
   middleware:(getDefaultMiddleware) =>
   getDefaultMiddleware({
      serializableCheck:false,
   }).concat(middleWares)
})


// export const persistor = persistStore(store)    