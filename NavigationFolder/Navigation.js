import { createStackNavigator } from 'react-navigation'

import CounterContain from '../Components/CounterComp/CounterContain'
import Test from '../Components/TestFolder/Test'

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
    
  }

})


export default SearchStackNavigator
