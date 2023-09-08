import { current } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const nbaHeaders={
    'X-RapidAPI-Key': '6a28f0d8a0msh2b7e03b9426a945p124b12jsn101fe35d9a40',
    'X-RapidAPI-Host': 'basketapi1.p.rapidapi.com'
}
const baseUrl='https://basketapi1.p.rapidapi.com/api/basketball';
const createRequest=(url)=>({url,headers:nbaHeaders});
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
export const nbaApi2=createApi({
    reducerPath:'nbaApi2',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getTeam:builder.query({
            query:()=>createRequest(`/tournament/132/season/45096/matches/last/0`),
        }),
        getLogo:builder.query({
            query:(id)=>createRequest(`/team/${id}/image`),
        }),
      
    })
});
export const{
  
    useGetTeamQuery,
    useGetLogoQuery

}=nbaApi2;