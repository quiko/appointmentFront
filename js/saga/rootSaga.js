//Saga effects
import { fork, call } from "redux-saga/effects";
import { watchFetchList, watchAddAppointment , watchEditAppointment} from "./appointmentsSaga";

export default function* rootSaga() {
    yield fork (watchFetchList)
    yield fork (watchAddAppointment)
    yield fork (watchEditAppointment)
}
