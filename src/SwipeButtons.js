import React from 'react'
// import CloseIcon from '@mui/icons-material/Close';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './SwipeButtons.css'

import {useState} from 'react';

const SwipeButtons = () => {
  const[like,setLike]=useState(false)
  
  const handleLike=()=>{
    setLike(!like)
  }
  return (
    <div className='SwipeButtons'>
      {
        !like?(<FavoriteBorderIcon 
          onClick={handleLike}
          sx={{fontSize:40}}/>):(
          <FavoriteIcon 
          onClick={handleLike}
          sx={{fontSize:40}}/>
        )
      }
        
        
    </div>
  )
}

export default SwipeButtons