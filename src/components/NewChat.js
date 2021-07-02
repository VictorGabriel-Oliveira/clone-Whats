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
    
    return (
        <div className='newchat' style={{left: params.showNewChat ? "0" : '-452px'}}>
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
                        <div className="newchat--item">
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