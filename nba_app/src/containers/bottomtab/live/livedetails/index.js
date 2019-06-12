
import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import stylesLive from './style';
import { connect } from 'react-redux';

class LiveDetails extends React.Component {
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

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
                <Image
                    style={{ height: 250 }}
                    source={{ uri: this.props.itemsRow.image }}
                    resizeMode="cover"
                />
                <View style={stylesLive.articleContainer}>
                    <View>
                        <Text style={stylesLive.articleTitle}>
                            {this.props.itemsRow.title}
                        </Text>
                        <Text style={stylesLive.articleData}>
                            {this.props.itemsRow.team}
                        </Text>
                    </View>
                    <View style={stylesLive.articleContent}>
                        <Text style={stylesLive.articleText}>
                            {this.formatText(this.props.itemsRow.content)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const mapStateToPropsLiveDetails = (state) => {
    console.log('---------------------->>> ' + JSON.stringify(state.article.item));

    return {
        itemsRow: state.article.item,
    };
};


export default connect(mapStateToPropsLiveDetails, null)(LiveDetails);

//export default LiveDetails;
