import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Contacts from 'react-native-contacts';
import styles from './style';

class ContactsComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }
    
    componentDidMount() {
        if (Platform.OS === 'ios') {
            Contacts.getAll((err, contacts) => {
                if (err) {
                    console.log('Not able to fetch contacts');
                } else {
                    this.setState({
                        contacts
                    });
                }
              });
        } else {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                {
                  title: 'Contacts',
                  message: 'This app would like to view your contacts.'
                }
              ).then(() => {
                Contacts.getAll((err, contacts) => {
                  if (err === 'denied') {
                    console.log('Not able to fetch contacts');
                  } else {
                    this.setState({
                        contacts
                    });
                  }
                });
              });
        }
    }

    render() {
        const { contacts } = this.state;
        return (
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.topBarContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Text style={styles.title}>Menu</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewIn} >
                    {
                        contacts.map((item, index) => (
                            <Text 
                            key={index} 
                            style={styles.title}
                            >
                            {item.givenName} {item.familyName}{'\n'}
                            {item.phoneNumbers[0].number}{'\n'}
                            </Text>
                            )
                        )
                    }
                </View>
            </SafeAreaView >
        );
    }
}

export default ContactsComponent;
