import React from 'react';
import {useState} from 'react'
import './ChatScreen.css'
import { Avatar } from '@material-ui/core';
import {useEffect} from 'react'

const ChatScreen = () => {
    const[input,setInput]=useState('')
    const [messages,setMessages]=useState([
     {
         name:'User',
         image:'...',
         message:'Welcome to chaturmatch'
     },
     {
         name:'User',
         image:'...',
         message:'I am not real, so Feel free to leave when you are done exploring'
     },
    ])
    const handleSend=(e)=>{
        e.preventDefault();
        setMessages([...messages,{message:input}])
        setInput('')
    }

  return (
    <div className='chatScreen'>
        <p className='ChatScreenTimestamp'>YOU MATCHED WITH THIS USER!</p>
        {messages.map(message=>{
            return(
            message.name?(
                    <div className='chatScreen_message'>
                        <Avatar
                        className='chatScreen__image'
                        src={message.image}
                        alt={message.name}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
            ):(
                <div className="chatScreen_message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
            )
         )    
        })}
        <div >
            <form 
            onSubmit={handleSend}
            className='chatScreen_input'>
                <input 
                value={input}
                placeholder='Send a Text'
                onChange={(e)=>setInput(e.target.value)}
                className='chatScreen__inputField'
                type="text" />
                <button 
                onClick={handleSend}
                className='chatScreen__inputButton'
                type="submit">
                    SEND
                </button>
            </form>
        </div>
    </div>
  )
}

export default ChatScreen;