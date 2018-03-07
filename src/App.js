import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB0A2L4GvdD84kK0ujFZmQj3yL-AGnwtYU',
      authDomain: 'manager-59107.firebaseapp.com',
      databaseURL: 'https://manager-59107.firebaseio.com',
      projectId: 'manager-59107',
      storageBucket: 'manager-59107.appspot.com',
      messagingSenderId: '283906371702'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Yo yo!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
