import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon"/>
      </IconButton>    
      <img className="header_logo" src="https://tse4.mm.bing.net/th?id=OIP.66m_SqV5aESg-P0KFtExyQHaEK&pid=Api&P=0&h=180" alt=""/>
      <IconButton>
        <ForumIcon  fontSize="large" className="header_icon"/>
      </IconButton>   
    </div>
  )
}

export default Header
