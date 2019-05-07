import React, { Component } from 'react';
import { View, Image, AsyncStorage, TouchableOpacity, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView, DrawerItems, StackActions, NavigationActions } from 'react-navigation';
import styles from './style';
import configureStore from '../../configureStore';
import { onLogOut } from './action';

class CustomDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURI: '',
        };
    }
    
    getData = async () => {
        const uri = await AsyncStorage.getItem('imgDrawer');
        if (uri != null) {
            this.setState({ imageURI: uri });
        }
    }

    showLogoutAlert = (props) => {
        Alert.alert(
            'Message', 'Are you sure to logout?',
            [
                { text: 'Yes', 
                    onPress: () => {
                        const { store } = configureStore();
                        store.dispatch(onLogOut(props.navigation));
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'login' })],
                        });
                        this.props.navigation.dispatch(resetAction);
                    },
                },
                { text: 'No' },
            ],
            { cancelable: false },
        );
    }

    render() {
        const { dataList } = this.props;
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.imageContainer}>
                {
                  dataList.length > 0 && dataList[0].snippet.thumbnails.high.url !== '' ?
                        <Image
                            style={styles.image}
                            source={{ uri: dataList[0].snippet.thumbnails.high.url }}
                        /> : null
                }
                </View>
                <DrawerItems {...this.props} />
                <TouchableOpacity 
                    style={styles.buttonStyle}
                    onPress={() => {
                        this.showLogoutAlert(this.props);
                    }}
                >
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
                {/* <View style={styles.itemsContainer}>
                    <TouchableOpacity 
                        style={
                            itemColor === 'flatList' ? 
                            styles.buttonStyleWithColor : styles.buttonStyle
                        } 
                        onPress={() => { 
                                        this.props.navigation.navigate('flatList'); 
                                        this.setState({ itemColor: 'flatList' });
                                      }}
                    >
                        <Text style={styles.text}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={
                            itemColor === 'home' ? 
                            styles.buttonStyleWithColor : styles.buttonStyle
                        } 
                        onPress={() => { 
                                            this.props.navigation.navigate('home');
                                            this.setState({ itemColor: 'home' });
                                        }}
                    >
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                </View> */}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    dataList: state.flatList.data
});
module.exports = connect(mapStateToProps)(CustomDrawer);

