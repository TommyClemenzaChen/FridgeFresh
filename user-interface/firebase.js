import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCtfpqeR6j0SyFXV7erRmj19JmH03oKugo',
	authDomain: 'fridgefresh-19ef9.firebaseapp.com',
	projectId: 'fridgefresh-19ef9',
	storageBucket: 'fridgefresh-19ef9.appspot.com',
	messagingSenderId: '778649207215',
	appId: '1:778649207215:web:c12fa77ee698877394af5a',
	measurementId: 'G-Q0NVGYS8EJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Firestore db instance
const db = getFirestore(app);
// Get the Auth instance
const auth = getAuth(app);
// Get the Storage instance
const storage = getStorage(app);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export { db, auth, storage, Timestamp, firebaseApp };
