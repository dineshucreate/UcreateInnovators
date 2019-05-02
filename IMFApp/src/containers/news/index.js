import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import { getNewsRequest } from './actions';
import { connect } from 'react-redux';

class News extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { getNewsRequest } = this.props;
        getNewsRequest();
    }

    renderListItems = ({ item }) => (
        <View style={{ height: 150, flexDirection: 'row', flex: 1 }}>
            <Image style={{ height: 130, width: 100, marginTop: 10, marginLeft: 10, flex: 0.3 }}
                source={{ uri: item.snippet.thumbnails.medium.url }} />
            <View style={{ height: 130, margin: 10, flexDirection: 'column', flex: 0.7 }}>
                <Text style={styles.newsHeaderText}>{item.snippet.title}</Text>
                <Text style={styles.newsTittleText}>{item.snippet.description}</Text>

            </View>
        </View>
    );

    render() {
        console.log('NewsData: ' + JSON.stringify(this.props.newsData));

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={styles.headerVIew}>
                        <TouchableOpacity style={styles.menuButton} onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/stats-tabbar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>News</Text>
                        <Text style={styles.blankText}>aa</Text>
                    </View>
                    <FlatList
                        data={this.props.newsData}
                        renderItem={this.renderListItems}
                    />
                    {this.props.loading ?
                        <View style={{ width: '100%', height: '100%', justifyContent: 'center', backgroundColor: 'white' }}>
                            <ActivityIndicator style={{ alignSelf: 'center' }} size='large' />
                        </View> : null
                    }
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.stats.loading,
        newsData: state.news.newsData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getNewsRequest: () => dispatch(getNewsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(News);