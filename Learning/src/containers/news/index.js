import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { backgroundImage, menuIcon } from "../../assets/images/images";
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
          <Image style={styles.styleMenuIcon} source={menuIcon} />
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
  },
  styleMenuIcon: {
    width: 28,
    height: 28
  }
});
