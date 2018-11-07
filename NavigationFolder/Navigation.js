import { createStackNavigator } from 'react-navigation'

import CounterContain from '../Components/CounterComp/CounterContain'
import Test from '../Components/TestFolder/Test'
import Geoloc from '../Components/GeolocFolder/GeolocContain'
import ApiMetaWeather from '../Components/ApiMetaWeatherFolder/ApiMetaWeather'

const SearchStackNavigator = createStackNavigator({

  Search: {

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

  }

})


export default SearchStackNavigator
