import {configureStore} from "@reduxjs/toolkit"
import { nbaApi } from "../serices/nbapi";
import{nbaApi2} from "../serices/nbapi2";



export default configureStore({
    reducer:{
        [nbaApi.reducerPath]:nbaApi.reducer,
        [nbaApi2.reducerPath]:nbaApi2.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nbaApi.middleware,nbaApi2.middleware),
   

});