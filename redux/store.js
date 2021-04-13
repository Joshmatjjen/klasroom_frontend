import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {HYDRATE, MakeStore, createWrapper, Context} from 'next-redux-wrapper';
import logger from "redux-logger";
import {reduxBatch} from "@manaflair/redux-batch";
import {persistStore} from "redux-persist";
import rootSaga from "./saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
  }),
  sagaMiddleware
];

if (process.env.NODE_ENV === "development") middleware.push(logger);

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    // if (state.auth && state.auth.user) nextState.auth.user = state.user // preserve user value on client side navigation
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [reduxBatch]
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;

//makeStore function that returns a new store for every request
export const makeStore = () => store;

export const wrapper = createWrapper(makeStore, {
  debug: false
});


// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./rootReducer";

// import createSagaMiddleware from 'redux-saga'
// import rootSaga from "./saga";

// import { createWrapper } from 'next-redux-wrapper';




// const initialState = {}


// export const makeStore = (context) => {
//     // 1: Create the middleware
//     const saga = createSagaMiddleware();

//     // 2: Add an extra parameter for applying middleware:
//     const store = createStore(rootReducer, initialState, applyMiddleware(saga));

//     // 3: Run your sagas on server
//     store.sagaTask = saga.run(rootSaga);

//     // 4: now return the store:
//     return store;
// };


// export const wrapper = createWrapper(makeStore, {debug: true});
