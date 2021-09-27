import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCE-PeThOSDk_Uq1wlvjkWigu53DzEmM3g',
  authDomain: 'linkedin-clone-7b406.firebaseapp.com',
  projectId: 'linkedin-clone-7b406',
  storageBucket: 'linkedin-clone-7b406.appspot.com',
  messagingSenderId: '31121974963',
  appId: '1:31121974963:web:3cbc27e70a4a22f118b2c6',
  measurementId: 'G-HXQ814D6PQ',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
