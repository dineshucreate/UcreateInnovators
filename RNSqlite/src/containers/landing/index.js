import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "user_db.sqlite", createFromLocation: 1 });
var loading = true;
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      start: 1,
      refreshing: false
    };
  }

  // DB methods
  selectFromTable() {
    return new Promise((resolve, reject) => {
      var temp = [];
      db.transaction(function(txn) {
        txn.executeSql("SELECT * FROM user", [], function(tx, res) {
          for (var i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i));
          }
          resolve(temp);
        });
      });
    });
  }

  insertIntoTable = () => {
    return new Promise((resolve, reject) => {
      console.log(
        "insert into user values(" +
          this.state.start +
          ",'test " +
          this.state.start +
          "', 'test address " +
          this.state.start +
          "')"
      );
      db.transaction(txn => {
        txn.executeSql(
          "insert into user values(" +
            this.state.start +
            ",'test " +
            this.state.start +
            "', 'test address " +
            this.state.start +
            "')",
          [],
          (tx, res) => {
            resolve();
          }
        );
      });
    });
  };

  deleteFromTable = index => {
    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          "delete from user where user_id=" + index,
          [],
          (tx, res) => {
            resolve();
          }
        );
      });
    });
  };

  //User defined
  insertUser = () => {
    this.insertIntoTable().then(() => {
      this.setState({
        start: this.state.start + 1
      });
      this.getUsers();
    });
  };

  getUsers = () => {
    this.selectFromTable().then(res => {
      this.setState({
        users: res
      });
    });
  };

  deleteUser = index => {
    this.deleteFromTable(index).then(() => {
      this.getUsers();
    });
  };

  componentDidMount() {
    this.getUsers();
  }

  onRefreshAction = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  };

  setRefreshing = () => {
    this.setState({ refreshing: true });
  };

  endReachedAction = () => {
    console.log('workinggggg')
    if (!this.loading) {
      setTimeout(() => {
        this.loading = true;
        this.setState({start : this.state.start + 1})
      }, 5000);
    }
  };

  onMomentumScrollBegin = () => {
    this.loading = false;
  };

  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) return null;
    return <ActivityIndicator style={{ color: "#000" }} />;
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50
        }}
      >
        <TouchableOpacity style={{ marginTop: 100 }} onPress={this.insertUser}>
          <Text>Add</Text>
        </TouchableOpacity>
        <FlatList
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0}
          onMomentumScrollBegin={() => this.onMomentumScrollBegin()}
          onEndReached={() => this.endReachedAction()}
          onRefresh={() => this.onRefreshAction()}
          refreshing={this.state.refreshing}
          style={{ marginTop: 20 }}
          data={this.state.users}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => this.deleteUser(item.user_id)}>
              <Text style={{ color: "blue" }}>{item.user_name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
