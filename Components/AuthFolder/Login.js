import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button } from 'react-native'

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Auth: 'false',
      nameUser: '',
      namePass: '',
   };
  }

  Authentification = () => {
    if( this.state.nameUser == 'tibo' )
    {
      if( this.state.namePass == 'pass')
      {
        this.setState ({Auth : this.state.Auth = 'true'});
        this.props.navigation.navigate('CounterContain');
      }
      else
      {
        this.setState ({Auth : this.state.Auth = 'false'});
        this.props.navigation.navigate('BadLogin');
      }
    }
    else
    {
      this.setState ({Auth : this.state.Auth = 'false'});
      this.props.navigation.navigate('BadLogin');
    }

  }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text>test NameUser => {this.state.nameUser}</Text>
        <Text>test namePass => {this.state.namePass}</Text>
        <Text>test Auth => {this.state.Auth}</Text>
        <Text style={{fontSize: 27}}> Login </Text>
        <TextInput placeholder='Username' onChangeText = {(nameUser) => this.setState({nameUser})} value={this.state.nameUser}/>
        <TextInput placeholder='Password' onChangeText = {(namePass) => this.setState({namePass})} value={this.state.namePass}/>
        <Button title="Authentification" onPress={this.Authentification} />
      </ScrollView>
    )
  }

}
