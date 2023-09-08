import React from 'react'
import '../App.css';
import { useGetTeamQuery } from '../serices/nbapi2';
import {Link} from 'react-router-dom'
const Homepage = () => {
    const {data,isFetching}=useGetTeamQuery();
    
    if(isFetching){
        return(
            "Loading"
        )
    }

    let lastmatches=[];
    let count=0;
    for(let i=data.events.length;i>=data.events.length-10;i--){
      lastmatches.push(data.events[i])
      
    }
    console.log(lastmatches)
    lastmatches.splice(0,1)
  return (
    <>
    <span id="tithom">Last 10 matches</span>
    <ul className='matches'>
        {lastmatches?.map((m)=>{
         const date=new Date(m.time.currentPeriodStartTimestamp*1000);
         const year=date.getYear();
         const day=date.getDay();
         const month=date.getMonth();
         console.log(date)
          return(
            <span className='match1' >
            <span id="matchdate">{day}.{month}.20{year-100}</span>
           <span id="vs">{m.awayTeam.name} vs {m.homeTeam.name} </span>     <span id="scores">{m.awayScore.current}-{m.homeScore.current}</span>     
            
            </span>
          )
          

        })

        }
      </ul>
      
    </>
  )
}

export default Homepage
