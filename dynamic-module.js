import { AsyncStorage } from 'react-native';

export function reactWeb() { 
  // this throws warnings on RN
  localStorage.setItem('web', 'React Web!');
  return localStorage.getItem('web');
}

export function reactNative() { 
  AsyncStorage.setItem('native', 'React Native');
  return AsyncStorage.getItem('native');
}