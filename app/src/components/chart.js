import React from 'react'
import '../App.css';
import { useGetScheduleQuery, useGetTeamsQuery, useLazyGetScheduleQuery } from '../serices/nbapi';
import {Col, Row, Select, Typography} from 'antd'
const Chart = () => {
  const{data,isFetching}=useGetScheduleQuery()
  const{data:data2,isFetching:isFetching2}=useGetTeamsQuery();
 
  
  if(isFetching||isFetching2){
    return(
      "Loading..."
    )
  }
 
  console.log(data);
  let date;
  let numb=0;
  return (
    <>
       <span id='matchtit'>MATCHES</span>
       {data.body.length===0 &&
        
        
         <span id="nomatch">No matches today</span>
        
       }
    <ul className='matchs'>
      {data.body.map((m)=>{
        let host;
        let visitor;
        numb++;
        for(let i=0;i<data2.body.length;i++){
            if(data2.body[i].teamID==m.teamIDAway){
              visitor=data2.body[i].teamName;
            }
            if(data2.body[i].teamID==m.teamIDHome){
              host=data2.body[i].teamName;
            }
        } 
         date=m.gameDate.toString()[0]+m.gameDate.toString()[1]+m.gameDate.toString()[2]+m.gameDate.toString()[3]+"-"+m.gameDate.toString()[4]+m.gameDate.toString()[5]+"-"+m.gameDate.toString()[6]+m.gameDate.toString()[7]
        return(
          <Col xs={14} sm={2} lg={10} className="match">
          <div className='numb'><span>{numb}</span></div>
          <span className='date'>{date}</span>

          <span className='vs'>{visitor} vs {host}</span>
        </Col>
        )
        
      
      })
     
      }
      </ul>
    </>
  )
}

export default Chart
