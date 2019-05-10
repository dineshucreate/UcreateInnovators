import React, { Component } from 'react'
import { connect } from 'react-redux';
import { FlatList, Text, View, Image, ActivityIndicator, AsyncStorage } from 'react-native'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { getResultsRequested } from './actions';

class Stats extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { getResultsRequested } = this.props;
        getResultsRequested();
    }
    backPress = () => {
        const { navigation } = this.props
        navigation.pop()

    };
    indexSelected = (item) => {
        alert(item.homeTeamName + '\n' + ' VS ' + '\n' + item.awayTeamName)
    };
    renderStatsListItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.indexSelected(item)} >
            <Text style={styles.textListHeader}>9 days ago</Text>
            <View style={styles.teamsContainer}>
                <View style={styles.viewTeam1}>
                    <Image style={styles.logoImageTeam1}
                        source={{ uri: item.homeTeamImageUrl !== null ? item.homeTeamImageUrl : '' }} />
                    <Text style={styles.textTeamName1}> {item.homeTeamName}</Text>
                </View>
                <View style={styles.viewCenter}>
                    <Text style={styles.textVS}>VS</Text>
                    <Text style={styles.textScore}>{item.homeScore + ' : ' + item.awayScore}</Text>
                </View>
                <View style={styles.viewTeam2}>
                    <Image style={styles.logoImageTeam1}
                        source={{ uri: item.awayTeamImageUrl !== null ? item.awayTeamImageUrl : '' }} />
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
                        <TouchableOpacity style={styles.menuButton} onPress={() => {
                            this.props.navigation.toggleDrawer();
                        }}>
                            <Image style={styles.facebookIcon} source={require('../../assets/images/stats-tabbar.png')} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Stats</Text>
                        <Text style={styles.blankText}>aa</Text>
                    </View>
                    <FlatList
                        data={this.props.resultsData}
                        renderItem={this.renderStatsListItem}
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
        resultsData: state.stats.resultsData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getResultsRequested: () => dispatch(getResultsRequested())
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);



