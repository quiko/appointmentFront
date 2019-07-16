import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
  DELETE_APPOINTMENT,
  EDIT_SUCCESS
} from "../actions/actionTypes";

const appointmentsReducer = (list = [], action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return action.list;
  case FETCH_FAIL:
    return [];
  case ADD_APPOINTMENT:
    return [...list, action.appointment];
  case EDIT_SUCCESS:
    return list.map(eachAppointment =>
      eachAppointment._id === action.updated._id
        ? { ...eachAppointment, ...action.updated }
        : eachAppointment
    );
  case DELETE_APPOINTMENT:
  const filteredAppointment = list.filter(eachAppointment => {                
  eachAppointment._id !== action.deleted;
});
return filteredAppointment;
  default:
    return list; //state does not change
  }
};
export default appointmentsReducer;
