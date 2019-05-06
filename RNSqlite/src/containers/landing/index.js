import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "user_db.sqlite", createFromLocation: 1 });
export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      start:1
    };
    
  }

  // DB methods
  selectFromTable() {
    return new Promise((resolve, reject) => {
      var temp = []
      db.transaction(function(txn) {
        txn.executeSql("SELECT * FROM user", [], function(tx, res) {
          for (var i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i))
          }
          resolve(temp)
        });
      });
    })
  }

  insertIntoTable = () => {
    return new Promise((resolve, reject)=> {
      console.log("insert into user values(" + this.state.start + ",'test " + this.state.start + "', 'test address " + this.state.start + "')")
      db.transaction((txn) => {
        txn.executeSql("insert into user values(" + this.state.start + ",'test " + this.state.start + "', 'test address " + this.state.start + "')", [], (tx,res) => {
          resolve()
        })
      })
    })
  }

  deleteFromTable = (index) => {
    return new Promise((resolve, reject)=> {
      db.transaction((txn) => {
        txn.executeSql("delete from user where user_id=" + index, [], (tx,res) => {
          resolve()
        })
      })
    })
  }

  //User defined
  insertUser = () => {
    this.insertIntoTable().then(()=> {
      this.setState( {
        start:this.state.start + 1
      })
      this.getUsers()
    }) 
  }

  getUsers=() => {
    this.selectFromTable().then((res)=> {
      this.setState({
        users:res
      })
    })
  }

  deleteUser= (index) => {
    this.deleteFromTable(index).then(() => {
      this.getUsers()
    })
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity style={{marginTop:100}} onPress={this.insertUser}><Text>Add</Text></TouchableOpacity>
        <FlatList style={{marginTop:20}} data={this.state.users} renderItem={({item,index}) => (
          <TouchableOpacity onPress={()=> this.deleteUser(item.user_id)}><Text style={{color:'blue'}}>{item.user_name}</Text></TouchableOpacity>
        )}></FlatList>
      </View>
    );
  }
}
