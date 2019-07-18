import React, { Component } from "react";
import { View, Text } from 'react-native';
import PropTypes from "prop-types";
import DatePicker from "react-native-datepicker";

export default class MyDatePicker extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { onChange, value, touched, error } = this.props;
    return (
      <View>
      <DatePicker
        style={{ width: 200 }}
        date={value}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2020-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={date => onChange(date)}
      />
      {touched && (error && <Text>{error}</Text>)}
      </View>
    );
  }
}
