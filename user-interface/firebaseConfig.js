// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCtfpqeR6j0SyFXV7erRmj19JmH03oKugo',
	authDomain: 'fridgefresh-19ef9.firebaseapp.com',
	projectId: 'fridgefresh-19ef9',
	storageBucket: 'fridgefresh-19ef9.appspot.com',
	messagingSenderId: '778649207215',
	appId: '1:778649207215:web:c12fa77ee698877394af5a',
	measurementId: 'G-Q0NVGYS8EJ',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

export { auth, app };
