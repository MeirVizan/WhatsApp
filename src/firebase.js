import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA_4TwcEQ_96fA1NXthJ9PrLsi1OmPvMo",
  authDomain: "whatsapp-clone-51751.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-51751.firebaseio.com",
  projectId: "whatsapp-clone-51751",
  storageBucket: "whatsapp-clone-51751.appspot.com",
  messagingSenderId: "10269239480",
  appId: "1:10269239480:web:a7cb2acf8dde4dc9dfac4d",
  measurementId: "G-JWW593X5RZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;