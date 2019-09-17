import { createStackNavigator } from "react-navigation-stack";

import Photo from '../screen/photo'
import Login from '../screen/login'
import Main from '../screen/main'

const AppNavigator = createStackNavigator({
    Login: Login,
    Main: Main,
    Photo: Photo
  }, {
    initialRouteName: "Login",
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  });

export default AppNavigator