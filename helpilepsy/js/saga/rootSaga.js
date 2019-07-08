//Saga effects
import { fork, call } from "redux-saga/effects";
import { watchFetchList, watchAddAppointment } from "./appointmentsSaga";

export default function* rootSaga() {
 /* yield [
      fork(watchFetchList), 
      fork(watchAddAppointment)
    ];*/
    yield fork (watchFetchList)
    yield fork (watchAddAppointment)
}
