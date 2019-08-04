import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA5qeYp1gtdXke9TASNPeRTT_NoFwp9l1Y",
    authDomain: "todotodos.firebaseapp.com",
    databaseURL: "https://todotodos.firebaseio.com",
    projectId: "todotodos",
    storageBucket: "todotodos.appspot.com",
    messagingSenderId: "167137631483",
    appId: "1:167137631483:web:87996e4370d2ce9d"
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;