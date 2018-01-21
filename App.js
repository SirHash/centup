import './ReactotronConfig'
import React from 'react';

import reducers from './src/redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Router from './Routers';

import OneSignal from 'react-native-onesignal';


export default class App extends React.Component {


	componentWillMount() {
	    OneSignal.addEventListener('received', this.onReceived);
	    OneSignal.addEventListener('opened', this.onOpened);
	    OneSignal.addEventListener('registered', this.onRegistered);
	    OneSignal.addEventListener('ids', this.onIds);
	}

	componentWillUnmount() {
	    OneSignal.removeEventListener('received', this.onReceived);
	    OneSignal.removeEventListener('opened', this.onOpened);
	    OneSignal.removeEventListener('registered', this.onRegistered);
	    OneSignal.removeEventListener('ids', this.onIds);
	}

	onReceived(notification) {
	    console.log("Notification received: ", notification);
	}

	onOpened(openResult) {
	  console.log('Message: ', openResult.notification.payload.body);
	  console.log('Data: ', openResult.notification.payload.additionalData);
	  console.log('isActive: ', openResult.notification.isAppInFocus);
	  console.log('openResult: ', openResult);
	}

	onRegistered(notifData) {
	    console.log("Device had been registered for push notifications!", notifData);
	}

	onIds(device) {
	console.log('Device info: ', device);
	}

	 render() {
	    return (
	      <Provider store={createStore(reducers, {})}>
	        <Router/>
	      </Provider>
	    );
	  }
	};


//🐴 Tenho que certeza que não me viu!!!, mas eu to aí.
//Teste Git zsfkjsdfhsd
