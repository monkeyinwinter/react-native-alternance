
import React from 'react'
import {StyleSheet} from 'react-native';

  const CounterStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      flexDirection: 'column',
    },
    containGlobal: {
      height: 150,
      justifyContent: 'space-between',
      borderWidth: 0.5,
      borderColor: '#0101c8',
      alignItems: 'center',
    },
    counter: {
      height: 40,
      width: 50,
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: 'blue',
      textAlignVertical: 'center',
      color: 'white',
    },
    containA: {
      justifyContent: 'center',
    },
    containB: {
      height: 40,
      width:250,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    btnLike: {
      backgroundColor: 'green',
      height: 40,
      width: 100,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    btnDislike: {
      backgroundColor: 'red',
      height: 40,
      width: 100,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });


export default CounterStyle
