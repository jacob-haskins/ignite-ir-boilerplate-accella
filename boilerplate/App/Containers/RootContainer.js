import React, { Component } from "react"
import { View, StatusBar, StyleSheet } from "react-native"
import AppNavigator from "../Navigation/AppNavigation"

// Styles
import { Styles, Fonts, Images, Colors } from "../Themes/"

export default class RootContainer extends Component {
	componentDidMount() {
		this.props.startup()
	}

	render() {
		return (
			<View style={styles.applicationView}>
				<StatusBar barStyle="light-content" />
				<AppNavigator />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	...Styles,
	applicationView: {
		flex: 1
	}
})
