import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common'; //referencing directory defaults to index.js
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA1cPeM7meOykxdAGEIpVBsZh-dNd2zIgc',
        authDomain: 'authentication-42301.firebaseapp.com',
        databaseURL: 'https://authentication-42301.firebaseio.com',
        projectId: 'authentication-42301',
        storageBucket: 'authentication-42301.appspot.com',
        messagingSenderId: '663692018762'
      });

    firebase.auth().onAuthStateChanged((user) => {
      // called when sign-in/sign-out, determines presence of user
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
