import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  ActionSheetIOS
} from "react-native";
import {
  backgroundImage,
  friendPlaceHolderImage,
  fbIcon,
  logoWhite,
  backButton
} from "../../assets/images/images";
import { consumeGetAPI } from "../../Utilities/ServerRequest";
import { TextInput } from "react-native-gesture-handler";
import { NavigationActions, StackActions } from "react-navigation";
import { underDevelopmentAlert } from "../../Utilities/CommonFunctions";
import User from "../../Utilities/Models/User";
import HeaderButton from "../../components/headerbutton";
import customAlertView from "../../components/customalertview";
export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      arrFiltered: [],
      txt: null,
      text: "",
      loading: false
    };
  }

  onClickItem(item) {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Chat", "Report User", "Remove This User"],
        cancelButtonIndex: 0
        // destructiveButtonIndex:1
      },
      buttonIndex => {
        if (buttonIndex == 3) {
          customAlertView(
            "Remove this user?",
            "Remove this user from My Friends. They will be blocked and can't connect again",
            "Remove",
            "Don't Remove",
            () => {
              this.state.loading = true;
              this.forceUpdate();
              let user = new User(null);
              user.removeFriend(
                item.userGUID,
                response => {
                  const obj = this.state.arrUsers.find(value => {
                    return value.userGUID == item.userGUID;
                  });
                  this.state.arrUsers.splice(
                    this.state.arrUsers.indexOf(obj),
                    1
                  );
                  this.state.arrFiltered = this.state.arrUsers.map(value => {
                    return value;
                  });
                  this.state.text = "";
                  this.state.loading = false;
                  this.forceUpdate();
                },
                error => {
                  alert(JSON.stringify(error));
                }
              );
            },
            () => {}
          );
        } else if (buttonIndex != 0) {
          underDevelopmentAlert();
        }
      }
    );
  }

  filterUsers(text) {
    this.state.text = text;
    this.state.arrFiltered = this.state.arrUsers.map(value => {
      return value;
    });
    if (text.length != 0) {
      this.state.arrFiltered = this.state.arrFiltered.filter(value => {
        return value.name.toLowerCase().includes(text.toLowerCase());
      });
    }
    this.forceUpdate();
  }

  goBack() {
    this.props.navigation.pop();
  }

  async componentDidMount() {
    if (this.state.txt) {
      this.state.txt.focus();
    }
    this.getFriends();
  }

  getFriends() {
    let user = new User(null);
    user.getFriendList(
      response => {
        this.state.loading = false;
        this.state.arrUsers = response;
        this.state.arrFiltered = response;
        this.forceUpdate();
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
  }

  render() {
    const arr = this.state.arrFiltered;
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <HeaderButton
          onPress={() => this.goBack()}
          style={styles.headerButton}
        />
        <TextInput
          ref={input => (this.state.txt = input)}
          placeholder="Search"
          autoCorrect={false}
          onChangeText={text => this.filterUsers(text)}
          value={this.state.text}
          style={styles.styleTextInput}
        />
        <FlatList
          numColumns={3}
          style={styles.list}
          data={this.state.arrFiltered}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.onClickItem(item)}>
              <View style={styles.styleFlatList}>
                <Image
                  style={styles.styleImage}
                  source={
                    item.stickerUrl
                      ? { uri: item.stickerUrl }
                      : friendPlaceHolderImage
                  }
                />
                <Text style={styles.GridViewTextLayout}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        {this.state.loading ? (
          <View style={styles.styleActivityIndicatorView}>
            <ActivityIndicator
              size="large"
              style={styles.styleActivityIndicator}
            />
          </View>
        ) : null}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  styleTextInput: {
    paddingLeft: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    height: 30,
    backgroundColor: "white",
    borderRadius: 2
  },
  container: {
    flex: 1
  },
  headerButton: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 40
  },
  list: {
    flex: 1,
    margin: 8
  },
  styleFlatList: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: (Dimensions.get("window").width - 32) / 3,
    height: ((Dimensions.get("window").width - 32) / 3) * 1.5,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: "white",
    borderRadius: 2
  },
  styleImage: {
    justifyContent: "center",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    resizeMode: "cover",
    height: ((Dimensions.get("window").width - 32) / 3 - 16) * 1.2,
    width: (Dimensions.get("window").width - 32) / 3 - 16
  },
  GridViewTextLayout: {
    height: 50,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "center"
  },
  styleActivityIndicatorView: {
    width: "100%",
    height: "100%",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "center"
  },
  styleActivityIndicator: {
    // backgroundColor:'red'
  }
});
