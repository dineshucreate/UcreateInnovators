
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Button, Alert, TextInput, Image, FlatList, ToastAndroid, TouchableOpacity } from 'react-native';
import { apiLoginGetFlatList } from '../../utilities/serverrequest'
import stylesList from './style';




class PractiseFlatList extends React.Component {
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
        // for (let i = 0; i < response.data.length; i++) {
        //     console.log("EMP:" + response.data[i].employee_name);
        // }

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
            <View style={stylesList.containerMain}>
                <Image
                    style={stylesList.userImage}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                />

                <View style={stylesList.textView}>
                    <Text style={stylesList.name}>{item.employee_name}</Text>
                    <Text style={stylesList.email}>{item.employee_salary}</Text>
                </View>
            </View>

        </TouchableOpacity>
    );

    render() {
        const { navigate } = this.props.navigation;
        console.log('...Render.......  ' + this.props);

        return (
            <FlatList
                data={this.state.users}
                renderItem={this.renderListItem}
                keyExtractor={item => item.employee_name}
                numColumns={2}
            // ItemSeparatorComponent={this.renderSeparator}
            />


        );
    }
}

export default PractiseFlatList;
