import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  SegmentedControlIOS
} from "react-native";
import {
  backgroundImage,
  menuIcon,
  arrowRight
} from "../../assets/images/images";
import { primaryKeyColor, secondaryKeyColor } from "../../Utilities/Constants";
import { FlatList } from "react-native-gesture-handler";
export default class Stats extends Component {
  constructor() {
    super();
    this.state = {
      arrResults: [
        {
          awayTeamName: "Liverpoolddddd",
          homeTeamName: "Arsenal",
          score: "0 : 2"
        },
        {
          awayTeamName: "Liverpoolsdfsfdsdfsdfdfdfsdfs",
          homeTeamName: "Arsenal",
          score: "0 : 2"
        },
        { awayTeamName: "Liverpool", homeTeamName: "Arsenal", score: "0 : 2" },
        { awayTeamName: "Liverpool", homeTeamName: "Arsenal", score: "0 : 2" },
        { awayTeamName: "Liverpool", homeTeamName: "Arsenal", score: "0 : 2" },
        { awayTeamName: "Liverpool", homeTeamName: "Arsenal", score: "0 : 2" },
        { awayTeamName: "Liverpool", homeTeamName: "Arsenal", score: "0 : 2" }
      ]
    };
  }
  headerButtonClicked() {
    this.props.navigation.toggleDrawer();
  }

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.container}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => {
            this.headerButtonClicked();
          }}
        >
          <Image style={styles.styleMenuIcon} source={menuIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleHeaderButtonSelect}>
          <Text style={styles.styleHeaderTextSelect}>Championship</Text>
          <Image style={styles.styleHeaderImageSelect} source={arrowRight} />
        </TouchableOpacity>
        <SegmentedControlIOS
          selectedIndex={0}
          style={styles.styleSegmentControl}
          tintColor={secondaryKeyColor}
          values={["Fixtures", "Latest", "Table"]}
        />
        <View style={styles.styleFlatListView}>
          <FlatList
            contentContainerStyle={styles.styleFlatList}
            data={this.state.arrResults}
            renderItem={({ item, index }) => (
              <View style={styles.styleFlatListItemView}>
              <View style={{height:44, justifyContent:'center'}}>
                <Text 
                  style={{ fontSize:12, color:'#8D9396', width: "100%",fontFamily: "Rajdhani-Semibold", textAlign: "center", paddingTop: 10 }}
                >
                  123
                </Text>
                </View>
                <TouchableOpacity style={styles.styleFlatListItemButton}>
                  <View style={styles.styleFlatListItem1View}>
                    <Image style={{height:40, width:40, borderRadius:20,resizeMode:'cover', backgroundColor:'red' }} source={arrowRight} />
                    <Text
                      style={{
                        flex: 0.4,
                        paddingTop: 5,
                        fontSize: 12,
                        fontFamily: "Rajdhani-Semibold",
                        color: "#096b76"
                      }}
                    >
                      {item.homeTeamName}
                    </Text>
                  </View>
                  <View style={styles.styleFlatListItem3View}>
                    <Text
                      style={{
                        fontSize: 40,
                        fontFamily: "Rajdhani-SemiBold",
                        textAlign: "center",
                        color: "#096b76"
                      }}
                    >
                      {item.score}
                    </Text>
                  </View>
                  <View style={styles.styleFlatListItem1View}>
                    <Image style={{ height:40, width:40,resizeMode:'cover',}} source={arrowRight} />
                    <Text
                      style={{
                        flex: 0.4,
                        paddingLeft: 10,
                        paddingTop: 5,
                        paddingRight: 10,
                        fontSize: 12,
                        fontFamily: "Rajdhani-Semibold",
                        color: "#096b76"
                      }}
                    >
                      {item.awayTeamName}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.separatorView} />
                <View
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                    height: 40,
                    backgroundColor: "#C8E2E2"
                  }}
                />
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerButton: {
    paddingLeft: 10,
    paddingTop: 49
  },
  styleMenuIcon: {
    width: 28,
    height: 28
  },
  styleHeaderButtonSelect: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10
  },
  styleHeaderTextSelect: {
    fontSize: 30,
    fontFamily: "Rajdhani-Bold",
    color: "white"
  },
  styleHeaderImageSelect: {
    alignSelf: "center",
    marginLeft: 10,
    width: 12,
    height: 12
  },
  styleSegmentControl: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  styleFlatListView: {
    flex: 1,
    marginTop: 10
  },
  styleFlatList: {},
  styleFlatListItemView: {
    height: 154,
    backgroundColor: "white"
  },
  styleFlatListItemButton: {
    height: 80,
    marginTop: 0,
    // marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#C8E2E2"
  },
  styleFlatListItem1View: {
    // position:'absolute',
    alignItems: "center",
    flex: 1
  },
  styleFlatListItem2View: {
    // position:'absolute',
    alignItems: "center",
    flex: 1
  },
  styleFlatListItem3View: {
    flex: 1
  },
  separatorView: {
    backgroundColor: "#a2c9cc",
    height: 0.5,
    marginLeft: 10,
    marginRight: 10
  }
});
