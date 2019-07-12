import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text } from "react-native";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer
  };
};

class AppointmentItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.data.map(appointment =>
      appointment !== undefined ? (
        <TouchableOpacity
          key={appointment._id}
          onPress={() => this.props.navigation.navigate("AppointmentForm",{id : appointment._id})}
        >
          <Text>{appointment.Neurologist}</Text>
          <View>
            <Text>
              {appointment.Date.slice(0, 10)}
              <Text> at </Text>
              {appointment.Hour} pm
            </Text>
            <Text>{appointment.Type}</Text>
          </View>
        </TouchableOpacity>
      ) : null
    );
  }
}

export default connect(mapStateToProps)(AppointmentItem);
