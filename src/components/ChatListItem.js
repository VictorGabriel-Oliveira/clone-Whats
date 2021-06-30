import './chatListItem.css'


export default function ChatListItem(params){
    return(
        
        <div className={`chatList-items ${params.active ? 'active' : ''}`} onClick={params.onClick}>
            <img className="chaList--avatar" src={params.data.image}/>
            <div className="chatList--lines">
                <div className="chatList--item">
                    <div className="user--name">
                        {params.data.title}

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
       
    )
}