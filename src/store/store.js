import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/snslice";


const store=configureStore({
    reducer:{
        auth : authSlice,
    }
})
export default store;