import React, { Component } from "react";
import { ScrollView, Text, Image, View, StyleSheet } from "react-native";

// Styles
import { ApplicationStyles, Fonts, Images, Colors } from "../Themes/";

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
});
