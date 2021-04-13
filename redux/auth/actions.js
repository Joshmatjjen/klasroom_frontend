import actionTypes from "./types";

export const actions = {
  checkUserSession: () => ({ type: actionTypes.CheckUserSession }),
  successLogin: userAuth => ({ type: actionTypes.LoginSuccess, payload: { userAuth } }),
  setProfile: profile => ({ type: actionTypes.SetProfile, payload: { profile } }),
  failureLogin: error => ({ type: actionTypes.LoginFailure, payload: { error } }),
  setAuthToken: token => ({ type: actionTypes.SetAuth, payload: { token } }),
  requestUser: user => ({ type: actionTypes.RequestUser, payload: { user } }),
  requestStat: stat => ({ type: actionTypes.RequestStat, payload: { stat } }),
  requestUsers: users => ({ type: actionTypes.RequestUsers, payload: { users } }),
  confirmEmail: uid => ({ type: actionTypes.ConfirmEmail, payload: { uid } }),
  updateUser: data => ({ type: actionTypes.UpdateUser, payload: { data } }),
  changePassword: data => ({ type: actionTypes.ChangePassword, payload: { data } }),
  requestDataFailure: error => ({ type: actionTypes.RequestDataFailure, payload: { error } }),
  setMessage: message => ({ type: actionTypes.SetMessage, payload: { message } }),
  set404Error: error404 => ({ type: actionTypes.Set404Error, payload: { error404 } }),
  clear404Error: error404 => ({ type: actionTypes.Clear404Error, payload: { error404 } }),
  logout: () => ({ type: actionTypes.Logout }),
};

export default actions;