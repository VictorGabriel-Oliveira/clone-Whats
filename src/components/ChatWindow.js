import './chatWindow.css'
import EmojiPicker from 'emoji-picker-react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { useEffect, useRef, useState } from 'react';
import MessageItem from './MessageItem';



export default function ChatWindow (params){

    let recognition = null
    let SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;

    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition()
    }

    const[emojiOpen, setEmojiOpen] = useState(false)


    const [text, setText]= useState('')

    const [listen, setListen]= useState(false)
    const [messageList, setMessageList] = useState([
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
        {
            author: 'victor',
            body:'oi, bom dia!'
        },
        {
            author:'gabriel',
            body:'oii, Como vai ?'
        },
    ])

    const body = useRef()

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    },[messageList])

    function handleEmojiClick(event , emojiObject){
            setText( text + emojiObject.emoji)
    }

    function handleOpenEmojiClick(){
        setEmojiOpen(true)

    }
    function handleCloseEmojiClick(){
        setEmojiOpen(false)

    }

    function handleSendClick(){

    }

    function handleMicClick(){
        if (recognition !== null){
            recognition.onstart = ()=>{
                setListen(true)
            }
            recognition.onend = () =>{
                setListen(false)
            }

            recognition.result = (event) =>{
                setText(event.results[0][0].transcript)
            }
        }

        recognition.start()
    }




    return(
        <div className="chatWindow">
            <div className="chatWindow--header">
                <div className="header-info">
                    <img className="avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
                    <div className="name">
                        Victor Gabriel
                    </div>
                </div>

                <div className="header-buttons">
                    <div className="chatWindow--button">
                        <SearchIcon style={{color:"#919191"}}/>
                    </div>
                    <div className="chatWindow--button">
                        <AttachFileIcon style={{color:"#919191"}} />
                    </div>
                    <div className="chatWindow--button">
                        <MoreVertIcon style={{color:"#919191"}} />
                    </div>
                </div>
            </div>
            <div ref={body} className="chatWindow--main">
                {
                    messageList.map((item,key)=>{
                        return(
                            <MessageItem key={key} data={item} user={params.user} />
                        )
                    })
                }

            </div>
            <div className="emoji--area" style={{height: emojiOpen ? "200px" : "0px"}}>
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>
            <div  className="chatWindow--footer">
                <div className="chatWindow--pre">
                    
                    <div className="chatWindow--button" onClick={handleCloseEmojiClick}>
                        <CloseIcon style={{color:"#919191", width: emojiOpen ? '40px' : '0'}} />
                    </div>
                    <div className="chatWindow--button" onClick={handleOpenEmojiClick}>
                        <InsertEmoticonIcon style={{color: emojiOpen ? "#009688" : "#919191"}} />
                    </div>
                   
                </div>
                <div className="input--area">
                    <input value={text} onChange={event =>{ setText(event.target.value)}} type="text" className="chatWindow--input"  placeholder="digite uma mensagen"/>
                </div>
               
                <div className="chatWindow--pos">
                   
                        {text !== '' && 
                             <div onClick={handleSendClick} className="chatWindow--button">
                                <SendIcon style={{color:"#919191"}}/>
                             </div>
                        }
                        {text === '' && 
                             <div onClick={handleMicClick} className="chatWindow--button">
                                <MicIcon style={{color: listen ? "#126ece" : "#919191"}}/>
                             </div>
                        }
                    
                </div>
            </div>
        </div>
    )
}