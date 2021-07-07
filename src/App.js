import { useEffect, useState } from 'react';

import ChatListItem  from './components/ChatListItem'
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat';
import Login from './components/Login'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import './app.css'
import api from './api';


function App() {

    const [chatList, setChatList] = useState([])
    const [activeChat, setActiveChat] = useState({})

    const [user,setUser] = useState(null)

    const [showNewChat, setShowNewChat]= useState(false)

    function handleShowNewChat(){
        setShowNewChat(true)
    }

    async function handleLoginData (user, displayName){
        let newUser = {
            id:user.uid,
            name:user.displayName ? user.displayName : displayName,
            avatar:user.photoURL  ? user.photoURL : 'https://www.w3schools.com/howto/img_avatar.png'     
        }

        await api.addUser(newUser)


        setUser(newUser)

    } 
    
    useEffect(()=>{

        if(user !== null){
           let unsubscribe = api.onchatList(user.id, setChatList)
           return unsubscribe
        }

    },[user])

    if(!user){

        return (
            <Login onReceive={handleLoginData} />
        )
    }


    return (
        
        <div className="App">
            <NewChat 
                chatList={chatList}
                user={user}
                showNewChat={showNewChat}
                setShowNewChat={setShowNewChat}
            />
            <aside>

                <header>
                    <img className="header--avatar" src={user.avatar}alt='user image' />
                    <div className='header--buttons'>
                        <div className="header--btn">
                            <DonutLargeIcon style={{color:"#919191"}}/>
                        </div>
                        <div onClick={handleShowNewChat} className='header--btn'>
                            <ChatIcon style={{color:"#919191"}}/>
                        </div>
                        <div className="header--btn">
                            <MoreVertIcon style={{color:"#919191"}} />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search--input">
                        <SearchIcon fontSize="small" style={{color:"#919191"}}/>
                        <input type='search' placeholder="procurar uma nova conversa"/>
                    </div>
                </div>

                <div className="chatList">
                    {
                        chatList.map((item, key)=>{
                            return(
                                <ChatListItem  
                                    key={key}
                                    data={item}
                                    active={activeChat.id === chatList[key].id}
                                    onClick={()=>{
                                        setActiveChat(chatList[key])
                                    }}
                                
                                />
                            )
                        })
                    }
                </div>
            </aside>
            <main>
                {
                    activeChat.title !== undefined && <ChatWindow user={user} data={activeChat}/> 
                }
                {
                    activeChat.title === undefined &&  <ChatIntro/>
                }
                
            </main>
        </div>
    );
  }
  
  export default App;
  