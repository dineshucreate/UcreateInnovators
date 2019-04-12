import React, { Component } from 'react';
import { Text, View, FlatList, fetch } from 'react-native';
import ListItem from '../../Components/ListItem';

class Home extends Component {

    constructor() {
        super();
        this.state = {
          resFromApi: []  
        };
      }

     componentDidMount() {
        const { navigation } = this.props;
        this.username = navigation.getParam('user', 'username');
        this.password = navigation.getParam('pwd', 'password');
        this.makeRemoteRequest(this.username, this.password);
      }

    makeRemoteRequest = (username, password) => {     
        fetch('https://production-review-tool.herokuapp.com/authentication', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
           }).then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson);
                this.setState({ resFromApi: responseJson.user_info.organizations });
              })
              .catch((error) => {
                console.error(error);
              });
        }

    render() {
        const { resFromApi } = this.state;
        const { navigation } = this.props;
        return (
            <View>
              {
                resFromApi ?
                <FlatList
                    data={resFromApi}
                    renderItem={({ item }) => (
                      <ListItem
                        dataOne={item} open={() => {
                          navigation.navigate('detail', { detailValues: item });
                         // navigator.reset([NavigationActions.navigate
                         //({ routeName: 'Dashboard' })], 0)
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
