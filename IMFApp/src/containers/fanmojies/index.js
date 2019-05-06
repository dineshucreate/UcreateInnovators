import React, { Component } from 'react';
import { TouchableOpacity, Text, View, Image, FlatList, Dimensions, ActivityIndicator, Linking } from 'react-native'
import styles from './style'
import BackgroundImage from '../../component/backgroundImage';
import { SafeAreaView } from 'react-navigation';
import { getGifs } from './actions';
import { connect } from 'react-redux';
const { width } = Dimensions.get('window');


class Fanmojies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrList: [{ key: 'Zacggk' }, { key: 'John' }, { key: 'Zacggk' }, { key: 'John' }, { key: 'Zacggk' }]
        }
    }
    componentDidMount() {
        const { getGifs } = this.props;
        getGifs();
    }
    backPress = () => {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    };
    indexSelected = (item) => (
        Linking.openURL(item.images.fixed_height_still.url)
    );
    renderListItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.indexSelected(item)}>
            <View style={{ height: 130, width: (width / 2) - 10, margin: 5, }}>
                <Image style={{ backgroundColor: 'gray', height: 130 }}
                    resizeMode={'contain'}
                    source={{ uri: item.images.fixed_height_still.url }} />
            </View>
        </ TouchableOpacity >
    );
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={styles.headerVIew}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}>
                            <Text style={styles.backText}>Back</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Fan Gif's</Text>
                        <Text style={styles.blankText}>aka</Text>
                    </View>
                    <FlatList
                        data={this.props.gifsData}
                        renderItem={this.renderListItem}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                    {this.props.loading ?
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', backgroundColor: 'white' }}>
                            <ActivityIndicator style={{ alignSelf: 'center' }} size='large' />
                        </View> : null
                    }
                </View>
            </SafeAreaView>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        loading: state.gifs.loading,
        gifsData: state.gifs.gifsData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getGifs: () => dispatch(getGifs())
});

export default connect(mapStateToProps, mapDispatchToProps)(Fanmojies);