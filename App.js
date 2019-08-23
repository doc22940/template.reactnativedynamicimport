import React, {Fragment} from 'react';

import {
  SafeAreaView,
  Text,
} from 'react-native';

// Flip this bool!
const someCondition = false;

class App extends React.Component {
  state = { webValue: null, nativeValue: null }

  componentDidMount() { 
    if(someCondition) { 
      import('./dynamic-module').then(module => { 
        // This should work fine in RN
        module.reactNative().then(val => this.setState({ nativeValue: val[1] }));
        // Following line generates warnings of no reference to localstorage
        this.setState({ webValue: module.reactWeb() });
      })
    }
  }

  render()  {
    return (
      <Fragment>
        <SafeAreaView>
          <Text>webValue: { this.state.webValue || 'null' }</Text>
          <Text>nativeValue: { this.state.nativeValue || 'null' }</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default App;
