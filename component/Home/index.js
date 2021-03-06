import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../../styles";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.home}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AppointmentsList")}
          style={styles.homeButton}
        >
          <Text style={styles.buttonText}>APPOINTMENTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("AppointmentForm")}
          style={styles.homeButton}
        >
          <Text style={styles.buttonText}>NEW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
