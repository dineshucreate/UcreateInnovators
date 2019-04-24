import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './style';

class profile extends Component {
    componentDidMount() {
        // alert(JSON.stringify(this.props.navigation));
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <ScrollView style={styles.mainView}>
                <Text>Profile screen</Text>
            </ScrollView>
        );
    }
}
export default profile;
