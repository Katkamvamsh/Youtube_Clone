import React, { useState } from 'react'
import './Sidebar.css'


import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png' 
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import home from '../../assets/home.png'
import tech from '../../assets/tech.png' 
import music from '../../assets/music.png' 
import blogs from '../../assets/blogs.png' 
import news from '../../assets/news.png' 
import jack from '../../assets/jack.png'
 import simon from '../../assets/simon.png' 
 import tom from '../../assets/tom.png' 
 import megan from '../../assets/megan.png'
  import cameron from '../../assets/cameron.png'

const Sidebar = ({showingSidebar:value,selectedCategori,setselectedCategori} ) => {
   
  const clickingOnLink=(valueCategories)=>{
  setselectedCategori(valueCategories)
  }

  return (
  <div className={value===true? 'sidebar':"hidingpara"}>
      <div className="shortcut_links_container">
        <div className= {selectedCategori==="Home"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Home")}>  
          <img src={home} alt="" />  <p >Home</p>
        </div>
        <div className= {selectedCategori==="Games"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Games")}>
          <img src={game_icon} alt="" />  <p>Games</p>
        </div>
        <div  className= {selectedCategori==="Automobiles"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Automobiles")}>
           <img src={automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div className= {selectedCategori==="Sports"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Sports")}>
          <img src={sports} alt="" /> <p>Sports</p>
        </div>
        <div className= {selectedCategori==="Entertainment"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Entertainment")}>
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div  className= {selectedCategori==="Tech"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Tech")}>
          <img src={tech} alt="" />  <p>Tech</p>
        </div>
        <div className= {selectedCategori==="Music"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Music")}>
          <img src={music} alt="" />  <p>Music</p>
        </div>
        <div  className= {selectedCategori==="Blogs"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("Blogs")}>
          <img src={blogs} alt="" />  <p>Blogs</p>
        </div>
        <div  className= {selectedCategori==="News"?"side_link_selectd side_link":"side_link"} onClick={()=>clickingOnLink("News")}>
          <img src={news} alt="" />   <p>News</p>
        </div>
        <hr />       
    </div>

      <div className='subscribed_list_container'>
 <h2>Subscribed</h2>
 <div className="side_link">
  <img src={jack} alt="" /> <p>Katkam</p>
 </div>
 <div className="side_link">
  <img src={jack} alt="" /> <p>Katkam</p>
 </div>
 <div className="side_link">
  <img src={simon}  alt="" /> <p>Katkam</p>
 </div>
 <div className="side_link">
  <img src={tom}  alt="" /> <p>Katkam</p>
 </div>
 <div className="side_link">
  <img src={megan}  alt="" /> <p>Katkam</p>
 </div>
 <div className="side_link">
  <img src={cameron}  alt="" /> <p>Katkam</p>
 </div>
      </div>
  </div>
  )
}

export default Sidebar

