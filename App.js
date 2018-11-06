import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Navigation from './NavigationFolder/Navigation'

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Navigation/>
    );
  }
}
