import { configureStore } from "@reduxjs/toolkit";
import todoreducer, { todoslice } from "../feature/snslice";


export const store=configureStore({
    reducer:todoreducer
})