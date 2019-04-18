// 1. Remove screen from stack : 
 // navigator.reset([NavigationActions.navigate
                         //({ routeName: 'Dashboard' })], 0);

// 2. Fetch request :
 // makeRemoteRequest = (username, password) => {     
    //     fetch('https://production-review-tool.herokuapp.com/authentication', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           username,
    //           password,
    //         }),
    //        }).then((response) => response.json())
    //           .then((responseJson) => {
    //             console.log(responseJson);
    //             this.setState({ resFromApi: responseJson.user_info.organizations });
    //           })
    //           .catch((error) => {
    //             console.error(error);
    //           });
    //     }

//3. Drawer :

// static navigationOptions = {
    //     drawerLabel: 'Login',
    //     drawerIcon: ({ tintColor }) => (
    //       <Image 
    //         source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
    //         style={[styles.icon, { tintColor }]}
    //       />
    //     ),
    //   };

      { /* <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                    <View>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
                        />
                    </View>
                </TouchableOpacity> */ }

