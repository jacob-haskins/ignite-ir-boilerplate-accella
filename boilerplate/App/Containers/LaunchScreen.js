import React, { Component } from "react"
import { ScrollView, Text, Image, View, StyleSheet } from "react-native"

// Styles
import { Styles, Fonts, Images, Colors } from "../Themes/"

var Spinner = require("react-native-spinkit")

export default class LaunchScreen extends Component {
	render() {
		return (
			<View style={styles.mainContainer}>
				<View style={styles.launchContainer}>
					<Spinner type="ThreeBounce" color={Colors.white} />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	...Styles,
	launchContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	}
})
