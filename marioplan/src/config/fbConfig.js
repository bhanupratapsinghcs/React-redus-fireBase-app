import firebase from 'fireBase/app'
import 'firebase/firestore'
import 'firebase/auth'

// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyD4bEDb1mZImdAo8c-45aDWgCyED9za78Y",
    authDomain: "mario-plan-1919d.firebaseapp.com",
    projectId: "mario-plan-1919d",
    storageBucket: "mario-plan-1919d.appspot.com",
    messagingSenderId: "478137152275",
    appId: "1:478137152275:web:c9af7074413776794d60e6",
    measurementId: "G-MJQ3GXV7RY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })
firebase.analytics();

export default firebase;