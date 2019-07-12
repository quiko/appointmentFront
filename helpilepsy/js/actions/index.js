import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
  FETCH_BY_ID,
  DELETE_APPOINTMENT
} from "./actionTypes";

export const fetchAction = sort =>{
    return {
        type : FETCH_APPOINTMENTS,
        sort
    }
};

export const fetchSuccessAction = list =>{
    return {
        type : FETCH_SUCCESS,
        list
    }
};

export const fetchFailAction = error =>{
    return {
        type : FETCH_FAIL,
        error
    }
};

export const addAction = appointment =>{
    
    return {
        type : ADD_APPOINTMENT,
        payload : appointment
    }

};

/*export const fetchById = appointment =>{
    return{
        type : FETCH_BY_ID,
        payload : appointment
    }
};
export const editAction = updated =>{
    return{
        type: EDIT_APPOINTMENT,
        payload : updated
    }
}*/