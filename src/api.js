import firebase from "firebase";
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import firebaseConfig from "./firebaseConfig";

const appFirebase = firebase.initializeApp(firebaseConfig)

const database = appFirebase.firestore()

const auth = appFirebase.auth()