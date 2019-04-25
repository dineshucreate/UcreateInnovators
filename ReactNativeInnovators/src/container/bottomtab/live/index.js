
import React, { Component } from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity,Dimensions} from 'react-native';
import { apiLoginGetFlatList } from '../../../utilities/serverrequest/index'
import stylesLive from './style';
import TextHeaderDrawer from './../../../styling/headerviewdrawer/index';



class Live extends React.Component {
    static navigationOptions = {
        header: null,
        drawerLabel: 'Live'
    };
    constructor(props) {
        super(props);
        state = {
            users: []
        }

        this.state = {
            name: "Amit Agnihotri",
            textInputLogin: '',
            textInputPassword: '',
            apiData: null,
        }
    }


    successCallbackLogin = (response) => {
        // Alert.alert(JSON.stringify(response.data));
        this.setState({ users: response.data });
    }

    failureCallbackLogin = (error) => {
        Alert.alert(JSON.stringify(error));
    }


    componentDidMount() {
        this.GetValueFunction()
    }


    GetValueFunction = () => {
        apiLoginGetFlatList('http://dummy.restapiexample.com/api/v1/employees', this.successCallbackLogin, this.failureCallbackLogin)

    }
    itemOnPress = (item) => {
        Alert.alert(item);
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
            />
        );
    }

    renderListItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.itemOnPress(item.employee_name)}>
            <View style={stylesLive.containerMain}>
                <Image
                    style={stylesLive.userImage}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />

                <View style={stylesLive.textView}>
                    <Text style={stylesLive.name}>{item.employee_name}</Text>
                    <Text style={stylesLive.email}>{item.employee_salary}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );
    drawerOpen = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        const { navigate } = this.props.navigation;
        console.log('...Render.......  ' + this.props);
      return (
            <View >

<TextHeaderDrawer  onClickIcon={this.drawerOpen}
            source={require('../../../assets/ic_menu.png')} />
               
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderListItem}
                    keyExtractor={item => item.employee_name}
                    numColumns={2}
                    />
            </View>
        );
    }
}

export default Live;
