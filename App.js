import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import CounterContain from './Components/CounterContain'
import CounterView from './Components/CounterView'
import CounterStyle from './Components/CounterStyle'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

  // constructor(props) {
  //   super(props);
  //   this.state = { counter: 0 };
  // }
  //
  // like = () => {
  //   this.setState ({counter : this.state.counter+1});
  // }
  //
  // dislike = () => {
  //   this.setState ({counter : this.state.counter-1});
  // }

  render() {
    return (
      <CounterContain/>
      // <View style={styles.container}>
      //   <View style={styles.containGlobal}>
      //     <View style={styles.containA}>
      //       <Text style={styles.counter}>{this.state.counter}</Text>
      //     </View>
      //     <View style={styles.containB}>
      //       <Button onPress={this.like} title="like" color="green"/>
      //       <Button onPress={this.dislike} title="dislike"color="red"/>
      //     </View>
      //   </View>
      // </View>
    );
  }
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//     flexDirection: 'column',
//   },
//   containGlobal: {
//     height: 150,
//     justifyContent: 'space-between',
//     borderWidth: 0.5,
//     borderColor: '#0101c8',
//     alignItems: 'center',
//   },
//   counter: {
//     height: 40,
//     width: 50,
//     justifyContent: 'center',
//     textAlign: 'center',
//     backgroundColor: 'blue',
//     textAlignVertical: 'center',
//     color: 'white',
//   },
//   containA: {
//     justifyContent: 'center',
//   },
//   containB: {
//     height: 40,
//     width:250,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   btnLike: {
//     backgroundColor: 'green',
//     height: 40,
//     width: 100,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   btnDislike: {
//     backgroundColor: 'red',
//     height: 40,
//     width: 100,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
