import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { View, Text, TextInput, Picker } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyDatePicker from "./DatePicker";
import { addAction, editAction } from "../../js/actions/index";
//import styles from "../../app.scss";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer,
    initialValues : state.params !== undefined ? 
    data.find(item => item._id === state.params.id)
    :
    null

  };
};

const mapDispatchToProps = dispatch => {
  return {
    AddAppointment: values => dispatch(addAction(values)),
    EditAppointment : values => dispatch(editAction(values))
  };
};

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  renderSelectDate = ({ input: { onChange, ...restInput } }) => {
    return <MyDatePicker {...restInput} onChange={onChange} />;
  };

  renderSelect = ({ input: { onChange, ...restInput } }) => {
    return (
      <Picker
        {...restInput}
        //selectedValue= {}
        onValueChange={onChange}
      >
        {/*<Picker.item  label = "Choose a type" value ="Choose a type"/>*/}
        <Picker.Item label="First visit" value="First visit" />
        <Picker.Item label="Follow up" value="Follow up" />
        <Picker.Item label="MRI" value="MRI" />
        <Picker.Item label="EEG" value="EEG" />
      </Picker>
    );
  };

  renderHour = ({ input: { onChange, ...restInput } }) => {
    return (
      <Picker
        {...restInput}
        //selectedValue= {}
        onValueChange={onChange}
      >
        {/*<Picker.item  label = "" value =""/>*/}
        <Picker.Item label="9" value="9" />
        <Picker.Item label="10" value="10" />
        <Picker.Item label="11" value="11" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>
    );
  };

  renderInput = ({ input: { onChange, ...restInput } }) => {
    return <TextInput onChangeText={onChange} {...restInput} />;
  };

  submit(values) {
    this.props.navigation.state.params === undefined ?
    this.props.AddAppointment(values)
    :
    this.props.EditAppointment(values)
    this.props.navigation.navigate("AppointmentsList");
  }

  render() {
    console.log('params',this.props.navigation.state.params)
    return (
      <View>
        <Text>Neurologist</Text>
        <Field name="Neurologist" type="text" component={this.renderInput} />
        <Text>Type</Text>
        <Field name="Type" type="select" component={this.renderSelect} />
        <Text>Date</Text>
        <Field name="Date" type="date" component={this.renderSelectDate} />
        <Text>Hour</Text>
        <Field name="Hour" type="select" component={this.renderHour} />
        <Text>Remarks</Text>
        <Field name="Remarks" type="text" component={this.renderInput} />

        <TouchableOpacity onPress={this.props.handleSubmit(this.submit)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default reduxForm({
  form: "Appointment",
  enableReinitialize : true 
})(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppointmentForm)
);
