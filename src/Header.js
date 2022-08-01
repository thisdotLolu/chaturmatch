import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { IconButton } from '@material-ui/core';
// import ForumIcon from '@mui/icons-material/Forum';
import {Link,useHistory} from 'react-router-dom';
import { ArrowBackIos } from '@mui/icons-material';
import { Home } from '@mui/icons-material';

const Header = ({backButton}) => {
  const history=useHistory();
  return (
    <div className='header'>
      {
        backButton?(
          <ArrowBackIos 
          style={{padding:'10px'}}
          onClick={()=>history.replace(backButton)}
          className='icon__header'
          fontSize='large'
          />
        ):(
        <Link to='/profile'>
        <IconButton>
        <PersonIcon
        className='icon__header'
        fontSize='large'
        />
        </IconButton>
        </Link>
        )
      }
      <Link to='/'>
      <Home
        className='header__logo'/>
      </Link>
        <IconButton>
        <Link to='/chats'>
        <ForwardToInboxIcon
        className='icon__header'
        fontSize='large'
        />
          </Link>
        
        </IconButton>
    </div>
  )
}

export default Header