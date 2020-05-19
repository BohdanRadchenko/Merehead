import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes';

const usersReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_SUCCESS:
      return payload

    case ActionTypes.USER_CREATE_SUCCESS:
      return [...state, payload]

    case ActionTypes.USER_UPDATE_SUCCESS:
      return state =  state.map(user => {
        if (user.id === payload.id) {
          return payload
        }
        return user
      })

    default:
      return state;
  }
};

const loadingReducer = (state = false, {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_REQUEST:
      return true;

    case ActionTypes.USERS_SUCCESS:
    case ActionTypes.USERS_ERROR:
      return false;

    default:
      return state;
  }
};

const error = (state = null, {type, payload}) => {
  switch (type) {
    case ActionTypes.USERS_ERROR:
      return payload.error;

    case ActionTypes.USERS_REQUEST:
    case ActionTypes.USERS_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  users: usersReducer,
  loading: loadingReducer,
  error,
});
