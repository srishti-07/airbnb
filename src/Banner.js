import React,{useState} from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from './Search';



function Banner() {
    const[showSearch, setShowSearch] = useState(false);
  return (
    <div className='banner'>
        <div className='banner_search'>
            {showSearch && <Search/>}
<Button onClick={()=> setShowSearch(!showSearch)}  varient='outlined'>{showSearch?"Hide":"Search Dates"}</Button>
        </div>
      <div className='banner_info'>
<h3>Get out and stretch your imagination</h3>
<p>Plan a different kind of getaway to uncover the hidden gems near you.</p>
<Button varient='outlined'>Explore nearby</Button>
      </div>
    </div>
  )
}

export default Banner
