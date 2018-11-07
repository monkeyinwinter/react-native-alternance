import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import Navigation from './NavigationFolder/Navigation'

import Login from './Components/AuthFolder/Login'
import Secured from './Components/AuthFolder/Secured'

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Navigation/>
    );
  }
}
