import * as api from '../services'
import {
  createUserRequest,
  createUserSuccess,
  deleteUserRequest,
  updateUserRequest,
  updateUserSuccess,
  usersRequest,
  usersSuccess
} from './usersActions';

export const handleUsers = () => dispatch => {
  dispatch(usersRequest());
  return api.users().all()
      .then(response => {
        return dispatch(usersSuccess(response.data));
      })
  // .catch(error => dispatch(usersError(error)));
};

export const handleDeleteUser = id => dispatch => {
  dispatch(deleteUserRequest());
  return api.users().remove(id)
      .then(response => {
        api.users().all().then(response => {
          return dispatch(usersSuccess(response.data));
        })
      })
  // .catch(error => dispatch(deleteUserError(error)));
};

export const handleUpdateUser = (id, body) => dispatch => {
  dispatch(updateUserRequest());
  return api.users().update(id, body)
      .then(response => {
        return dispatch(updateUserSuccess(response.data));
      })
  // .catch(error => dispatch(deleteUserError(error)));
};

export const handleCreateUser = data => dispatch => {
  dispatch(createUserRequest());
  return api.users().create(data)
      .then(response => {
        return dispatch(createUserSuccess(response.data));
      })
  // .catch(error => dispatch(deleteUserError(error)));
};
