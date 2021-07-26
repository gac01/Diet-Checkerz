import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDe_qC4_xixxgA7mtP-62gCjiEmai9ZfJ4",
  authDomain: "diet-checkerz-login-auth.firebaseapp.com",
  databaseURL:
    "https://diet-checkerz-login-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "diet-checkerz-login-auth",
  storageBucket: "diet-checkerz-login-auth.appspot.com",
  messagingSenderId: "172319731850",
  appId: "1:172319731850:web:ca6a474861f97ab52b3d73",
  measurementId: "G-E82F86NJLG",
};
export const fire = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const createUserDocument = async (userData) => {
  const {
    user,
    username,
    gender,
    age,
    weight,
    height,
    goal,
    bodytype,
    sleeptime,
    goaltime,
  } = userData;
  if (!user) return;
  const userRef = fire.firestore().doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email } = user;
    try {
      userRef.set({
        username,
        email,
        gender,
        age,
        weight,
        height,
        goal,
        bodytype,
        sleeptime,
        goaltime,
      });
    } catch (error) {
      console.log("Error in creating user", error);
    }
  }
};
