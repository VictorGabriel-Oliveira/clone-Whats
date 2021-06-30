import './chatWindow.css'
import EmojiPicker from 'emoji-picker-react';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import { useState } from 'react';


export default function ChatWindow (){

    const[emojiOpen, setEmojiOpen] = useState(false)

    function handleEmojiClick(){

    }

    function handleOpenEmojiClick(){
        setEmojiOpen(true)

    }
    function handleCloseEmojiClick(){
        setEmojiOpen(false)

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
            <div className="chatWindow--main">

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
                    <input type="text" className="chatWindow--input"  placeholder="digite uma mensagen"/>
                </div>
                <div className="chatWindow--pos">
                    <div className="chatWindow--button">
                        <SendIcon style={{color:"#919191"}}/>
                    </div>
                    <div className="chatWindow--button">
                        <MicIcon style={{color:"#919191"}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}