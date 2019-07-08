import { createStackNavigator, createAppContainer } from "react-navigation";
import AppointmentsList from "../component/appointmentList/index";
import AppointmentForm from "../component/Form/index";

const AppStackNavigator = createStackNavigator({
  AppointmentsList: {
    screen: AppointmentsList,
    navigationOptions: {
      title: "  List"
    }
  },
  AppointmentForm: {
    screen: AppointmentForm,
    navigationOptions: {
      title: " Details"
    }
  }

});

export default createAppContainer(AppStackNavigator);
