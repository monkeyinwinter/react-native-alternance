import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button } from 'react-native'

export default class BadLogin extends Component {

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text style={{fontSize: 27}}> BAD LOGIN </Text>
        <Text style={{fontSize: 15, textAlign: 'center', margin: 10}}>Erreur quelque part, le login ou le password !!</Text>
        <Button
          title="Return to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </ScrollView>
    )
  }

}
