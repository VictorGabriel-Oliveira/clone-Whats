import firebase from "firebase";
import 'firebase/firebase-firestore'
import 'firebase/firebase-auth'
import firebaseConfig from "./firebaseConfig";

const appFirebase = firebase.initializeApp(firebaseConfig)

const database = appFirebase.firestore()
const auth = appFirebase.auth()

export default {
    googlePopup: async function (){
        const provider = new firebase.auth.GoogleAuthProvider()
        let result = await appFirebase.auth().signInWithPopup(provider)
        return result
    },
    addUser: async function(user){
        await database.collection('users').doc(user.id).set({
            name:user.name,
            avatar: user.avatar
        },{merge:true})
    }
}