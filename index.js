import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import store from './redux/store';
// import { notificationTask } from "./Push"

const RNRedux = () => {
    return (<App />)
}
AppRegistry.registerComponent(appName, () => RNRedux);
