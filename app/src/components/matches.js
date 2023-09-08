import React, { useEffect, useState } from 'react'
import '../App.css';
import { useGetPlayerQuery, useGetPlayersQuery } from '../serices/nbapi';
import {Col, Row, Select, Typography} from 'antd'
import {Link} from 'react-router-dom'
import { Input } from 'antd';
import Player from './Player';
const Matches = () => {
  
  const{data:data2,isFetching:isFetching2}=useGetPlayersQuery();
  const[player,setPlayer]=useState("");
  const[players,setPlayers]=useState(data2?.body)
  useEffect(()=>{
        setPlayers(data2?.body)
        const filtered=data2?.body.filter((c)=>c.longName.toLowerCase().includes(player.toLowerCase()));
        setPlayers(filtered);
  },[player,data2])
  if(isFetching2){
    return(
      "Loading..."
    )
  }

  return (
    <>
      <Input placeholder="Seacrch" className='search' onChange={(e)=>{setPlayer(e.target.value)}} />
      <ul className='players'>
        {players?.map((m)=>{
         
          return(
            <Link className='player' to={`/player/${m.playerID}`}>
      <span id='playername'>{m.longName}</span>
    </Link>
          )
          

        })

        }
      </ul>
      
    </>
  )
}

export default Matches
