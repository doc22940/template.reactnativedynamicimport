import React, {Fragment} from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

// Flip this bool!
const someCondition = true;

class App extends React.Component {
  state = { webValue: null, nativeValue: null }

  componentDidMount() { 
    if(someCondition) { 
      import('./dynamic-module').then(module => { 
        module.reactNative().then(nativeValue => this.setState({ nativeValue }));
        
        // this.setState({ webValue: module.reactWeb() });
      })
    }
  }

  render()  {
    return (
      <Fragment>
        <SafeAreaView>
          <Text> Hey There! This is a sample app! </Text>
          <Text>webValue: { this.state.webValue || 'null' }</Text>
          <Text>nativeValue: { this.state.nativeValue || 'null' }</Text>
        </SafeAreaView>
      </Fragment>
    );
  }
};


export default App;