import React from 'react'
import Chat from './Chat'

const Chats = () => {
  return (
    <div className='chats'>
      <p style={{color:'white',textAlign:'center',paddingTop:'20px',fontSize:'20px'}}>Random Users</p>
        <Chat
        name='Sarah'
        message="i'm not real, so..."
        timestamp='replies within 1hr'
        profilePic='https://media1.popsugar-assets.com/files/thumbor/XizA3oNqcoKLmKTB_p-Ix-3Ckeo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2010/11/44/3/301/3019466/8c10c7d720705912_97579081.jpg'
        />
        <Chat
        name='Cassanova'
        message="i'm not real, so..."
        timestamp='replies within 2hrs'
        profilePic='https://www.healthdigest.com/img/gallery/the-scientific-reason-women-like-men-with-beards/intro-1605027871.jpg'
        />
        <Chat
        name='Elon Musk'
        message="Don't bother texting"
        timestamp='never replies'
        profilePic='https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg'
        />
        <Chat
        name='Jonny'
        message="i'm not real, so..."
        timestamp='replies within 2 days'
        profilePic='https://media.gettyimages.com/photos/portrait-of-smiling-young-man-wearing-eyeglasses-picture-id985138634?s=612x612'
        />
    </div>
  )
}

export default Chats