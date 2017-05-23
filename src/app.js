import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

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
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Card>
              <CardSection>
                <Button>Log Out</Button>
              </CardSection>
            </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
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
