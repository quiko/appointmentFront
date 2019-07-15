import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
//import  _  from "lodash";
import AppointmentItem from "../appointmentItem/index";
import {
  fetchAction,
  fetchSuccessAction,
  fetchFailedAction
} from "../../js/actions/index";

const mapStateToProps = state => {
  return {
    data: state.appointmentsReducer
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchAction: () => dispatch(fetchAction())
  };
};

class AppointmentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.onFetchAction();
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data === nextProps.data) {
      return false;
    } else {
      return true;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    for (let i; i++; i < prevProps.data) {
      for (let j; j++; j < this.props.data) {
        if (
          prevProps.data.length !== this.props.data.length ||
          prevProps.data[i] !== this.props.data[j]
        ) {
          this.props.onFetchAction();
        }
      }
    }
  }

  render() {
    console.log(this.props);
    return (
      <ScrollView
        maximumZoomScale={3}
        minimumZoomScale={0.2}
        keyboardDismissMode="on-drag"
      >
        <AppointmentItem navigation={this.props.navigation} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AppointmentForm")}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentsList);
