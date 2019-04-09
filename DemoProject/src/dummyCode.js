import React, { Component } from 'react';
import {Text, SectionList, ScrollView, FlatList, Alert, View, TextInput, Button, Image, StyleSheet } from 'react-native';


// Arrow funtion

//Handling Touches
export default class dummyCode extends Component {

  constructor(){
    super()
    this.state= {
      keyData:''
    }

  }




  //   updateData = (item) => {
//     return (
//       <Text style={styles.item}>
//       {item.key}
//       </Text>
//     ) 
//   }


// arrow function
buttonClicked = (value) => {
  
  this.setState({keyData: value})

}

  _onPressButton = () => {
    //Alert.alert('You tapped the button!')
    this.buttonClicked('ABC');
  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.textItem}>{this.state.keyData} </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Show Data"
          />
        </View>
      </View>
    );
  }
}


 

//Styles
const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: 'red'
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textItem: {
    padding: 100,
    fontSize: 18,
    height: 44,
  }
});




// //Using SectionList
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <SectionList
//           sections={[
//             {title: 'D', data: ['Devin']},
//             {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
//           renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 44
//   },
//   sectionHeader: {
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 14,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })





// //Using FlatList  
// export default class Landing extends Component {

//   updateData = (item) => {
//     return (
//       <Text style={styles.item}>
//       {item.key}
//       </Text>
//     ) 
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             {key: 'Devin'},
//             {key: 'Jackson'},
//             {key: 'James'},
//             {key: 'Joel'},
//             {key: 'John'},
//             {key: 'Jillian'},
//             {key: 'Jimmy'},
//             {key: 'Julie'},
//           ]}
//           renderItem={({item}) => this.updateData(item)}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    paddingTop: 44
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
// })




// // Using ScrollView
// export default class Landing extends Component {
//   render() {
//       return (
//         <ScrollView style={{marginTop:100}}>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>What's the best</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:96}}>Framework around?</Text>
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }





// //Handling Touches
// export default class Landing extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.buttonContainer}>
//           <Button
//             onPress={this._onPressButton}
//             title="Show alert"
//           />
//         </View>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//    justifyContent: 'center',
//   },
//   buttonContainer: {
//     margin: 20,
//     backgroundColor: 'red'
//   },
//   alternativeLayoutButtonContainer: {
//     margin: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   }
// });



// Handling Text Input
// export default class Landing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }

//   render() {
//     return (
//       <View style={{
//         padding: 10, 
//         marginTop: 100,
//         }}>
        
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

// // //Layout with Flexbox Align Item
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style = {{ 
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch', 
//       }}>
//        <View style = {{width: 50, height: 50, backgroundColor: 'powderblue'}}>
//         <View style = {{width: 15, height: 15, backgroundColor: 'red'}} />
//        </View>
//        <View style={{height: 50, backgroundColor: 'skyblue'}} />
//        <View style={{height: 100, backgroundColor: 'steelblue'}} />
//        </View>
//     );
//   }
// }



// //Layout with Flexbox Justify Content
// export default class Landing extends Component {
//   render() {
//     return (
//       // Try setting `justifyContent` to `center`.
//       // Try setting `flexDirection` to `row`.
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         marginTop:44,
//         marginBottom: 44,
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };



// //Height and Width Fixed Dimensions Flex Dimensions
// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return (
//       // Try removing the `flex: 1` on the parent View.
//       // The parent will not have dimensions, so the children can't expand.
//       // What if you add `height: 300` instead of `flex: 1`?
//       <View style={{flex: 1, flexDirection: 'row', marginTop: 44}}>
//         <View style={{flex: 0.30, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 0.60, marginLeft:20, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 0.10, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// //Height and Width Fixed Dimensions 
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style = {{marginTop:100, marginLeft:50}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
//         <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }



// style
// const styles = StyleSheet.create({
//   bigBlue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop:100}}>
//         <Text style={styles.red}>just red</Text>
//         <Text style={styles.bigBlue}>just bigBlue</Text>
//         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
//         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
//       </View>
//     );
//   }
// }




// state
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isShowingText: true };

//     // Toggle the state every second
//     setInterval(() => (
//       this.setState(previousState => (
//         { isShowingText: !previousState.isShowingText }
//       ))
//     ), 1000);
//   }
//   render() {
//     if (!this.state.isShowingText) {
//       return null;
//     }

//     return (
//       <Text>{this.props.text}</Text>
//     );
//   }
// }
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop:100}}>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }

// ImageView
// export default class Landing extends Component {
//     render() {
//         let picture = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//         }
//       return (
//         //For returning Image
//           <Image source = {picture} style = {{width: "100%", height: "100%"}}/>

//         //For returning view
//         // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         //   <Text>Hello, world!</Text>
//         // </View>
//       );
//     }
//   }


// How to use props
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }
// export default class Landing extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop:100}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
