import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { menuIcon } from "../../assets/images/images";
import {secondaryKeyColor} from '../../utilities/constants'
export default class MenuButton extends Component {
  render() {
    return <Image style={styles.styleMenuIcon} source={menuIcon} />;
  }
}

const styles = StyleSheet.create({
  styleMenuIcon: {
    width: 28,
    height: 28,
    tintColor: secondaryKeyColor
  }
});
