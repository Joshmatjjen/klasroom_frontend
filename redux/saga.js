import { all } from 'redux-saga/effects';
import authSaga from './auth/sagas';


export default function* combineSaga(getState) {
    yield all([
        authSaga(),
    ]);
}
