import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './style';
import CustomButton from '../../Components/CustomButton';

class setting extends Component {
    componentDidMount() {
       // this.props.navigation.navigate('home');
    }
    render() {
        return (
            <ScrollView style={styles.mainView}>
               <View style={{ height: 400, width: 400, marginTop: 100 }}>
                   <View style={styles.subView}>
                   <CustomButton
                        customStyle={styles.contentStyle}
                        myText='Profile'
                        myCustomClick={() => {
                            this.props.navigation.navigate('profile');
                        }}
                   />

                   <CustomButton
                        customStyle={styles.contentStyle}
                        myText='My team'
                        myCustomClick={() => {
                            this.props.navigation.navigate('tab');
                        }}
                   />
                   </View>
               </View>
            </ScrollView>
        );
    }
}
export default setting;
