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

            <View style={CounterStyle.marge}></View>
            <Button
              title="Geoloc"
              onPress={() => this.props.navigation.navigate('Geoloc')}
            />

            <View style={CounterStyle.marge}></View>
            <Button
              title="ApiMetaWeather"
              onPress={() => this.props.navigation.navigate('ApiMetaWeather')}
            />

            <View style={CounterStyle.marge}></View>
            <Button
              title="Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />

            <View style={CounterStyle.marge}></View>
            <Button
              title="Promise"
              onPress={() => this.props.navigation.navigate('Promise')}
            />

            <View style={CounterStyle.marge}></View>
            <Button
              title="LoginApi"
              onPress={() => this.props.navigation.navigate('LoginApi')}
            />

          </View>

          <View style={CounterStyle.containGlobal}>
            <View style={CounterStyle.containA}>
              <Text style={CounterStyle.counter}>{this.props.counter}</Text>
            </View>

            <View style={CounterStyle.containB}>
              <Button onPress={this.props.like} title="like" color="green"/>
              <Button onPress={this.props.dislike} title="dislike" color="red"/>
            </View>

          </View>

        </View>

      )

  }

}

export default CounterView
