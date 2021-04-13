import axios from "axios";
import { BASE_URL, getAuthHeader } from './utils'

export const LOGIN_URL= BASE_URL + "admin/auth/login" 
export const PROFILE_URL= BASE_URL + "admin/auth/profile"
export const USERS_URL= BASE_URL + "v1/users/"
export const STAT_URL= BASE_URL + "v1/stats/"
export const CONFIRM_EMAIL_URL= BASE_URL + "v1/confirm-email/"
export const UPDATE_USER_URL= BASE_URL + "v1/update/user/"
export const CHANGE_PASSWORD_URL= BASE_URL + "v1/change-password/"
export const RESET_PASSWORD_URL= BASE_URL + "v1/reset-password/"

// export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export function signInApi(email, password) {
  return axios.post(LOGIN_URL, { username: email, password });
}

export function getProfileApi(authToken) {
  return axios.get(PROFILE_URL, {
    headers: getAuthHeader(authToken)
  });
}

export function resetPassword(email) {
  return axios.post(RESET_PASSWORD_URL, { email });
} 

export function getStatApi(authToken) {
  return axios.get(STAT_URL, {
    headers: getAuthHeader(authToken)
  });
}

export function getUserByIdApi(authToken, uid) {
  return axios.get(USERS_URL + uid, {
    headers: getAuthHeader(authToken)
  });
}

export function getUsersApi(authToken) {
  return axios.get(USERS_URL, {
    headers: getAuthHeader(authToken)
  });
}

export function confirmEmailApi(authToken, uid) {
  return axios.get(CONFIRM_EMAIL_URL + uid, {
    headers: getAuthHeader(authToken)
  });
}

export function updateUserApi(authToken, data) {
  return axios.put(UPDATE_USER_URL, data, {
    headers: getAuthHeader(authToken)
  });
}

export function changePasswordApi(authToken, data) {
  return axios.put(CHANGE_PASSWORD_URL, data, {
    headers: getAuthHeader(authToken)
  });
}
