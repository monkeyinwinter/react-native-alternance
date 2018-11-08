import React from 'react'
import {Platform, StyleSheet, Text, View, Button} from 'react-native'

export default class Promise extends React.Component {

  constructor(props){
    super(props);
    this.state = { stars: ''};
  }

  async componentDidMount() {
    let data = await this.fetchData();
    this.setState ({stars : this.state.stars = data});
  }

  async fetchData(): Promise<void> {
    const response = await fetch('https://api.github.com/repos/facebook/react-native')
    const json = await response.json()
    const stars : number = json.stargazers_count
    return stars;
  }

  render() {
    return (
      <View>
        <Text>React Native has {this.state.stars} stars</Text>
      </View>
    )
  }

}
