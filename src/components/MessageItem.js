import { PanoramaSharp } from '@material-ui/icons'
import './messageItem.css'

export default function (params){
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
                    19:00
                </div>
            </div>
        </div>
    )
}