import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './AppNavigation';
import Auth from './src/components/Auth';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  };

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        user: { email: 'panchourgiles@gmail.com' }
      });
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
      {
        this.state.user
        ? <AppNavigation user={this.state.user} />
        : <Auth />
      }
      </View>
    );
  }
}
