
import React from 'react';
import { Text, View, Alert, Image, FlatList, TouchableOpacity } from 'react-native';
import stylesLive from './style';
import articleJson from '../../../../articles.json'




class Live extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.state.items=articleJson.items;

    }

    renderListItem = ({ item }) => (
        <TouchableOpacity
             
        >
              <View style={stylesLive.cardContainer}>
                <View>
                  <Image
                    style={{height:200,justifyContent:'space-around'}}
                    source={{uri:`${item.image}`}}
                    resizeMode='cover'
                  />
                </View>
                <View style={stylesLive.contentCard}>
                    <Text style={stylesLive.titleCard}>{item.title}</Text>
                    <View style={stylesLive.bottomCard}>
                      <Text style={stylesLive.bottomCardTeam}>{item.team}</Text>
                      
                    </View>
                </View>
              </View>
            </TouchableOpacity>
    );
    
    

    render() {
        return (
            <FlatList
            data={this.state.items}
            renderItem={this.renderListItem}
            keyExtractor={item => item.id}/>
           
        
        );
    }
}

export default Live;
