import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  AsyncStorage,Dimensions
} from "react-native";
import {
  backgroundImage,
  friendPlaceHolderImage
} from "../../assets/images/images";
import User from "../../Utilities/Models/User";
export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      stickerUrl: "",
      user:''
    };
  }
  toggleDrawer() {
    this.props.navigation.toggleDrawer();
  }

  async componentDidMount() {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    this.state.user = user
    this.state.stickerUrl = user.stickerUrl;
    this.forceUpdate();
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={backgroundImage}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            this.toggleDrawer();
          }}
        >
          <Text style={styles.headerText}>Done</Text>
        </TouchableOpacity>
        <View style={styles.view}>
          <Image
            style={styles.image}
            source={
              this.state.stickerUrl != null
                ? { uri: this.state.stickerUrl }
                : friendPlaceHolderImage
            }
          />
          <View style={styles.styleFootbaliseMe}>
          <TouchableOpacity style={styles.styleFootbaliseMeButton}><Text style={styles.styleText}>{this.state.stickerUrl ? 'My Sticker' : 'Footbalise Me'}</Text></TouchableOpacity>
          </View>
          <Text style={styles.styleTextUsername}>{this.state.user.firstName} {this.state.user.lastName}</Text>
        </View>
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
    fontSize: 17,
  },
  view: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: Dimensions.get('window').width/3.2,
    height: Dimensions.get('window').width/3.2 * 1.33,
    borderColor:'white',
    borderRadius:5,
    borderWidth:7,
    position:'relative',
    justifyContent:'center',
  },
  styleFootbaliseMe :{
    position:'absolute',
    height: Dimensions.get('window').width/3.2 * 1.35,
    width: Dimensions.get('window').width/2.8,
    // backgroundColor:'white',
    justifyContent:'flex-end'
  },
  styleFootbaliseMeButton:{
    backgroundColor:'white',
    borderRadius:5,
    height:28,
    justifyContent:'center',
    backgroundColor:'#A5E26A'
  },
  styleText:{
    textAlign:'center',
    fontFamily:'Rajdhani-Bold',
    fontSize:16,
    color:'#096B76'
  },
  styleTextUsername:{
    textAlign:'center',
    fontFamily:'Rajdhani-Bold',
    fontSize:32,
    color:'white',
    marginTop:10
  }
});
