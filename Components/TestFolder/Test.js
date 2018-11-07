import React from 'react'
import { View, TextInput, Button, Text, FlatList } from 'react-native'

import flatList from './flatList'

class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

      return (
        <View>
          <Text>blabla</Text>

          <View >
            <FlatList
              data = {flatList}
              renderItem = {({ item }) => <Text style={{ width: 200, backgroundColor: 'grey', marginBottom: 10, color: "white" }}>{ item.title }</Text>}
            />
          </View>

        </View>
      )

  }

}

export default Test
