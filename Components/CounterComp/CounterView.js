import React from 'react'
import { View, TextInput, Button, Text } from 'react-native'

import CounterStyle from './CounterStyle'

class CounterView extends React.Component {


  render() {
      return (

        <View style={CounterStyle.container}>
          <View style={CounterStyle.btnRow}>
          <Button
            title="Test"
            onPress={() => this.props.navigation.navigate('Test')}
          />
          <Button
            title="Geoloc"
            onPress={() => this.props.navigation.navigate('Geoloc')}
          />
          <Button
            title="ApiMetaWeather"
            onPress={() => this.props.navigation.navigate('ApiMetaWeather')}
          />
          </View>

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
