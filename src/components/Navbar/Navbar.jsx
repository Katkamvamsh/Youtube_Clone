import React, { Fragment, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png' 
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
 import upload_icon from '../../assets/upload.png'
  import more_icon from '../../assets/more.png'
   import notification_icon from '../../assets/notification.png'
   import profile_icon from '../../assets/jack.png'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const [showingSidebar,setshowingSidebar] =useState(true)
  const [selectedCategori, setSelectedCategori] = useState('Home');

  const onClickingMenuIcon=()=>{
    
    setSelectedCategori("Home")
    setshowingSidebar(!showingSidebar)
   //setshowingSidebar(showingSidebar===true?false:true)
  }
  

 
 return (
   <>
    <nav className='flex-div'>
<div className='nav-left flex-div'>
<img //
className='menu-icon' onClick={onClickingMenuIcon} src={menu_icon} alt="" />
<img className='logo' src={logo} alt="" /> 
</div>

<div className="nav-middle flex-div">
<input className='search-box' type="text"  placeholder='Search here what do you want'/>
 <img className='search' src={search_icon} alt="" /> 
 </div>
 
<div className="nav-right flex-div">
<img src={upload_icon} alt="" />
<img src={more_icon} alt="" />
<img src={notification_icon} alt="" />
<img className = "user-icon"src={profile_icon} alt=" "/>
</div>

</nav>
<Sidebar showingSidebar={showingSidebar} 
 selectedCategori={selectedCategori}
 setselectedCategori={setSelectedCategori}
/>
</>  
    
  )
}

export default Navbar


