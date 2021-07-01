import { useState} from 'react'
import './newChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function (params){
    const [chatList, setChatList] = useState([
        {
            id:'1234',
            name:'Victor Gavriel ',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            id:'1234',
            name:'Victor Gavriel de Oliveira Abreu',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            id:'1234',
            name:'Victor Gavriel de Oliveira Abreu',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            id:'1234',
            name:'Victor Gavriel de Oliveira Abreu',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            id:'1234',
            name:'Victor Gavriel de Oliveira Abreu',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            id:'1234',
            name:'Victor Gavriel de Oliveira Abreu',
            avatar:'https://www.w3schools.com/howto/img_avatar2.png'
        },
    ])

    function handleCloseNewChat(){
        params.setShowNewChat(false)
    }
    
    return (
        <div className='newchat' style={{left: params.showNewChat ? "0" : '-452px'}}>
            <div className="newchat--header">

                <div onClick={handleCloseNewChat} class="newchat-backButtom">
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