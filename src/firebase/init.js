// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP5--62h2omXtWqxXJA9MdCnJxuEkH084',
  authDomain: 'week7-tnhan.firebaseapp.com',
  projectId: 'week7-tnhan',
  storageBucket: 'week7-tnhan.appspot.com',
  messagingSenderId: '355547100538',
  appId: '1:355547100538:web:4505c662b64a08215992c3'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
