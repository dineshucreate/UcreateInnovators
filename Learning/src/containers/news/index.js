import React, { Component } from "react";
import {
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SegmentedControlIOS,
  FlatList
} from "react-native";
import { backgroundImage } from "../../assets/images/images";
import MenuButton from "../../components/menubutton";
import {secondaryKeyColor} from '../../utilities/constants'
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
        <TouchableOpacity style={styles.styleHeaderButtonSelect}>
          <Text style={styles.styleHeaderTextSelect}>News</Text>
        </TouchableOpacity>
        <SegmentedControlIOS
          selectedIndex={0}
          style={styles.styleSegmentControl}
          tintColor={secondaryKeyColor}
          values={["News", "Video"]}
        />
        {/* <FlatList></FlatList> */}
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
  styleHeaderButtonSelect: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10
  },
  styleHeaderTextSelect: {
    fontSize: 30,
    fontFamily: "Rajdhani-Bold",
    color: "white"
  },
  styleSegmentControl: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
});
