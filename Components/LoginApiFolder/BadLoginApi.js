import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button } from 'react-native'

export default class BadLoginApi extends Component {

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}> BAD LOGIN API</Text>
        <Button
          title="Return to LoginApi"
          onPress={() => this.props.navigation.navigate('LoginApi')}
        />
      </ScrollView>
    )
  }

}
