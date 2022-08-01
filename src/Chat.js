import React from 'react'
import { Avatar } from '@material-ui/core'
import './Chat.css'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'


const Chat = ({name,message,profilePic,timestamp}) => {
  return (
    <Link to={`/chats/${name}`}>
        <div className='chat'>
        <Avatar className='chat__image' src={profilePic}/>
        <div className='chat_text'>
            <h2>{name}</h2>
            <h4>{message}</h4>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
    </div>
    </Link>
  )
}

export default Chat