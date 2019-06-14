
import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity } from 'react-native';

import stylesStats from './style';
import newsJson from '../../../../news.json'

import { newsRequestForData, sendDataNew } from '../stats/action'
import { connect } from 'react-redux';



class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news_items: []
        }
        //this.state.news_items = newsJson.itemsNews;

    }
    componentDidMount() {
        const { newsRequestForData } = this.props;
        newsRequestForData()
    }

    navigateScreen = (item) => {
        this.props.sendDataNew(item);
        this.props.navigation.navigate('newDetail');
    }
    renderListItemNews = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.navigateScreen(item)}>
            <View style={stylesStats.cardContainer}>
                <View>
                    <Image
                        style={{ height: 200, justifyContent: 'space-around' }}
                        source={{ uri: `${item.news_banner}` }}
                        resizeMode='cover'
                    />
                </View>
                <View style={stylesStats.contentCard}>
                    <Text style={stylesStats.titleCard}>{item.news_title}</Text>
                    <View style={stylesStats.bottomCard}>
                        <Text style={stylesStats.bottomCardTeam}>{item.news_detail}</Text>

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );



    render() {
        return (
            <FlatList
                data={this.props.news_items}
                renderItem={this.renderListItemNews}
                keyExtractor={item => item.id} />
        );
    }
}

const mapStateToPropsStats = (state) => {
    return {
        news_items: state.news.news_items,
    };
};
const mapDispatchToPropsStats = (dispatch) => ({
    newsRequestForData: () => dispatch(newsRequestForData(newsJson.itemsNews)),
    sendDataNew: (item) => dispatch(sendDataNew(item))


});

export default connect(mapStateToPropsStats, mapDispatchToPropsStats)(Stats);


