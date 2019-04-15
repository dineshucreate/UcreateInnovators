import React, { component } from './node_modules/react'
import { View } from './node_modules/react-native'
import styles from './style'
import BackButton from '../../component/backButton'
import BackgroundImage from '../../component/BackgroundImage'

export default class Home extends component {
    backPress = (() => {
        const { navigation } = this.props
        navigation.pop()

    });
    render() {
        return (
            <BackgroundImage>
                <View style={styles.horizontalView}>
                    <BackButton name={'Back'} backPress={this.backPress} />
                    <Text style={styles.registerText}>Home</Text>
                </View>
            </ BackgroundImage>
        );
    }
}

