import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView, DrawerItems } from 'react-navigation';
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
    }
    getData = async () => {
        const uri = await AsyncStorage.getItem('imgDrawer');
        if (uri != null) {
            this.setState({ imageURI: uri });
        }
    }
    render() {
        const { dataList } = this.props;
        return (
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.imageContainer}>
                {
                  dataList.length > 0 && dataList[0].snippet.thumbnails.high.url !== '' ?
                        <Image
                            style={styles.image}
                            source={{ uri: dataList[0].snippet.thumbnails.high.url }}
                        /> : null
                }
                </View>
                <DrawerItems {...this.props} />
                {/* <View style={styles.itemsContainer}>
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
                </View> */}
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => ({
    dataList: state.flatList.data
});
module.exports = connect(mapStateToProps)(CustomDrawer);

