import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";
import {
  backgroundImage,
  fbIcon,
  logoWhite,
  backButton
} from "../../assets/images/images";
import { consumeGetAPI } from "../../Utilities/ServerRequest";
import { TextInput } from "react-native-gesture-handler";
export default class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      arrFiltered: []
    };
  }

  onClickItem(item) {
    // alert(JSON.stringify(item))
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
    const { navigation } = this.props;
    const response = navigation.getParam("response");
    const url =
      "https://footballalbum-prod-api.imfootball.me//UserAPI/api/User/FriendList";
    const headerParams = {
      "Content-Type": "application/json",
      "ZUMO-API-VERSION": "2.0.0",
      "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b",
      "X-ZUMO-AUTH": navigation.getParam("response").access_token
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
          autoCorrect={false}
          onChangeText={text => this.filterUsers(text)}
          style={styles.styleTextInput}
        />
        <FlatList
          numColumns={3}
          style={styles.list}
          data={this.state.arrFiltered}
          renderItem={({ item }) => (
            <View style={styles.styleFlatList}>
              <Image
                style={styles.styleImage}
                source={{ uri: item.stickerUrl ? item.stickerUrl : "" }}
              />
              <Text style={styles.GridViewTextLayout}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            index;
          }}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  styleTextInput: {
    paddingLeft: 10,
    margin: 8,
    height: 30,
    backgroundColor: "white"
  },
  container: {
    flex: 1
  },
  headerButton: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 40
  },
  list: {
    flex: 1
  },
  styleFlatList: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: (Dimensions.get("window").width - 16) / 3,
    height: ((Dimensions.get("window").width - 16) / 3) * 1.5,
    margin: 4,
    backgroundColor: "white",
    borderRadius: 2
  },
  styleImage: {
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff",
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
    height: ((Dimensions.get("window").width - 16) / 3 - 16) * 1.2
  },
  GridViewTextLayout: {
    height: 50,
    paddingTop: 10,
    textAlign: "center"
  }
});
