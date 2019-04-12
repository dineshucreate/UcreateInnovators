import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './style';

class setting extends Component {
    render() {
        return (
            <ScrollView style={styles.mainView}>
                <Text>Setting scren</Text>
            </ScrollView>
        );
    }
}
export default setting;
