import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage
} from "react-native";
import { backgroundImage } from "../../assets/images/images";
import User from '../../Utilities/Models/User'
export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
         stickerUrl:''
        }
    }
  toggleDrawer() {
    this.props.navigation.toggleDrawer();
  }

  async componentDidMount() {
    const response = await AsyncStorage.getItem('user')
    const user = JSON.parse(response)
    this.state.stickerUrl = user.stickerUrl
    this.forceUpdate()
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={backgroundImage}>
        <TouchableOpacity style={styles.headerButton} onPress={()=> {this.toggleDrawer()}}>
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
        <View style={styles.view}><Image style={styles.image} source={{uri: this.state.stickerUrl}}></Image></View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover"
  },
  headerButton: {
    paddingTop: 40,
    paddingLeft: 20
  },
  headerText: {
    color: "#A5E26A",
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 17
  },
  view:{
      flex:1,
      alignItems:'center'
  },
  image:{
      width:75,
      height:100,
      backgroundColor:'red'
  }
});
