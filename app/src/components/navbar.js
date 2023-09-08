import React, { useEffect, useState } from 'react'
import { Layout,Menu,Typography} from 'antd';
import {Link} from 'react-router-dom'
import { useGetTeamsQuery } from '../serices/nbapi';
import '../App.css'
const {Header}=Layout;
const Navbar = () => {
  const[showed,setShowed]=useState(false);
  const {data,isFetching}=useGetTeamsQuery();
 
  useEffect(()=>{
    if(!isFetching){
      if(showed){
        document.querySelector('#list').style.visibility='visible'
      }else{
        document.querySelector('#list').style.visibility='hidden'
      }
    }
   
  },[showed])
 if(isFetching){
  return(
    ''
  )
 }



  return (
    <>
    

    
     <div id="hed">
      
      
      <Menu id='menu'
        theme="dark"
        mode="horizontal">
        <div  className="logo" />
        
            <Link to="/"><img  src={require("../pics/nba-logo-transparent.png")}  className='logo1'></img></Link> 
   
    <div id='items'>

      <Menu.Item className='item' onMouseMove={()=>{
       
          setShowed(true)
        }
        

      } onMouseLeave={()=>{
        setShowed(false)
      }}>
        <span to="/teams" className='logo2' >Teams
        </span>
        
      </Menu.Item>
      <Menu.Item className='item'>
        <Link to="/matches" className='logo2'>Players</Link>
      </Menu.Item>
      <Menu.Item className='item'>
        <Link to="/chart" className='logo2'>Daily schedule</Link>
      </Menu.Item>
      <div id='list' onMouseMove={()=>{
setShowed(true)
      }}
      onMouseLeave={()=>{
        setShowed(false)
      }}>
        {data.body.map((m)=>(
          <Link className='teamname' to={`/teams/${m.teamID}`}>{m.teamName}</Link>
        )
          
        )

        }



      </div>
    </div>
   
    

        </Menu>
        
    </div>
    
    
    </>
  )
}

export default Navbar
