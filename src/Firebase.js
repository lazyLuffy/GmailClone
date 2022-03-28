import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAVIGiG6WxLtE4_ouPUgHoMcpKMsx5rP2c",
    authDomain: "clone-jatin.firebaseapp.com",
    projectId: "clone-jatin",
    storageBucket: "clone-jatin.appspot.com",
    messagingSenderId: "478038004250",
    appId: "1:478038004250:web:3ec5c0cc8fd04fca7f37a3",
    measurementId: "G-46Q63Y69SR"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}