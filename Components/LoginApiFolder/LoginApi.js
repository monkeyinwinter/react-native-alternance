import React, { Component } from 'react'
import { ScrollView, Text, TextInput, View, Button, AsyncStorage } from 'react-native'


export default class LoginApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
   };
  }


    AuthentificationApi = () => {

      if (!this.state.username || !this.state.password) return;

      fetch('https://campus-auth.herokuapp.com/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      })
      .then((response) => response.json())
      .then((responseData) => {

        console.log(responseData.message);
        console.log(responseData.success);

        if (responseData.success == true){
          this.props.navigation.navigate('CounterContain');
        }

        if (responseData.message == 'Wrong password.'){
          this.props.navigation.navigate('BadLoginApi');
        }

      })
      .done();

    }

  render() {
    return (
      <ScrollView style={{padding: 20}}>
        <Text>test username => {this.state.username}</Text>
        <Text>test password => {this.state.password}</Text>

        <Text style={{fontSize: 27}}> Login </Text>
        <TextInput placeholder='username' onChangeText = {(username) => this.setState({username})} value={this.state.username}/>
        <TextInput placeholder='password' onChangeText = {(password) => this.setState({password})} value={this.state.password} secureTextEntry={true}/>
        <Button title="AuthentificationApi" onPress={this.AuthentificationApi} />
      </ScrollView>
    )
  }

}
