import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDe_qC4_xixxgA7mtP-62gCjiEmai9ZfJ4",
    authDomain: "diet-checkerz-login-auth.firebaseapp.com",
    projectId: "diet-checkerz-login-auth",
    storageBucket: "diet-checkerz-login-auth.appspot.com",
    messagingSenderId: "172319731850",
    appId: "1:172319731850:web:8e7d478c729a1fce2b3d73",
    measurementId: "G-6NYQQTHTP4"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

//test commit