import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const app = initializeApp({
  apiKey: "AIzaSyAAUB6ebhvx8QBYJgW_xg4_Mc2iL_8Rg9k",
  authDomain: "fire-blog-3fe57.firebaseapp.com",
  databaseURL: "https://fire-blog-3fe57-default-rtdb.firebaseio.com",
  projectId: "fire-blog-3fe57",
  storageBucket: "fire-blog-3fe57.appspot.com",
  messagingSenderId: "573377398764",
  appId: "1:573377398764:web:18b182cde86d51902f62c9"
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


//----------------------------------------------------------------

//apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//projectId: process.env.REACT_APP_FIREBASE_projectId,
//storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
//appId: process.env.REACT_APP_FIREBASE_appId,