import React, { Component } from 'react';
import { AppLoading } from 'expo'
import HomeScreen from './screen/HomeScreen';
import { Container } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({
      isReady: true
    });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading /> ;
    }
    return (
      <Container>
        <HomeScreen />
      </Container>
    );
  }
}