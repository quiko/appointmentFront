import { FETCH_APPOINTMENTS, FETCH_SUCCESS, FETCH_FAIL, ADD_APPOINTMENT } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './api';

function* fetchList() {
    try {
        const list = yield Api.getListFromApi();   
        yield put({ type: FETCH_SUCCESS, list: list });     
    } catch (error) {        
        yield put({ type: FETCH_FAIL, error });
    }
}
export function* watchFetchList() {
    yield takeLatest(FETCH_APPOINTMENTS, fetchList);
}

function* addNewAppointment(action) {            
    try {
        const result = yield Api.InsertNewAppointment(action.appointment);
        if (result === true) {
            yield put({ type: FETCH_APPOINTMENTS, sort: 'desc'});     
        }
    } catch (error) {        
        console.log(error)
    }
}
export function* watchAddAppointment() {            
    yield takeLatest(ADD_APPOINTMENT, addNewAppointment);
}