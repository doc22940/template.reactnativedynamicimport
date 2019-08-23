import { AsyncStorage } from 'react-native';

export function reactWeb() { 
  // this throws warnings on RN
  localStorage.setItem('web', 'React Web!');
  return localStorage.getItem('web');
}

export function reactNative() { 
  let setItem = AsyncStorage.setItem('native', 'React Native');
  let getItem = AsyncStorage.getItem('native');

  return Promise.all([
    setItem,
    getItem
  ]);
}