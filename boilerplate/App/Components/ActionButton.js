import React, { Component } from "react"
import PropTypes from "prop-types"
import RectangleButton from "react-native-button-component"
import { StyleSheet, View } from "react-native"
import { Fonts, Colors, Styles } from "../Themes/"

export default class ActionButton extends Component {
	static propTypes = {
		text: PropTypes.string,
		loadingText: PropTypes.string,
		onPress: PropTypes.func,
		buttonState: PropTypes.string,
		buttonStyle: PropTypes.string
	}

	static defaultProps = {
		buttonState: "idle",
		buttonStyle: "darkPill"
	}

	constructor(props) {
		super(props)
	}

	render() {
		this.buttonStates = {
			disabled: {
				text: this.props.text,
				disabled: true
			},
			idle: {
				text: this.props.text,
				onPress: this.props.onPress,
				disabled: false
			},
			loading: {
				text: this.props.loadingText,
				spinner: true,
				disabled: false
			}
		}
		return (
			<View>
				{this.props.buttonStyle === "darkPill" && (
					<RectangleButton
						style={styles.darkPillButtonStyle}
						textStyle={styles.darkPillButtonText}
						backgroundColors={[Colors.darkBlue, Colors.darkBlue]}
						spinnerColor={Colors.white}
						spinnerType="ThreeBounce"
						buttonState={this.props.buttonState}
						states={this.buttonStates}
					/>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	darkPillButtonText: {
		letterSpacing: 1,
		fontSize: 18,
		color: Colors.white,
		...Styles.mediumFont
	},
	darkPillButtonStyle: {
		height: 50,
		borderRadius: 50
	}
})
