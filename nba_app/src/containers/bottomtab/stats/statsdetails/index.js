
import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import stylesNews from './style';
import Header from '../../../../utils/header/index'



class StatsDetails extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            itemsRow: {}
        }
    }
    formatText(content) {
        const text = content.replace(/<p>/g, "").replace(/<\/p>/g, "");
        return text;
    }

    onBackPress = () => {
        console.log('..............enter');
        
        this.props.navigation.goBack();
    }

    render() {
  
        return (
            <View>
                <Header  navigation={ this.props.navigation} />
                <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
                    <Image
                        style={{ height: 250 }}
                        source={{ uri: this.props.itemsRow.news_banner }}
                        resizeMode="cover"
                    />
                    <View style={stylesNews.newsContainer}>
                        <View>
                            <Text style={stylesNews.newsTitle}>
                                {this.props.itemsRow.news_title}
                            </Text>
                            <Text style={stylesNews.newsData}>
                                {this.props.itemsRow.news_detail}
                            </Text>
                        </View>
                        <View style={stylesNews.newsContent}>
                            <Text style={stylesNews.newsText}>
                                {this.formatText(this.props.itemsRow.news_detail)}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


const mapStateToPropsStatsDetails = (state) => {
    return {
        itemsRow: state.news.item,
    };
};

export default connect(mapStateToPropsStatsDetails, null)(StatsDetails);

