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
        let result = await auth.signInWithPopup(provider)
        return result
    },
    addUser: async function(user){
        await database.collection('users').doc(user.id).set({
            name:user.name,
            avatar: user.avatar
        },{merge:true})
    },
    getContactList: async function (userId){
        let ContactList =[]
        
        let results = await database.collection('users').get()

        results.forEach(result =>{
            let data = result.data()
            if (result.id !== userId){
                ContactList.push({
                    id: result.id,
                    name: data.name,
                    avatar: data.avatar
                })
            }
        })
        return ContactList
    }
}