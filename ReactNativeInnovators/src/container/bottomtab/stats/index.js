
import React, { Component } from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity } from 'react-native';
import { apiLoginGetFlatList } from '../../../utilities/serverrequest/index'
import stylesStats from './style';
import TextHeader from './../../../styling/headerview/index';



class Stats extends React.Component {
    static navigationOptions = {
        header: null
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
            <View style={stylesStats.containerMain}>
                <Image
                    style={stylesStats.userImage}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />

                <View style={stylesStats.textView}>
                    <Text style={stylesStats.name}>{item.employee_name}</Text>
                    <Text style={stylesStats.email}>{item.employee_salary}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );

    render() {
        const { navigate } = this.props.navigation;
        console.log('...Render.......  ' + this.props);

        return (
            <View >
                <TextHeader title='STATS'/>
                <FlatList
                    data={this.state.users}
                    renderItem={this.renderListItem}
                    keyExtractor={item => item.employee_name}/>
            </View>
        );
    }
}

export default Stats;
