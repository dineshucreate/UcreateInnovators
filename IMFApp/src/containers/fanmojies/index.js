import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList, Dimensions } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage';
import { SafeAreaView } from 'react-navigation';
import BackButton from '../../component/backButton';
const { width } = Dimensions.get('window');

export default class Fanmojies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrList: [{ key: 'Zacggk' }, { key: 'John' }, { key: 'Zacggk' }, { key: 'John' }, { key: 'Zacggk' }]
        }
    }
    backPress = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    };
    renderListItem = ({ item }) => (
        <TouchableOpacity >
            <View style={{ backgroundColor: 'gray', height: 100, width: (width / 2) - 10, margin: 5, }}>
                <Image style={{ backgroundColor: 'gray', height: 200 }}
                    source={require('../../assets/images/stats-tabbar.png')} />
            </View>
        </ TouchableOpacity >
    );
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <BackgroundImage>
                    <View style={styles.headerVIew}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}>
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Fanmojies</Text>
                        <Text style={styles.blankText}>aka</Text>
                    </View>
                    <FlatList
                        data={this.state.arrList}
                        renderItem={this.renderListItem}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                </BackgroundImage>
            </SafeAreaView>
        )
    };
}