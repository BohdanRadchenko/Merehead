import {combineReducers} from 'redux';
import {ActionTypes} from '../actionTypes';

const editModalReducer = (state = false, {type, payload}) => {
  switch (type) {
    case ActionTypes.EDIT_MODAL_OPEN:
      return true;

    case ActionTypes.EDIT_MODAL_CLOSE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  modal: editModalReducer,
});