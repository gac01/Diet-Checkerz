import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDe_qC4_xixxgA7mtP-62gCjiEmai9ZfJ4",
  authDomain: "diet-checkerz-login-auth.firebaseapp.com",
  projectId: "diet-checkerz-login-auth",
  storageBucket: "diet-checkerz-login-auth.appspot.com",
  messagingSenderId: "172319731850",
  appId: "1:172319731850:web:8e7d478c729a1fce2b3d73",
  measurementId: "G-6NYQQTHTP4",
};

export const fire = firebase.initializeApp(firebaseConfig);

export const createUserDocument = async (
  user,
  username,
  gender,
  age,
  weight,
  height,
  goal,
  bodytype,
  sleeptime,
  goaltime
) => {
  if (!user) return;
  const userRef = fire.firestore().doc("users/user.uid");
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, password } = user;
    try {
      userRef.set({
        username,
        email,
        password,
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

//test commit
