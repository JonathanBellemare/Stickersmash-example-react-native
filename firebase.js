// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAujcBM3_bLL-mnzexx9nZ2CqoKdtb64_g",
    authDomain: "extraball-ec31a.firebaseapp.com",
    projectId: "extraball-ec31a",
    storageBucket: "extraball-ec31a.appspot.com",
    messagingSenderId: "773571513162",
    appId: "1:773571513162:web:37dca680f050f3d0634fb3"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
