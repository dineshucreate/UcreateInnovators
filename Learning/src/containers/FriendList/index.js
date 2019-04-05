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
  AsyncStorage
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
import User from '../../Utilities/Models/User'
export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      arrFiltered: [],
      txt: null
    };
  }

  onClickItem(item) {
    alert(JSON.stringify(item.name));
    // var obj = JSON.parse(JSON.stringify(item));
    // alert(obj.value)
    // this.props.navigation.navigate("FriendList", {
    //   response: this.props.navigation.getParam("response")
    // });
  }

  filterUsers(text) {
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

  componentDidMount() {
    if(this.state.txt) {
      this.state.txt.focus()
    }
    const { navigation } = this.props;
    const user = new User(navigation.getParam("response"))
    const url =
      "https://footballalbum-prod-api.imfootball.me//UserAPI/api/User/FriendList";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": "application/json",
      "ZUMO-API-VERSION": "2.0.0",
      "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b",
      "X-ZUMO-AUTH": user.accessToken
    };
    consumeGetAPI(
      url,
      headerParams,
      response => {
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
        <TouchableOpacity onPress={() => this.goBack()}>
          <Image source={backButton} style={styles.headerButton} />
        </TouchableOpacity>
        <TextInput
          ref= {(input)=>this.state.txt = input}
          placeholder="Search"
          autoCorrect={false}
          onChangeText={text => this.filterUsers(text)}
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
    paddingLeft:5,
    paddingRight:5,
    textAlign: "center"
  }
});
