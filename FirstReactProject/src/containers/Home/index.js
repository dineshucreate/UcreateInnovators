import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, Button, Alert, ImageBackground, Image, ScrollView, TextInput, InputAccessoryView, TouchableHighlight, FlatList } from 'react-native';
import styles from './style';
import ListItem from '../../Components/ListItem';

class Home extends Component {

    constructor(){
        super()
        this.state = {
          username: 'simerjeet-ucreate',
          password: 'Ucreate@123',
          resFromApi : []
          
        }
      }

     componentDidMount() {
        const {navigation} = this.props
        username = navigation.getParam('user','username')
        password = navigation.getParam('pwd','password')
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

        return (
          <View>
            {
              resFromApi ?
               <FlatList
                  data = {resFromApi}
                  renderItem={({ item }) => (
                    //<Text >{`${item.login} ${item.id}`}</Text>
                    <ListItem
                      dataOne = {item}
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