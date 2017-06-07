/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import {
  Navigator
} from 'react-native-deprecated-custom-components';

import Landing from './application/components/Landing';
// import Dashboard from './application/components/Dashboard';
import { globals } from './application/styles';


export default class rentplace extends Component {
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            {/*case 'Dashboard':
              return (
                <Dashboard navigator={navigator}/>
            );*/}
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('rentplace', () => rentplace);
