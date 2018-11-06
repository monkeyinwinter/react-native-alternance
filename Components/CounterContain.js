import React from 'react'
import { View, TextInput, Button } from 'react-native'

import CounterView from './CounterView'
import CounterStyle from './CounterStyle'

class CounterContain extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  like = () => {
    this.setState ({counter : this.state.counter +1});
  }

  dislike = () => {
    this.setState ({counter : this.state.counter -1});
  }

  render() {

      return (
        <CounterView counter = {this.state.counter} like = {this.like} dislike = {this.dislike}/>
      )

  }

}

export default CounterContain
