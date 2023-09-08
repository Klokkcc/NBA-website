import { current } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const nbaHeaders={
    'X-RapidAPI-Key': '6a28f0d8a0msh2b7e03b9426a945p124b12jsn101fe35d9a40',
    'X-RapidAPI-Host': 'tank01-fantasy-stats.p.rapidapi.com'
}
const baseUrl='https://tank01-fantasy-stats.p.rapidapi.com';
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
if(month.toString().length==1){
    month='0'+month.toString();
}
let year = date.getFullYear();
let currentdate=year.toString()+month.toString()+day.toString();
const createRequest=(url)=>({url,headers:nbaHeaders})
export const nbaApi=createApi({
    reducerPath:'nbaApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getTeams:builder.query({
            query:()=>createRequest(`/getNBATeams`),
        }),
        getSchedule:builder.query({
            query:()=>createRequest(`/getNBAGamesForDate?gameDate=${currentdate}`),
        }),
        getPlayers:builder.query({
            query:()=>createRequest(`/getNBAPlayerList`),
        }),
        getPlayer:builder.query({
            query:(ID)=>createRequest(`/getNBAPlayerInfo?playerID=${ID}`),
        }),
    })
});
export const{
  useGetTeamsQuery,
  useGetScheduleQuery,
  useGetPlayerQuery,
  useGetPlayersQuery,


}=nbaApi;