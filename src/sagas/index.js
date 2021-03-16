import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import regeneratorRuntime from "regenerator-runtime";
import { setGraphQL } from 'actions';
import { fetchData } from './api'

function* getApiData() {
  try{
    const data = yield call(fetchData);
    yield put(setGraphQL(data.data.user))
  }catch(e){
    console.log(e);
  }
}

export default function* mySaga(){
  yield takeLatest('REQUEST_API_DATA', getApiData);
}