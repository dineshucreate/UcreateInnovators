import React, { Component } from 'react';
import { ScrollView, View, TextInput, Text, TouchableOpacity } from 'react-native';

import styles from './style';
import BackButton from '../../component/backButton'
import BackgroundImage from '../../component/backgroundImage';

export default class signup extends Component {
    backPress = (() => {
        const { navigation } = this.props;
        navigation.pop();
    });
    render() {
        return (
            <BackgroundImage>
                <View style={styles.horizontalView}>
                    <BackButton name={'Back'} backPress={this.backPress} />
                    <Text style={styles.registerText}>Register</Text>
                    <TouchableOpacity
                        onPress={this.loginPress}>
                        <Text style={styles.buttonDoneText}>Done</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={style = styles.backgroundView}>
                    <View style={styles.signupView}>
                        <TextInput style={styles.textInput}
                            placeholder="First name"
                            onChangeText={(text) => this.setState({ text })} />
                        <View style={styles.lineView} />
                        <TextInput style={styles.textInput}
                            placeholder="Last name"
                            onChangeText={(text) => this.setState({ text })} />
                        <View style={styles.lineView} />
                        <TextInput style={styles.textInput}
                            placeholder="Email Address"
                            onChangeText={(text) => this.setState({ text })} />
                        <View style={styles.lineView} />
                        <TextInput style={styles.textInput}
                            placeholder="DD/MM/YYYY"
                            onChangeText={(text) => this.setState({ text })} />
                        <View style={styles.lineView} />
                        <TextInput style={styles.textInput}
                            placeholder="Password"
                            onChangeText={(text) => this.setState({ text })} />
                    </View>
                    <TouchableOpacity
                        onPress={this.loginPress}>
                        <Text style={styles.buttoBottomText}>WHY DO WE NEED DATE OF BIRTH?</Text>
                    </TouchableOpacity>
                </ScrollView>
            </BackgroundImage>
        );
    }
}