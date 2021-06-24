import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('CSSModulesExample', () => App);
AppRegistry.runApplication('CSSModulesExample', {
  rootTag: document.getElementById('react-app'),
});

if (module.hot) {
  module.hot.accept('./App');
}