import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight, FlatList, AsyncStorage } from 'react-native';
import ListItem from '../../Components/ListItem';

class Home extends Component {

    constructor(){
        super()
        this.state = {
          resFromApi : []  
        }
      }

     componentDidMount() {
        const {navigation} = this.props
       username = navigation.getParam('user','username')
        password = navigation.getParam('pwd','password')
        // username =  AsyncStorage.getItem('user');
        // password =  AsyncStorage.getItem('pwd');
        // console.log("user name is : "+ username);
        // console.log("Pwd name is : "+ password);
        this.makeRemoteRequest(username,password);
      }

    makeRemoteRequest = (username,password) => {     
        fetch('https://production-review-tool.herokuapp.com/authentication', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
           }).then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson);
                this.setState ({resFromApi:responseJson.user_info.organizations})
              })
              .catch((error) => {
                console.error(error);
              });
        }

    render() {
        const {resFromApi} = this.state;
        const { navigation } = this.props;
        return (
            <View>
              {
                resFromApi ?
                <FlatList
                    data = {resFromApi}
                    renderItem = {({ item }) => (
                      <ListItem
                        dataOne = {item} open = {() => {
                          navigation.navigate('detail', {detailValues : item})
                         // navigator.reset([NavigationActions.navigate({ routeName: 'Dashboard' })], 0)
                        }}
                      />
                    )}
                  /> : <View>
                        <Text>No data found</Text>
                    </View>
              }
            </View>
        );
        }
}
export default Home;