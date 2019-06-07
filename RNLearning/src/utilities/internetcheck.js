import NetInfo from '@react-native-community/netinfo';
import { Alert } from 'react-native';

const isInternetConnected = async () => await NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        return state.isConnected;
    });

export const withInternetConnection = (callback) => async (arg) => {
        const isConnected = await isInternetConnected();
        // console.log('Internet:  ' + JSON.stringify(isConnected));
        if (isConnected) {
            console.log('True');
            callback(arg);
        } else {
            Alert.alert('You are not connected to internet');
            console.log('False');
        }
    }
;
