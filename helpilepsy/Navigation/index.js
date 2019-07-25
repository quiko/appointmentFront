import { createStackNavigator, createAppContainer } from "react-navigation";
import AppointmentsList from "../component/appointmentList/index";
import AppointmentForm from "../component/Form/index";
import Home from "../component/Home/index";

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerStyle: { backgroundColor: "#e91e63" },
      headerTitleStyle: { color: "#fff", textAlign :"center",flex :1 },
     
    }
  },
  AppointmentsList: {
    screen: AppointmentsList,
    navigationOptions: {
      title: "  List",
      headerStyle: { backgroundColor: "#e91e63" },
      headerTitleStyle: { color: "#fff"}
    }
  },
  AppointmentForm: {
    screen: AppointmentForm,
    navigationOptions: {
      title: " Details",
      headerStyle: { backgroundColor: "#e91e63" },
      headerTitleStyle: { color: "#fff" }
    }
  }
});

export default createAppContainer(AppStackNavigator);
