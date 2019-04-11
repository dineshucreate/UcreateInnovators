import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { backgroundImage } from "../../assets/images/images";
import MenuButton from "../../components/menubutton";
export default class News extends Component {
  headerButtonClicked() {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            this.headerButtonClicked();
          }}
        >
          <MenuButton />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerButton: {
    paddingLeft: 10,
    paddingTop: 49
  }
});
