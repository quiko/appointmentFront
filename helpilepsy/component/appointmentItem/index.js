import React, { Component } from "react";
import { connect } from "react-redux";
import { TouchableOpacity, View, Text, Button } from "react-native";
import { deleteAction } from "../../js/actions/index";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer,
    
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDeleteAction: deleted => dispatch(deleteAction(deleted))
  };
};

class AppointmentItem extends Component {
  constructor(props) {
    super(props);
  }

  deleteAppointment = appointment => {
    this.props.onDeleteAction(appointment);
  };

  render() {
    return this.props.data.map(appointment =>
      appointment !== undefined ? (
        <View key={appointment._id}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("AppointmentForm", {
                id: appointment._id
              })
            }
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
          <Button
            //onPress={this.deleteAppointment(appointment._id)}
            title="D"
          >
            D
          </Button>
        </View>
      ) : null
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentItem);
