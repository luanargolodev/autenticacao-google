import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTdw3XVaOuMOfC-MiKCJ3OJG3KCNDyTuU',
  authDomain: 'auth-b91f6.firebaseapp.com',
  projectId: 'auth-b91f6',
  storageBucket: 'auth-b91f6.appspot.com',
  messagingSenderId: '118935724841',
  appId: '1:118935724841:web:2273aae4dd8ca1f197cd38'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);