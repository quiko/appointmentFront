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
    case EDIT_APPOINTMENT:
    return list; // do nothing
    case EDIT_SUCCESS:            
        return list.map(eachAppointment =>
            (eachAppointment.id.toString() === action.updated.id)
                ? { ...eachAppointment, 
                    Neurologist: action.updated.Neurologist, 
                    Type: action.updated.Type,
                    Date : action.updated.Date,
                    Hour : action.updated.Hour,
                    Remarks : action.updated.Remarks
                }
                : eachAppointment
)
    default:
      return list; //state does not change
  }
};
export default appointmentsReducer;



