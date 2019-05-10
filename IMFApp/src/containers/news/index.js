import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, FlatList, Linking } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-navigation';
import { getNewsRequest } from './actions';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showWebview: false,
            videoId: '',
            isSearching: false,
            filteredNews: []
        }
    }
    componentDidMount() {
        const { getNewsRequest } = this.props;
        getNewsRequest();
    }
    indexSelected = (item) => (
        Linking.openURL(`https://www.youtube.com/embed/${item.id.videoId}?rel=0&autoplay=0&showinfo=0&controls=0`)
    );
    searchFilterFunction = text => {
        this.setState({ searchText: text, isSearching: true });
        const newData = this.props.newsData.filter(item => {
            const itemData = `${item.snippet.title.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        this.setState({ filteredNews: newData });
    };
    renderHeader = () => (
        <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.searchText}
            onCancel={() => { this.setState({ isSearching: false }); }}
        />
    );
    renderListItems = ({ item }) => (
        <TouchableOpacity onPress={() => this.indexSelected(item)}>
            <View style={{ height: 150, flexDirection: 'row', flex: 1 }}>
                <Image style={{ height: 130, width: 100, marginTop: 10, marginLeft: 10, flex: 0.3 }}
                    source={{ uri: item.snippet.thumbnails.medium.url }} />
                <View style={{ height: 130, margin: 10, flexDirection: 'column', flex: 0.7 }}>
                    <Text style={styles.newsHeaderText}>{item.snippet.title}</Text>
                    <Text style={styles.newsTittleText}
                        numberOfLines={4}
                    >{item.snippet.description}</Text>

                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        console.log('NewsData: ' + JSON.stringify(this.props.newsData));
        const { newsData } = this.props;
        if (!this.state.isSearching) {
            this.state.filteredNews = newsData;
        }
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
                        data={this.state.filteredNews}
                        renderItem={this.renderListItems}
                        ListHeaderComponent={this.renderHeader}
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