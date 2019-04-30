import { createStackNavigator, createSwitchNavigator, createSwitchNavigator } from "react-navigation"
import LaunchScreen from "../Containers/LaunchScreen"
import LoginScreen from "../Containers/LoginScreen"

import { Styles, Fonts, Images, Colors } from "../Themes"

const standardHeader = {
	defaultNavigationOptions: {
		headerTintColor: Colors.white,
		headerTitleStyle: { color: Colors.white, ...Styles.mediumFont, fontSize: 20 },
		headerStyle: {
			backgroundColor: Colors.primaryBlue
		},
		headerBackTitle: null
	}
}

const AuthenticationNavigator = createStackNavigator(
	{
		LoginScreen: { screen: LoginScreen }
	},
	standardHeader
)

const HomeNavigator = createStackNavigator(
	{
		HomeScreen: { screen: LoginScreen }
	},
	standardHeader
)

const AppNavigator = createSwitchNavigator({
	Launch: { screen: LaunchScreen },
	Auth: AuthenticationNavigator,
	Home: HomeNavigator
})

export default createAppContainer(AppNavigator)
