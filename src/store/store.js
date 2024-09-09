import { configureStore } from "@reduxjs/toolkit";
import info from "../slices/info";


export const store = configureStore({
        reducer:{
        info
    }
});