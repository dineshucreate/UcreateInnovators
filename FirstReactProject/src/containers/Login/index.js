import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import {
    LoginManager, AccessToken, GraphRequest, GraphRequestManager
  } from 'react-native-fbsdk';
import { connect } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';
import {
    Text,
    View,
    ScrollView,
    TextInput,
    AsyncStorage,
    Alert,
    TouchableOpacity,
} from 'react-native';
import styles from './style';
import { loginRequest } from './actions';
import CustomButton from '../../Components/CustomButton';
import CustomLoader from '../../Components/CustomLoader';
import config from '../../Config/config';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  

    class Login extends Component {
      static navigationOptions = {
        title: 'LOGIN',
    };
    
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.loginData && nextProps.loginData.status === 200) {
             nextProps.navigation.navigate('drawer', 
            { user: prevState.username, pwd: prevState.password, loginData: nextProps.loginData });
        }
        if (nextProps.someValue !== prevState.someValue) {
            return { someState: nextProps.someValue };
        }
        return null;
    }

    constructor() {
        super();
        this.state = {
            username: config.username,
            password: config.password,
            loader: false,
            isDateTimePickerVisible: false,
            dateTime: '12/12/12',
            avatarSource: null,
            refreshing: false,
        };
    }
    componentDidMount() {
        SplashScreen.hide();
        this.checkPermission();
        this.createNotificationListeners();
    }

    componentWillUnmount() {
        this.notificationListener();
        this.notificationOpenedListener();
      }

    //Push Notification:

   // 3
    async getToken() {
        let fcmToken = await AsyncStorage.getItem('fcmToken');
        //this.setState({ username: fcmToken });
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();
            //this.setState({ username: fcmToken });
            if (fcmToken) {
                // user has a device token
                console.log('Device Tokem = ', fcmToken);
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }
    }

    1
    async checkPermission() {
        const enabled = await firebase.messaging().hasPermission();
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }
  
    2
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
        * If your app is in background, you can listen for when a notification is clicked 
        / tapped / opened as follows:
        * */
        this.notificationOpenedListener = 
        firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            this.showAlert(title, body);
        });
      
        /*
        * If your app is closed, you can check if it was opened by
         a notification being clicked / tapped / opened as follows:
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
        Alert.alert(
          title, body,
          [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      }
    /*----------------------------------------------------------------------------------*/
      //Modal : 
    loginClicked = () => {
        const { navigation } = this.props;
        LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
          (result) => {
            if (result.isCancelled) {
                Alert.alert('Login was cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(
                    () => {
                      const responseInfoCallback = (error, result2) => {
                        if (error) {
                          Alert.alert(`Error fetching data: ${error.toString()}`);
                        } else {
                          console.log(JSON.stringify(result2));
                          Alert.alert('Hey', result2.name);
                        //   navigation.navigate('fb', { name: result2.name, 
                        //     avatar: result2.picture.data.url });
                        }
                      };
                      const infoRequest = new GraphRequest(
                        '/me?fields=name,email,picture.type(large)',
                        null,
                        responseInfoCallback
                      );
                      new GraphRequestManager().addRequest(infoRequest).start();
                    }
                  );
            }
          },
          (error) => {
            Alert.alert(`Login failed with error: ${error}`);
          }
        );
      }

    /*------------------------------------------------------------------------------------------*/
    //Date Picker :
    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };
    
    handleDatePicked = date => {
        const momentObj = moment(date);
        const momentString = momentObj.format('YYYY-MM-DD');
        this.setState({ dateTime: momentString });
        console.log('A date has been picked: ', date);

        this.hideDateTimePicker();
    };

    /*-------------------------------------------------------------------------------------------*/
    //Image Picker :

    imagePickerOpen = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
          });
    }
    /*--------------------------------------------------------------------*/

    render() {
        const { loginRequestt, loginData } = this.props;
        const { username, password, dateTime } = this.state;
        console.log(`Get the data :  ${JSON.stringify(loginData)}`);
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    style={styles.modal}
                    position={'center'}
                    entry='bottom'
                    swipeToClose={false}
                    backButtonClose={false}
                    backdropPressToClose={false}
                    animationDuration={200}
                    ref={'loaderView'}
                >
                    <View style={{ flex: 1 }}>
                        <Text style={styles.modalText}>Singh</Text>
                        <TouchableOpacity
                            onPress={() => this.refs.loaderView.close()}
                        >
                            <Text style={styles.modalText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <ScrollView style={{ backgroundColor: '#D3D3D3', flex: 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>LOGIN SCREEN</Text>
                        <Text style={styles.heading}>Login : </Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                           // value={username}
                            onChangeText={(text) => this.setState({ username: text })}
                        />
                        <Text style={styles.heading}>Password : </Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            placeholderTextColor="#9a73ef"
                            autoCapitalize="none"
                           // value={dateTime}
                            onChangeText={(text) => this.setState({ password: text })}
                        />
                        <CustomButton
                            myText='Log In'
                            myCustomClick={() => {
                                //this.loginClicked(); //FB integration
                                 loginRequestt(username, password); //Redux call
                                //this.refs.loaderView.open(); // Open the Modal
                                //this.showDateTimePicker(); //Open date picker
                                //this.imagePickerOpen(); //Open the options to get the image
                            }}
                        />
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDateTimePicker}
                        />
                    </View>
                </ScrollView>
                {this.props.loader &&
                    <CustomLoader headerText='Loading...' />}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    loginData: state.login.accessDataInIndex,
    loader: state.login.loading,
    errFromServer: state.login.errorFromServer,
});

const mapDispatchToProps = (dispatch) => ({
    loginRequestt: (username, password) =>
        dispatch(loginRequest(username, password))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Login);
