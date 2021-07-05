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
    },
    addNewChat: async function (user, user2){
        let newchat = await database.collection('chats').add({
            messages:[],
            users:[user.id, user2.id]

        })

        database.collection('users').doc(user.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newchat.id,
                title: user2.name,
                image:user2.avatar,
                with: user2.id
            })
        })

        database.collection('users').doc(user2.id).update({
            chats: firebase.firestore.FieldValue.arrayUnion({
                chatId: newchat.id,
                title: user.name,
                image:user.avatar,
                with: user.id
            })
        })
    },
    onchatList: function (userId, setChatList){
        return database.collection('users').doc(userId).onSnapshot((doc)=>{
            if(doc.exists){
                let data = doc.data()
                if(data.chats){
                    let chats = [...data.chats]

                    chats.sort((a,b)=>{
                        if (a.lastMessageDate === undefined){
                            return -1
                        }
                        if (b.lastMessageDate === undefined){
                            return -1
                        }
                        if (a.lastMessageDate.seconds < b.lastMessageDate.seconds){
                            return 1
                        }
                        else{
                            return -1
                        }
                    })


                    setChatList(chats)
                }

            }
        })

    },
    onChatContent: function(chatId,setMessageList, setUsers ){
        return database.collection('chats').doc(chatId).onSnapshot((doc)=>{
            if(doc.exists){
                let data = doc.data()
                setMessageList(data.messages)
                setUsers(data.users)
            }
        })
    },
    sendMessageclick: async function (chatData, userId, type , body , users){
      
        let now = new Date()
        database.collection('chats').doc(chatData.chatId).update({
            messages: firebase.firestore.FieldValue.arrayUnion({
                type,
                author:userId,
                body,
                date:now
            })
        })

        for(let i = 0; i < users.length; i++){
            let user = await database.collection('users').doc(users[i]).get()
            let userData = user.data()
            let chats = [...userData.chats]

            for(let e = 0 ;e < chats.length ; e ++){
                if (chats[e].chatId === chatData.chatId){
                    chats[e].lastMessage = body
                    chats[e].lastMessageDate = now
                    
                }
          
            }

            await database.collection('users').doc(users[i]).update({
                chats
            })
        }
    }
}