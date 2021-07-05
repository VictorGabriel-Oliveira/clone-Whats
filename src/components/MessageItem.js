import { useEffect, useState } from 'react'
import './messageItem.css'

export default function (params){
    const [time, setTime] = useState('')

    useEffect(()=>{
        if(params.data.date> 0){
            let d = new Date(params.data.date.seconds * 1000)
            let hours = d.getHours()
            let minutes = d.getMinutes()
           hours = hours < 10 ? '0'+hours : hours
           minutes = minutes < 10 ? '0'+minutes : minutes 
           
           setTime(`${hours}:${minutes}`)
        }
    },[params.data])
    return (
        <div    
            className="messageLine"
            style={{justifyContent: params.user.id === params.data.author ? 'flex-end' :'flex-start'}}
        >
            <div className="massageItem" 
                style={{backgroundColor: params.user.id === params.data.author ? '#dcf8d6' : 'white'}}
            >
                <div className="messageText">
                    {params.data.body}
                </div>
                <div className="messageData">
                    {time}
                </div>
            </div>
        </div>
    )
}