import React, { Component } from "react"
import { ScrollView, Text, Image, View, StyleSheet, TextInput, Button } from "react-native"
import { connect } from "react-redux"
import ActionButton from "../../Components/ActionButton"

// Styles
import { Styles, Fonts, Images, Colors, Metrics } from "../../Themes"

class LoginScreen extends Component {
	constructor(props) {
		super(props)
		this.state = { username: "", password: "", authFailure: false, buttonState: "disabled" }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.username && this.state.password) {
			if (this.state.buttonState == "disabled") {
				this.setState({ buttonState: "idle" })
			}
		}
	}

	handleLogin = () => {
		const { email, password } = this.state
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<TextInput
					style={styles.textInput}
					autoCapitalize="none"
					placeholder="Username"
					onChangeText={username => this.setState({ username })}
					value={this.state.username}
				/>
				<TextInput
					secureTextEntry
					style={styles.textInput}
					autoCapitalize="none"
					placeholder="Password"
					onChangeText={password => this.setState({ password })}
					value={this.state.password}
				/>
				<ActionButton
					text="SIGN IN"
					loadingText="SIGNING IN"
					onPress={this.handleLogin}
					buttonState={this.state.buttonState}
				/>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScreen)

const styles = StyleSheet.create({
	...Styles.screen,
	loginButton: {
		backgroundColor: Colors.silver,
		height: 40,
		flex: 1
	},
	textInput: {
		height: 40,
		backgroundColor: Colors.silver,
		marginTop: 8,
		paddingHorizontal: 10,
		marginHorizontal: Metrics.section
	}
})
