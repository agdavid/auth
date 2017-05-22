import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'; //referencing directory defaults to index.js

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA1cPeM7meOykxdAGEIpVBsZh-dNd2zIgc',
        authDomain: 'authentication-42301.firebaseapp.com',
        databaseURL: 'https://authentication-42301.firebaseio.com',
        projectId: 'authentication-42301',
        storageBucket: 'authentication-42301.appspot.com',
        messagingSenderId: '663692018762'
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
