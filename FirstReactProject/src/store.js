
//import loginReducer from "./containers/Login/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  //combineReducers({ rootReducer }),
  applyMiddleware(sagaMiddleware)
);
 sagaMiddleware.run(rootSaga);

