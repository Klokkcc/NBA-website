import React from 'react'
import {Col, Row, Select, Typography} from 'antd'
import { useGetPlayerQuery, useGetTeamsQuery} from '../serices/nbapi';
import { useParams } from 'react-router-dom';

import {RiseOutlined} from '@ant-design/icons'
const Player = () => {
  const playerid=useParams();
  const{data,isFetching}=useGetPlayerQuery(playerid.playerId);
  const{data:data2,isFetching:isFetching2}=useGetTeamsQuery();
  console.log(playerid.playerId)
  if(isFetching||isFetching2){
    return(
        'Loading...'
    )
  }
  let team;
  for(let i=0;i<data2.body.length;i++){
   if(data.body.teamID===data2.body[i].teamID){
      team=data2.body[i].teamCity+" "+data2.body[i].teamName;
      break;
   }
}
let bday=data?.body?.bDay.replaceAll("/","-");

for(let i=0;i<data.body.bDay.length;i++){
   if(data.body.bDay[i]==='/'){
     
   }
}
  
 return(
  <>
  
  <img src={data.body.nbaComHeadshot} className='playerpic'></img>
  <span className='playertit'>{data.body.nbaComName}</span>
  <ul className='stats1'>

         <Col xs={24} sm={12} lg={10} className="infoo">
         <span className='tittleic'>Team</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat5'>{team}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Birthday</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat4'>{bday}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Position</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat3'>{data.body.pos}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Height</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat3'>{data.body.height}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Weight</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat4'>{data.body.weight} pounds</span>
            </Col>
      </ul>
  
  




  </>
 )
}

export default Player
