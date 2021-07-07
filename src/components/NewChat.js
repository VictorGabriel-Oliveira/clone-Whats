import { useEffect, useState} from 'react'
import './newChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import api from '../api';

export default function (params){
    const [chatList, setChatList] = useState([])

    useEffect(()=>{
        async function getList(){
            if(params.user){
                let result = await api.getContactList(params.user.id)
                setChatList(result)
            }
        }
        getList()
    },[params.user])

    function handleCloseNewChat(){
        params.setShowNewChat(false)
    }

    async function addNewChat(user2){
        await api.addNewChat(params.user,user2)

        handleCloseNewChat()
    }
    
    return (
        <div className='newchat' style={{left: params.showNewChat ? "0" : '-500px'}}>
            <div className="newchat--header">

                <div onClick={handleCloseNewChat} className="newchat-backButtom">
                    <ArrowBackIcon style={{color:"#fff"}}/>
                </div>
                <div className="header--title">
                    Nova conversa
                </div>

            </div>

            <div className="newchat--list">
                {chatList.map((item,key)=>{
                    
                    return(
                        <div onClick={()=>addNewChat(item)} className="newchat--item">
                            <img className="newchat--avatar" src={item.avatar} alt={key}/>
                            <div className="newchat--name">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}