
import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity } from 'react-native';

import stylesStats from './style';
import newsJson from '../../../../news.json'




class Stats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news_items: []
        }
        this.state.news_items = newsJson.itemsNews;

    }

    renderListItemNews = ({ item }) => (
        <TouchableOpacity>
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
                data={this.state.news_items}
                renderItem={this.renderListItemNews}
                keyExtractor={item => item.id} />
        );
    }
}

export default Stats;
