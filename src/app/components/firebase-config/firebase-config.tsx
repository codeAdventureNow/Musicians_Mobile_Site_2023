// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDooP_AhB_VfpKlLh2Ros3sYs5yR208VpU',
  authDomain: 'musicians-mobile.firebaseapp.com',
  projectId: 'musicians-mobile',
  storageBucket: 'musicians-mobile.appspot.com',
  messagingSenderId: '483601978233',
  appId: '1:483601978233:web:81b84e24908f2bdcc6d5a8',
  measurementId: 'G-DL4XZGGCC1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
