import React, { Component } from 'react';
import { Text, View, ImageBackground, Alert, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import stylesList from './style';
import Loader from '../loader/index';
import { dasboardRequest } from './action'

class Dasboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            loading: false
        }
    }
    componentDidMount() {
        const { dasboardRequest} = this.props;
        dasboardRequest()
    }
    itemOnPress = (item) => {
        Alert.alert(item);
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

        return (
            <View >
                <FlatList
                    data={this.props.users}
                    renderItem={this.renderListItem}
                    keyExtractor={item => item.employee_name}
                />
                 {this.props.loading && (
                        <Loader
                            loading={this.props.loading} />
                    )}
            </View>
        );
    }
}

const mapStateToPropsDasboard = (state) => {
    return {
        loading: state.dashboard.loading,
        users: state.dashboard.users,
    };
};
const mapDispatchToPropsDasboard = (dispatch) => ({
    dasboardRequest: () => dispatch(dasboardRequest())

});

export default connect(mapStateToPropsDasboard, mapDispatchToPropsDasboard)(Dasboard);