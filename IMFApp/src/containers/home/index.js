import React, { Component } from 'react'
import { FlatList, Text, View, Image, ActivityIndicator, AsyncStorage } from 'react-native'
import styles from './style'
import { consumeGetAPI } from '../../utilities/serverrequest';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrList: [{ key: 'Zacggk' }, { key: 'John' }],
            arrData: null,
            loading: true
        }
    }
    retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('userData');
            if (value !== null) {
                // We have data!!
                alert(value)
                console.log(value);
            }
        } catch (error) {
            alert(error)
            // Error retrieving data
        }
    };
    componentDidMount() {
        this.retrieveData()
        const linkUrl = "https://footballalbum-prod-api.imfootball.me/MatchAPI/api/Results/Get?idTournament=19&lastUpdate=2018-04-01T00:00:00Z"
        var headerParams = {
            "Content-Type": "application/json",
            "ZUMO-API-VERSION": "2.0.0",
            "X-ZUMO-AUTH": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZZXMgU2luZ2gpIiwiZ2l2ZW5fbmFtZSI6IlllcyIsImZhbWlseV9uYW1lIjoiU2luZ2giLCJlbWFpbCI6InlAeS5jbyIsIlVzZXJHVUlEIjoiNzczYTdlMWItMGE3MC00N2MxLTk3NmQtNjI5ZTY0MTZkNTBjIiwidmVyIjoiMyIsImlzcyI6Imh0dHBzOi8vZm9vdGJhbGxhbGJ1bS1pbnQuYXp1cmV3ZWJzaXRlcy5uZXQvIiwiYXVkIjoiaHR0cHM6Ly9mb290YmFsbGFsYnVtLWludC5henVyZXdlYnNpdGVzLm5ldC8iLCJleHAiOjE1NTgwNzU5MDQsIm5iZiI6MTU1NTQ4MzkwNH0.SbLJCoBpsgbOSmk-GHtd53TsCKB0-Qte52eU7QKYB_4",
            "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b"
        }
        consumeGetAPI(linkUrl, headerParams, (response) => {
            this.setState({ arrData: response.data, loading: false })
            //    this.setState({ loading: false });
        }, (error) => {
            alert(JSON.stringify(error))
            this.setState({ loading: false });
        })
    }
    backPress = () => {
        const { navigation } = this.props
        navigation.pop()

    };
    indexSelected = (item) => {
        this.retrieveData()
        //alert(item.homeTeamName + '\n' + ' VS ' + '\n' + item.awayTeamName)
    };
    renderStatsListItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.indexSelected(item)} >
            <Text style={styles.textListHeader}>9 days ago</Text>
            <View style={styles.teamsContainer}>
                <View style={styles.viewTeam1}>
                    <Image style={styles.logoImageTeam1}
                        source={{ uri: item.homeTeamImageUrl }} />
                    <Text style={styles.textTeamName1}> {item.homeTeamName}</Text>
                </View>
                <View style={styles.viewCenter}>
                    <Text style={styles.textVS}>VS</Text>
                    <Text style={styles.textScore}>{item.homeScore + ' : ' + item.awayScore}</Text>
                </View>
                <View style={styles.viewTeam2}>
                    <Image style={styles.logoImageTeam1}
                        source={{ uri: item.awayTeamImageUrl }} />
                    <Text style={styles.textTeamName1}> {item.awayTeamName}</Text>
                </View>
            </View>
            <View style={styles.lineView} />
        </ TouchableOpacity >
    );
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#06878A' }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={styles.headerVIew}>
                        <View style={{ position: 'absolute', width: '100%', justifyContent: 'center' }}>
                            <Text style={styles.headerText}>Stats</Text>
                        </View>
                    </View>
                    <FlatList
                        data={this.state.arrData}
                        renderItem={this.renderStatsListItem}
                    />
                </View>
                {this.state.loading ?
                    <View style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center' }}>
                        <ActivityIndicator style={{ alignSelf: 'center' }} size='large' />
                    </View> : null
                }
            </SafeAreaView>
        );
    }
}

