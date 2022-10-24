import { configureStore,  } from '@reduxjs/toolkit';
import rickmortyReducer from './rickmortySilce';
import createSagaMiddleware from 'redux-saga';
import rmSaga from '../integration/sagas';

const sagaMiddleware = createSagaMiddleware();

const createAppStore = () => {
    const Store =  configureStore({
        reducer: { rickmorty: rickmortyReducer },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
        }
    });

    sagaMiddleware.run(rmSaga);
    return Store;
}

const AppStore = createAppStore();

export default AppStore;
