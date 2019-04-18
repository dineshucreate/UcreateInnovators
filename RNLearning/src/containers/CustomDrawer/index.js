import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './style';

class CustomDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURI: '',
            itemColor: 'flatList',
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const uri = await AsyncStorage.getItem('imgDrawer');
        if (uri != null) {
            this.setState({ imageURI: uri });
        }
    }
    render() {
        const { imageURI, itemColor } = this.state;
        return (
            <SafeAreaView style={styles.safeAreaView}>
                {
                    imageURI !== '' ?
                        <Image
                            style={styles.image}
                            source={{ uri: imageURI }}
                        /> : null
                }
                <View style={styles.itemsContainer}>
                    <TouchableOpacity 
                        style={
                            itemColor === 'flatList' ? 
                            styles.buttonStyleWithColor : styles.buttonStyle
                        } 
                        onPress={() => { 
                                        this.props.navigation.navigate('flatList'); 
                                        this.setState({ itemColor: 'flatList' });
                                      }}
                    >
                        <Text style={styles.text}>List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={
                            itemColor === 'home' ? 
                            styles.buttonStyleWithColor : styles.buttonStyle
                        } 
                        onPress={() => { 
                                            this.props.navigation.navigate('home');
                                            this.setState({ itemColor: 'home' });
                                        }}
                    >
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default CustomDrawer;

