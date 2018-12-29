import React, { Component } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import { connect } from "react-redux";
import RoundedButton from "../Components/RoundedButton";

// Styles
import { ApplicationStyles, Fonts, Images, Colors, Metrics } from "../Themes/";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    console.log("LOGIN SCREEN LOADED");
  }

  handleLogin = () => {
    const { email, password } = this.state;
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <RoundedButton onPress={this.handleLogin} text="Login" />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
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
});
