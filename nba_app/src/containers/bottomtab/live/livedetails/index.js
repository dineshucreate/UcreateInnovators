
import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import stylesLive from './style';




class LiveDetails extends React.Component {
    constructor(props) {
        super(props);

    }
    formatText(content) {
        const text = content.replace(/<p>/g, "").replace(/<\/p>/g, "");
        return text;
    }

    render() {
        const params = this.props.navigation.state.params;
        return (
            <ScrollView style={{ backgroundColor: '#F0F0F0' }}>
                <Image
                    style={{ height: 250 }}
                    source={{ uri: params.image }}
                    resizeMode="cover"
                />
                <View style={stylesLive.articleContainer}>
                    <View>
                        <Text style={stylesLive.articleTitle}>
                            {params.title}
                        </Text>
                        <Text style={stylesLive.articleData}>
                            {params.team}
                        </Text>
                    </View>
                    <View style={stylesLive.articleContent}>
                        <Text style={stylesLive.articleText}>
                            {this.formatText(params.content)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default LiveDetails;
