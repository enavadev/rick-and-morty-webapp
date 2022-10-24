import { takeLatest } from 'redux-saga/effects';
import requestRickMortyPersons from './sagaRequestService';

function* rmSaga() {
  yield takeLatest('rickmorty/changePersonName', requestRickMortyPersons);
}

export default rmSaga;