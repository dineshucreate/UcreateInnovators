import { Platform, NetInfo, Alert } from 'react-native';



CheckConnectivity = () => {
    // For Android devices
    if (Platform.OS === "android") {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                Alert.alert("You are online!");
            } else {
                Alert.alert("You are offline!");
            }
        });
    } else {
        // For iOS devices
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleFirstConnectivityChange
        );
    }
};

handleFirstConnectivityChange = isConnected => {
    NetInfo.isConnected.removeEventListener(
        "connectionChange",
        this.handleFirstConnectivityChange
    );

    return isConnected;
};


export default checkInternet = (callback) => {
    const isConnected = CheckConnectivity;
    console.log("Internet:  " + isConnected);
    if (isConnected) {
        console.log('True');
        callback();
    } else {
        console.log('False');

    }

}

// export const consumeGetAPI = (url, headers, successCallback, failureCallback) => {
//     Axios.get(url, { headers: headers }).then((response) => {
//         successCallback(response)
//     }).catch((error) => {
//         failureCallback(error)
//     })
// }