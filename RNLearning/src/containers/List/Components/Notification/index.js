
import { PureComponent } from 'react';
import firebase from 'react-native-firebase';
import { Alert } from 'react-native';
import AsyncStorageUtil from '../../../../utilities/asyncStorage';

export default class Notification extends PureComponent {

    componentWillUnmount() {
        this.notificationListener();
        this.notificationOpenedListener();
    }
    
    async getToken() {
        let fcmToken = await AsyncStorageUtil.getItemFromStorage('fcmToken');
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            if (fcmToken) {
                // user has a device token
                this.alert(fcmToken);
                await AsyncStorageUtil.setItemInStorage('fcmToken', fcmToken);
            }
        }
        this.alert(`fcmToken ${fcmToken}`);
    }

    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
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
        * If your app is in background, you can listen for when a notification i
        * s clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications()
                                        .onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        });

        /*
        * If your app is closed, you can check if it was opened by a 
        * notification being clicked / tapped / opened as follows:
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
        const { navigation } = this.props;
        Alert.alert(
            title, body,
            [
                { text: 'OK', onPress: () => navigation.navigate('home') },
            ],
            { cancelable: false },
        );
    }
}
