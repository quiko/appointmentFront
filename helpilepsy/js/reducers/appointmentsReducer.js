import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT
} from "../actions/actionTypes";

const appointmentsReducer = (list = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return action.list;
    case FETCH_FAIL:
      return [];
    case ADD_APPOINTMENT:
      return [...list, action.appointment];
    /*case FETCH_BY_ID:
    return [];
    case EDIT_APPOINTMENT:
    return []*/
    default:
      return list; //state does not change
  }
};
export default appointmentsReducer;
