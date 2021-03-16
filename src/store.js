import { createStore, applyMiddleware } from 'redux';
import { dataReducer } from 'reducers/data';
import createSagaMiddleware from 'redux-saga';
import  thunk  from 'redux-thunk';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  dataReducer,
  applyMiddleware(sagaMiddleware, thunk),
)
sagaMiddleware.run(mySaga)