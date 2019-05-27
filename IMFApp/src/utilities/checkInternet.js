import NetInfo from '@react-native-community/netinfo'

isInternetConnected = async () => {
    return await NetInfo.fetch().then(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
        return state.isConnected;
    });

}

export const withInternetConnection = (callback) => {
    return async (arg) => {
        const isConnected = await isInternetConnected();
        console.log("Internet:  " + JSON.stringify(isConnected));
        if (isConnected) {
            console.log('True');
            callback(arg);
        } else {
            console.log('False');
        }
    }
}