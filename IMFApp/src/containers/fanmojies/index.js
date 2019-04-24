import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import BackgroundImage from '../../component/backgroundImage';
import BackButton from '../../component/backButton';

export default class Fanmojies extends Component {
    backPress = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    };
    render() {
        return (
            <BackgroundImage>
                <BackButton name={'Back'} backPress={this.backPress} />
            </BackgroundImage>
        )
    };
}