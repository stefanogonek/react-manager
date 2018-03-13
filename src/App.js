import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
