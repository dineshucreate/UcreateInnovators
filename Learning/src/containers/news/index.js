import React, { Component } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SegmentedControlIOS,
  Dimensions,
  Linking,
  FlatList
} from "react-native";
import { backgroundImage } from "../../assets/images/images";
import MenuButton from "../../components/menubutton";
import {
  secondaryKeyColor,
  primaryKeyColor,
  secondaryKeyColorRGBA,
  secondaryKeyColorOtherRGBA
} from "../../utilities/constants";
import NewsCollection from "../../utilities/models/newscollection";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      arrNews: []
    };
  }
  headerButtonClicked() {
    this.props.navigation.toggleDrawer();
  }

  onItemClick(item) {
    Linking.openURL(item.link) 
  }

  componentDidMount() {
    let newsCollection = new NewsCollection();
    newsCollection.getNews(
      response => {
        this.state.arrNews = response;
        this.forceUpdate();
      },
      error => {
        alert(JSON.stringify(error));
      }
    );
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
          <MenuButton />
        </TouchableOpacity>
        <TouchableOpacity style={styles.styleHeaderButtonSelect}>
          <Text style={styles.styleHeaderTextSelect}>News</Text>
        </TouchableOpacity>
        <SegmentedControlIOS
          selectedIndex={0}
          style={styles.styleSegmentControl}
          tintColor={secondaryKeyColor}
          values={["News", "Video"]}
        />
        <View style={styles.styleFlatListView}>
          <FlatList
            contentContainerStyle={styles.styleFlatList}
            data={this.state.arrNews}
            renderItem={({ item, index }) =>
              index == 0 ? (
                <TouchableOpacity style={styles.styleFlatListItemButton} onPress={()=> this.onItemClick(item)}>
                  <Image
                    style={styles.styleFlatListItemImage}
                    source={item.url ? { uri: item.url } : backgroundImage}
                  />
                  <View style={styles.styleFlatListItemView2}>
                    <Text style={styles.styleFlatListItemText}>
                      {item.title}
                    </Text>
                    <Text style={styles.styleFlatListItemText2}>BBC News</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={()=> this.onItemClick(item)}>
                  <View style={styles.styleFlatListItemView3}>
                    <Image
                      style={styles.styleFlatListItemImage2}
                      source={item.url ? { uri: item.url } : backgroundImage}
                    />
                    <View style={styles.styleFlatListItemView4}>
                      <Text style={styles.styleFlatListItemText4}>
                        BBC News
                      </Text>
                      <Text style={styles.styleFlatListItemText3}>
                        {item.title}
                      </Text>
                      <Text style={styles.styleFlatListItemText4}>
                        BBC News
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }
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
  styleSegmentControl: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  styleFlatListView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10
  },
  styleFlatList: {},
  styleFlatListItemButton: {
    height: Dimensions.get("window").width * 0.4634 + 90,
    width: Dimensions.get("window").width - 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: "white"
  },
  styleFlatListItemImage: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").width * 0.4634
  },
  styleFlatListItemText: {
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    color: primaryKeyColor
  },
  styleFlatListItemText2: {
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 6,
    paddingRight: 10,
    color: secondaryKeyColorRGBA
  },
  styleFlatListItemView2: {
    flex: 1,
    backgroundColor: secondaryKeyColorOtherRGBA
  },
  styleFlatListItemView3: {
    height: 105,
    backgroundColor: "white",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "row"
    // alignItems:'center'
  },
  styleFlatListItemImage2: {
    width: 105,
    height: 105
  },
  styleFlatListItemView4: {
    flex: 1,
    height: 85,
    // marginRight: 10,
    marginLeft: 10,
    marginTop: 10
  },
  styleFlatListItemText3: {
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 5,
    paddingRight: 10,
    color: primaryKeyColor,
    flex: 1
  },
  styleFlatListItemText4: {
    fontFamily: "Rajdhani-SemiBold",
    fontSize: 17,
    paddingLeft: 10,
    // paddingTop: 6,
    paddingRight: 10,
    color: secondaryKeyColorRGBA,
    flex: 0.4
  }
});
