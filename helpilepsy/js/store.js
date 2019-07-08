import { createStore, applyMiddleware, compose } from "redux";
import allReducers from './reducers';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);


export default store;

