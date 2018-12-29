import { createStackNavigator, createSwitchNavigator } from "react-navigation"
import LaunchScreen from "../Containers/LaunchScreen"
import LoginScreen from "../Containers/LoginScreen"

import styles from "./Styles/NavigationStyles"

const AuthenticationNavigator = createStackNavigator(
	{
		LoginScreen: { screen: LoginScreen }
	},
	{
		headerMode: "none"
	}
)

const AppNavigator = createSwitchNavigator({
	Auth: AuthenticationNavigator,
	Home: LaunchScreen
})

export default AppNavigator
