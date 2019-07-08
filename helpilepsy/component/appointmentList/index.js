import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import AppointmentItem from '../appointmentItem/index';
import {
    fetchAction,
    fetchSuccessAction,
    fetchFailedAction
  } from "../../js/actions/index";



const mapStateToProps = state =>{
    return {
        data: state.appointmentsReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onFetchAction :() => dispatch(fetchAction())
    };
  };

class AppointmentsList extends Component {
    constructor(props){
        super(props);
        this.state = {  }

    }

   componentDidMount() {
       this.props.onFetchAction()
      }
    
    render() { 
        console.log(this.props)
        return ( 
            <View>
                <AppointmentItem  data ={this.props.data}/>
                <TouchableOpacity  onPress={()=> this.props.navigation.navigate('AppointmentForm')}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
         );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps) (AppointmentsList);