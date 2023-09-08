import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useGetTeamsQuery } from '../serices/nbapi';
import {Col, Row, Select, Typography} from 'antd'
import {RiseOutlined} from '@ant-design/icons'
const Team = ({inf}) => {
    const teamId=useParams();
    let team={};
    
    
     const {data,isFetching}=useGetTeamsQuery();
     useEffect(()=>{
        console.log(team)
    },[team])
    if(isFetching){
        return(
            "Loading..."
        )
    }
    if(!isFetching){
        data.body.map((m)=>{
            
                if(m.teamID===teamId.teamId){
                    team=m;
                }
        })
    }
 
 
  return (
    <>
 
        <span id="matchtit">
            
            {team.teamCity} {team.teamName}
        </span>
      <ul className='stats2'>

         <Col xs={24} sm={12} lg={10} className="infoo">
         <span className='tittleic'>Wins</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat'>{team.wins}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Conference</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat1'>{team.conference}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>City</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat2'>{team.teamCity}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>Loss</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat'>{team.loss}</span>
            </Col>
            <Col xs={24} sm={12} lg={10} className="infoo">
            <span className='tittleic'>PPG</span>
         <RiseOutlined className='icons' style={{ fontSize: '60px' }}/> 
         <span className='stat'>{team.ppg}</span>
            </Col>
      </ul>
    </>
  )
}

export default Team;
