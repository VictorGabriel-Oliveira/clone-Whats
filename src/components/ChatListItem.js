import { useEffect, useState } from 'react'
import './chatListItem.css'


export default function ChatListItem(params){

    const [time, setTime] = useState('')

    useEffect(()=>{
        if(params.data.lastMessageDate > 0){
            let d = new Date(params.data.lastMessageDate.seconds * 1000)
            let hours = d.getHours()
            let minutes = d.getMinutes()
           hours = hours < 10 ? '0'+hours : hours
           minutes = minutes < 10 ? '0'+minutes : minutes 
           
           setTime(`${hours}:${minutes}`)
        }
    },[params.data])

    return(
        
        <div className={`chatList-items ${params.active ? 'active' : ''}`} onClick={params.onClick}>
            <img className="chaList--avatar" src={params.data.image}/>
            <div className="chatList--lines">
                <div className="chatList--item">
                    <div className="user--name">
                        {params.data.title}

                    </div>
                    <div className="date">
                            {time}
                    </div>
                </div>
                <div className="chatList--item">
                    <div className="chatList--last-msg">
                        <p>{params.data.lastMessage}</p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}