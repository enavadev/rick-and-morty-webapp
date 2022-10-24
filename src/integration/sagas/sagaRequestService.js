import { put } from 'redux-saga/effects';
import sagaClient from './sagaclient';
import { updateListPersonsSuccess, updateListPersonsError } from '../../store/rickmortySilce';
import LIST_PERSON from '../query';

function* requestRickMortyPersons(action) {
  try {
      const person = action.payload;

      yield sagaClient.query(LIST_PERSON, { name: person }, 
          {
              onSuccess: function* (response ) {
                  const { results } = response.characters;
                yield put(updateListPersonsSuccess(results));
              },
              onFailure: function* () {
                yield put(updateListPersonsError("some error message here"));
              }
          }
      );
  } catch (e) {
      yield put(updateListPersonsError(["some error message here"]));
  }
}



export default requestRickMortyPersons;