import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'

import CounterStyle from './CounterStyle'

class CounterView extends React.Component {


  render() {
      return (

        <View style={CounterStyle.container}>

          <Button
            title="Go to Test"
            onPress={() => this.props.navigation.navigate('Test')}
          />

          <View style={CounterStyle.containGlobal}>

            <View style={CounterStyle.containA}>
              <Text style={CounterStyle.counter}>{this.props.counter}</Text>
            </View>

            <View style={CounterStyle.containB}>
              <Button onPress={this.props.like} title="like" color="green"/>
              <Button onPress={this.props.dislike} title="dislike"color="red"/>
            </View>

          </View>

        </View>

      )

  }

}

export default CounterView
