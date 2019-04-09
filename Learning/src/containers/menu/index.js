import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  AsyncStorage,
  Dimensions
} from "react-native";
import {
  backgroundImage,
  friendPlaceHolderImage,
  arrowRight
} from "../../assets/images/images";
import User from "../../Utilities/Models/User";
import {underDevelopmentAlert} from '../../Utilities/CommonFunctions'
import { StackActions } from "react-navigation";
import FriendList from "../../containers/friendlist";
export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      stickerUrl: "",
      user: "",
      screens: [
        { value: "Get Friends" },
        { value: "Friends Album" },
        { value: "Football GIFs" },
        { value: "My Account" },
        { value: "Change Team" },
        { value: "About I'M Football" },
        { value: "I'M Football Privacy Policy" },
        { value: "Terms of Use" },
        { value: "Logout" }
      ]
    };
  }
  toggleDrawer() {
    this.props.navigation.toggleDrawer();
  }

  onItemClick(item, index) {
    if(index==1) {
      const pushAction = StackActions.push({
        routeName: "FriendList"
      });
  
      this.props.navigation.dispatch(pushAction);
    } else {
      underDevelopmentAlert()
    }
  }

  async componentDidMount() {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    this.state.user = user;
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
            <TouchableOpacity style={styles.styleFootbaliseMeButton}>
              <Text style={styles.styleText}>
                {this.state.stickerUrl ? "My Sticker" : "Footbalise Me"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.styleTextUsername}>
            {this.state.user.firstName} {this.state.user.lastName}
          </Text>
        </View>
        <FlatList
            contentContainerStyle={styles.styleFlatList}
            data={this.state.screens}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={()=>{this.onItemClick(item, index)}}
              style={((index==2) || (index==3) || (index==5)) ? styles.styleItemFlatList : styles.styleItemFlatList1}><Text style={styles.styleItemText}>{item.value}</Text><Image style={styles.styleItemImage} source={arrowRight}></Image></TouchableOpacity>
            )}
          />
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
  view: {
    alignItems: "center"
  },
  image: {
    width: Dimensions.get("window").width / 3.2,
    height: (Dimensions.get("window").width / 3.2) * 1.33,
    borderColor: "white",
    borderRadius: 5,
    borderWidth: 7,
    position: "relative",
    justifyContent: "center"
  },
  styleFootbaliseMe: {
    position: "absolute",
    height: (Dimensions.get("window").width / 3.2) * 1.35,
    width: Dimensions.get("window").width / 2.8,
    // backgroundColor:'white',
    justifyContent: "flex-end"
  },
  styleFootbaliseMeButton: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 28,
    justifyContent: "center",
    backgroundColor: "#A5E26A"
  },
  styleText: {
    textAlign: "center",
    fontFamily: "Rajdhani-Bold",
    fontSize: 16,
    color: "#096B76"
  },
  styleTextUsername: {
    textAlign: "center",
    fontFamily: "Rajdhani-Bold",
    fontSize: 32,
    color: "white",
    marginTop: 10
  },
  styleFlatList: {
    marginTop:25,
    marginLeft:8,
    marginRight:8,
    marginBottom:8,
  },
  styleItemFlatList:{
    height:48,
    flexDirection:'row',
    backgroundColor:'white',
    marginTop:10,
  },
  styleItemFlatList1:{
    height:48,
    flexDirection:'row',
    backgroundColor:'white',
    // borderTopLeftRadius:2,
    // borderTopRightRadius:2,
    // borderBottomLeftRadius:2,
    // borderBottomRightRadius:2,
  },
  styleItemText:{
    paddingLeft:20,
    fontFamily:'Rajdhani-Medium',
    fontSize:17,
    paddingTop:13
  },
  styleItemImage:{
    position:'absolute',
    width:10,
    height:10,
    marginTop:18,
    marginLeft:Dimensions.get("window").width - 45
  }
});
