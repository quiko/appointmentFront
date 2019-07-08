import {
  FETCH_APPOINTMENTS,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_APPOINTMENT,
  EDIT_APPOINTMENT,
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
        appointment
    }
}