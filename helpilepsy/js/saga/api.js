import { listUrl, addUrl } from '../constants';
import { call, all } from 'redux-saga/effects';


function* getListFromApi() {
    const response = yield fetch(listUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: '',
      });
    
      if (!response.ok) {
        throw response.status;
      }
    
      const data = yield response.json();
      const list = data.appointment
      console.log(list,'list')
      return list;
}

//send POST request to add new Movie
function* InsertNewAppointment(appointment) {

    const response = yield fetch(addUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Neurologist: appointment.Neurologist,
          Type: appointment.Type,
          Hour : Number(appointment.Hour),
          Date : appointment.Date,
          Remarks: appointment.Remarks
        }),
    });
    //yield console.log(`response = ${JSON.stringify(response)}`); 
    //return yield (response.status === 201);//true or false
     yield response.json()
     response.status === 201 ?  true : false
}
export const Api = {
    getListFromApi,
    InsertNewAppointment
};

   

