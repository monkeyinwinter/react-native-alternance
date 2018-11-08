import { createStackNavigator } from 'react-navigation'

import CounterContain from '../Components/CounterComp/CounterContain'
import Test from '../Components/TestFolder/Test'
import Geoloc from '../Components/GeolocFolder/GeolocContain'
import ApiMetaWeather from '../Components/ApiMetaWeatherFolder/ApiMetaWeather'
import Login from '../Components/AuthFolder/Login'
import BadLogin from '../Components/AuthFolder/BadLogin'
import Promise from '../Components/PromiseFolder/Promise'

const SearchStackNavigator = createStackNavigator({

  CounterContain: {
    screen: CounterContain,
    navigationOptions: {
      title: 'Counter'
    }
  },

  Test: {
    screen: Test,
    navigationOptions: {
      title: 'Test'
    }
  },

  Geoloc: {
    screen: Geoloc,
    navigationOptions: {
      title: 'Geoloc'
    }
  },

  ApiMetaWeather: {
    screen: ApiMetaWeather,
    navigationOptions: {
      title: 'ApiMetaWeather'
    }
  },

  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },

  BadLogin: {
    screen: BadLogin,
    navigationOptions: {
      title: 'BadLogin'
    }
  },

  Promise: {
    screen: Promise,
    navigationOptions: {
      title: 'Promise'
    }
  }


})


export default SearchStackNavigator
