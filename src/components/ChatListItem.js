import './chatListItem.css'


export default function ChatListItem(){
    return(
        <div className="chatList">
            <div className="chatList-items">
                <img className="chaList--avatar" src='https://www.w3schools.com/howto/img_avatar2.png'/>
                <div className="chatList--lines">
                    <div className="chatList--item">
                        <div className="user--name">
                            Victor Gabriel

                        </div>
                        <div className="date">
                            19:00
                        </div>
                    </div>
                    <div className="chatList--item">
                        <div className="chatList--last-msg">
                            <p>Oola, como vai?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}