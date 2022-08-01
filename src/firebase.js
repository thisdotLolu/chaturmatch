import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdTz4K6uUINArc6wSYG-OMo9uAxRisujs",
    authDomain: "chaturmatch.firebaseapp.com",
    projectId: "chaturmatch",
    storageBucket: "chaturmatch.appspot.com",
    messagingSenderId: "890086738780",
    appId: "1:890086738780:web:07893360ca8c6bfc90cf99"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);

  const database =firebaseApp.firestore()

  export default database;