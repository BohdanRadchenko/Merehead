import { ActionTypes } from "../actionTypes";

//USERS GET ALL
export const usersRequest = () => ({
  type: ActionTypes.USERS_REQUEST,
});

export const usersSuccess = response => ({
  type: ActionTypes.USERS_SUCCESS,
  payload: response,
});

export const usersError = error => ({
  type: ActionTypes.USERS_ERROR,
  payload: error,
});

//USER UPDATE
export const updateUserRequest = () => ({
  type: ActionTypes.USER_UPDATE_REQUEST,
});

export const updateUserSuccess = response => ({
  type: ActionTypes.USER_UPDATE_SUCCESS,
  payload: response,
});

export const updateUserError = error => ({
  type: ActionTypes.USER_UPDATE_ERROR,
  payload: error,
});

//USER CREATE
export const createUserRequest = () => ({
  type: ActionTypes.USER_CREATE_REQUEST,
});

export const createUserSuccess = response => ({
  type: ActionTypes.USER_CREATE_SUCCESS,
  payload: response,
});

export const createUserError = error => ({
  type: ActionTypes.USER_CREATE_ERROR,
  payload: error,
});

//USER DELETE BY ID
export const deleteUserRequest = () => ({
  type: ActionTypes.USER_DELETE_REQUEST,
});

export const deleteUserSuccess = response => ({
  type: ActionTypes.USER_DELETE_SUCCESS,
  payload: response,
});

export const deleteUserError = error => ({
  type: ActionTypes.USER_DELETE_ERROR,
  payload: error,
});