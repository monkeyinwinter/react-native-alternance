import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button } from 'react-native'

export default class GoodLoginApi extends Component {

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27, textAlign: 'center'}}> GOOD LOGIN API</Text>
        <Button
          title="Go to CounterContain"
          onPress={() => this.props.navigation.navigate('CounterContain')}
        />
      </ScrollView>
    )
  }

}
