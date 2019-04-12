import React,{Component} from 'react';
import {Platform, StyleSheet, Text,View,Button,FlatList,SectionList} from 'react-native'
import { createAppContainer } from 'react-navigation';



export default class SearchBar extends React.Component {
    constructor(props) {
     super(props);
   this.state = { term: '' };
    }
   render() {
     return (
      <div className="search-bar">
      <input 
      value={this.state.term}
      onChange={event => this.onInputChange(event.target.value)} />
      </div>
      );
    }
   onInputChange(term) {
     this.setState({term});
     this.props.onSearchTermChange(term);
    }
   }

   
  
  