import { put, takeLatest, all, call, delay, select } from "redux-saga/effects";
import { 
  getProfileApi,
  confirmEmailApi, 
  updateUserApi,
  changePasswordApi
} from "../../app/api/authCrud";
import authActionTypes from "./types";
import authActions from "./actions";

const { 
  setAuthToken, 
  requestUser, 
  requestUsers, 
  requestDataFailure, 
  logout, 
  requestStat,
  setMessage,
  clear404Error,
  setProfile,
} = authActions;

const userToken = (state) => state.auth.authToken;

export function* getSnapshotFromUserAuth({ payload: { token } }) {
  try {
    const { key } = token
    const user = yield getProfileApi(key).then(function (response) {
      return response.data;
    });
    // const stat = yield getStatApi(key).then(function (response) {
    //   return response.data;
    // });
    // const users = yield getUsersApi(key).then(function (response) {
    //   return response.data;
    // });
    // const investments = yield getInvestmentsApi(key).then(function (response) {
    //   return response.data;
    // });
    // console.log(user)
    if (user) {
      yield put(requestUser(user));
      // yield put(requestStat(stat));
      // yield put(requestUsers(users));
    }
  } catch (error) {
    yield put(
      requestDataFailure(
        error.response
          ? error.response.data.message || error.response.data.error
          : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
      )
    );
  }
}

export function* signInSuccess({ payload: { userAuth } }) {
  const { access_token, expires_in } = userAuth;
  const date = new Date();
  const expireDate = date.getTime() + expires_in * 1000;
  const token = {
    key: access_token,
    expire: expireDate
  };
  yield put(setAuthToken(token));
}

export function* isUserAuthenticated() {
  try {
    yield put(clear404Error(false));
    const token = yield select(userToken);
    const { expire } = token
    if (expire && new Date(expire) <= new Date(Date.now())) {
      yield delay(3000);
      yield put(logout());
    } else {
      yield put(setAuthToken(token));
    }
  } catch (error) {
      console.log(error)
  }
}

export function* startConfirmEmail({ payload: { uid } }) {
  try {
    const token = yield select(userToken);
    const { key } = token
    const res = yield confirmEmailApi(key, uid).then(function (response) {
      return response.data;
    });
    if (res) {
      yield put(setMessage({ type: 'success', message: res.message }));
      yield put(setAuthToken(token));
      yield delay(6000);
      yield put(setMessage(null));
    }
  } catch (error) {
    const errorMsg = error.response
      ? error.response.data.message || error.response.data.error
      : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
    yield put(
      setMessage({
        type: 'error',
        message: errorMsg
      })
    );
    yield delay(8000);
    yield put(setMessage(null));
  }
}

export function* startUpdateUser({ payload: { data } }) {
  try {
    const token = yield select(userToken);
    const { key } = token
    const res = yield updateUserApi(key, data).then(function (response) {
      return response.data;
    });
    if (res) {
      yield put(setMessage({ type: 'success', message: res.message }));
      yield put(setAuthToken(token));
      yield delay(6000);
      yield put(setMessage(null));
    }
  } catch (error) {
    const errorMsg = error.response
      ? error.response.data.message || error.response.data.error
      : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
    yield put(
      setMessage({
        type: 'error',
        message: errorMsg
      })
    );
    yield delay(8000);
    yield put(setMessage(null));
  }
}

export function* startChangePassword({ payload: { data } }) {
  try {
    const token = yield select(userToken);
    const { key } = token
    const res = yield changePasswordApi(key, data).then(function (response) {
      return response.data;
    });
    if (res) {
      yield put(setMessage({ type: 'success', message: res.message }));
      yield put(setAuthToken(token));
      yield delay(6000);
      yield put(setMessage(null));
    }
  } catch (error) {
    const errorMsg = error.response
      ? error.response.data.message || error.response.data.error
      : "Oops!!, Poor internet connection, Please check your connectivity, And try again"
    yield put(
      setMessage({
        type: 'error',
        message: errorMsg
      })
    );
    yield delay(8000);
    yield put(setMessage(null));
  }
}

export function* signOut() {
  yield delay(3000);
  yield put(logout());
}

export function* onSignInStart() {
  yield takeLatest(authActionTypes.LoginSuccess, signInSuccess);
}

export function* onGetUserSnapshot() {
  yield takeLatest(authActionTypes.SetAuth, getSnapshotFromUserAuth);
}

export function* onCheckUserSession() {
  yield takeLatest(authActionTypes.CheckUserSession, isUserAuthenticated);
}



export default function* authSagas() {
  yield all([
    call(onSignInStart),
    call(onGetUserSnapshot),
    call(onCheckUserSession),
  ]);
}