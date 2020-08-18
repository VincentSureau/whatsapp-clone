import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-Xr9rYn2--7sbUsEgMbbotx1iQaZKUjc",
  authDomain: "whatsapp-clone-a6aa5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-a6aa5.firebaseio.com",
  projectId: "whatsapp-clone-a6aa5",
  storageBucket: "whatsapp-clone-a6aa5.appspot.com",
  messagingSenderId: "744647708132",
  appId: "1:744647708132:web:27de36794dc28748dd4bf1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;