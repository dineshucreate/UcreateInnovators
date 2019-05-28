import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Axios from "axios";
import Modal from "react-native-modal";
export default class Landing extends Component {
    state = {
        isModalVisible: false
      };
  componentDidMount() {
    // const url =
    //   "https://footballalbum-prod-api.imfootball.me//userapi/api/Profile/CreateSticker?backgroundType=0&headType=0&teamId=5&isInternational=0";
    // const headers = {
    //   "Content-Type": "multipart/form-data",
    //   "X-ZUMO-AUTH":
    //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZZXMgU2luZ2gpIiwiZ2l2ZW5fbmFtZSI6IlllcyIsImZhbWlseV9uYW1lIjoiU2luZ2giLCJlbWFpbCI6InlAeS5jbyIsIlVzZXJHVUlEIjoiNzBkZmY5MjgtYTU1ZS00ZDM2LWJhZWEtYzMxZmY0NTFkMDFlIiwidmVyIjoiMyIsImlzcyI6Imh0dHBzOi8vZm9vdGJhbGxhbGJ1bXByb2RhcGkuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9mb290YmFsbGFsYnVtcHJvZGFwaS5henVyZXdlYnNpdGVzLm5ldC8iLCJleHAiOjE1NTk4MTU5MTAsIm5iZiI6MTU1NzIyMzkxMH0.JbFj4asr1GyM9WjjAPQnxvm_mvZ6vkhCI_ycYjHtDes",
    //   "ZUMO-API-VERSION": "2.0.0",
    //   "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b"
    // };
    // const imagePath = require("../../abc.png");
    // const formData = new FormData();
    // formData.append("photo", {
    //   "Content-Disposition": "form-data",
    //   name: "abc",
    //   filename: "abc",
    //   "Content-Type": "png",
    //   imagePath
    // });
    // Axios.post(url, formData, { headers: headers })
    //   .then(res => {
    //     alert(JSON.stringify(res));
    //   })
    //   .catch(err => {
    //     alert(JSON.stringify(err));
    //   });
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
        <View style={{ flex: 1, paddingTop:50}}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal animationIn='swing' style={{justifyContent:'center', alignItems:'center'}} isVisible={this.state.isModalVisible}>
          <View style={{width:200, height:200, backgroundColor:'white' }}>
            <Text style={{textAlign:'center'}}>Hello!</Text>
            <Button style={{justifyContent:'flex-end'}} title="Hide modal" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
    
  }
}
