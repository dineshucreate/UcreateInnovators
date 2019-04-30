import React, { Component } from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import styles from './style';

class profile extends Component {
    componentDidMount() {
        // alert(JSON.stringify(this.props.navigation));
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'red' }}>
                <ScrollView style={styles.mainView}>
                    <Text style={{ backgroundColor: 'blue', height: 100 }}>Profile screen</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default profile;
