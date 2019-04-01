import React, { PureComponent } from 'react';
import { View, FlatList, RefreshControl, Alert } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import { listRequest, loadMoreRequest } from './actions';
import { connect } from 'react-redux';
import ListItem from './Components/ListItem';
import firebase from 'react-native-firebase';
import AsyncStorageUtil from '../../utilities/asyncStorage';

class List extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            dataList: [],
            isRefreshing: false,
            nextPageToken: '',
            totalResults: 0,
            pageInfo: {}
        }
    }

    renderItem = ({ item, index }) => {
        return (
            <View>
                <ListItem dataItem={item}/>
            </View>
        );
    };

    componentDidMount() {
        const { listRequest } = this.props;
        listRequest();
        this.checkPermission();
        this.createNotificationListeners();
    }

    componentWillUnmount() {
        this.notificationListener();
        this.notificationOpenedListener();
      }

    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
      }

      async getToken() {
        let fcmToken = await AsyncStorageUtil.getItemFromStorage('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                // user has a device token
                alert(fcmToken);
                await AsyncStorageUtil.setItemInStorage('fcmToken', fcmToken);
            }
        }
        alert(`fcmToken ${fcmToken}`);
      }

      async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
      }

      async createNotificationListeners() {
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            this.showAlert(title, body);
        });
      
        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        });
      
        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
          //process data message
          console.log(JSON.stringify(message));
        });
      }
      
      showAlert(title, body) {
        const {navigation} = this.props;
        Alert.alert(
          title, body,
          [
              { text: 'OK', onPress: () =>  navigation.navigate('home') },
          ],
          { cancelable: false },
        );
      }
      

    _onRefresh = () => {
        this.setState({ isRefreshing: true });
        const { listRequest } = this.props;
        listRequest();
    }
    shouldComponentUpdate() {
        const { loading } = this.state
        if (loading === false) {
            this.state.isRefreshing = false
        }
        return true
    }
    onScrollHandler = () => {
        const { loadMoreRequested, pageInfo, nextPageToken, loading, dataList } = this.props;
        const tR = pageInfo.totalResults
        if (tR > dataList.length && nextPageToken != undefined && loading == false) {
            loadMoreRequested(nextPageToken);
        }
    }

    render() {
        const { dataList } = this.props
        return (
            <SafeAreaView style={styles.styleContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={dataList}
                    style={styles.styleList}
                    renderItem={this.renderItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh}
                            title="Pull to refresh"
                            tintColor="#000000"
                            titleColor="#000000"
                        />
                    }
                    onEndReached={this.onScrollHandler}
                    onEndThreshold={0}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.flatList.loading,
        dataList: state.flatList.data,
        nextPageToken: state.flatList.nextPageToken,
        pageInfo: state.flatList.pageInfo
    }
}

const mapDispatchToProps = dispatch => ({
    listRequest: () => dispatch(listRequest()),
    loadMoreRequested: (nextPageToken) => dispatch(loadMoreRequest(nextPageToken))
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);