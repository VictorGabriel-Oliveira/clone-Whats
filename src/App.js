import { useState } from 'react';

import ChatListItem  from './components/ChatListItem'
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow'
import NewChat from './components/NewChat';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import './app.css'


function App() {

    const [chatList, setChatList] = useState([
        {
            id:1,
            title:'Victor Gabriel',
            image:'https://www.w3schools.com/howto/img_avatar2.png'
        },{
            id:2,
            title:'Manuh',
            image:'https://www.w3schools.com/howto/img_avatar2.png'
        },{
            id:3,
            title:'Testando',
            image:'https://www.w3schools.com/howto/img_avatar2.png'
        },{
            id:4,
            title:'Sou eu fdp kk',
            image:'https://www.w3schools.com/howto/img_avatar2.png'
        }
    ])
    const [activeChat, setActiveChat] = useState({})
    const [user,setUser] = useState(
        {
            id:'gabriel',
            avatar: 'https://www.w3schools.com/howto/img_avatar2.png'
        } 
    )

    const [showNewChat, setShowNewChat]= useState(false)

    function handleShowNewChat(){
        setShowNewChat(true)
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
                    <img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt='user image' />
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
                    activeChat.id !== undefined && <ChatWindow user={user}/> 
                }
                {
                    activeChat.id === undefined &&  <ChatIntro/>
                }
                
            </main>
        </div>
    );
  }
  
  export default App;
  