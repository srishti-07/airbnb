import React from 'react'
import './Header.css'
import img1 from './images/airbnb.jpg'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from '@mui/material';

function header() {
  return (
    <div className="header">
    <img className="header_icon" src={img1} alt= ""/>

    <div className="header_center"> 
<input type="text"/>
<SearchIcon/>
    </div>
    <div className="header_right">
      <p>Become a host</p>
      <LanguageIcon/>
      <ExpandMoreIcon/>
      <Avatar/>
    </div>
    </div>

   
    )
}

export default header
