import { createSlice } from "@reduxjs/toolkit";
import { getAllIinfo,getAllCountries } from "../actions/getinfo";



const info = createSlice({
 name:'info',
 initialState:{},
 reducers:{  
    
    getInfo:(state,action)=>{
        state.country = action.payload;
    },
    cleanAll:(state)=>{
        state.error = null;
        state.allinfo=null;
    }

 },
 extraReducers:(builder)=>{

    builder
    .addCase(getAllIinfo.fulfilled,(state,action)=>{
        state.allinfo = action.payload;
        state.pending = false;
    })
    .addCase(getAllIinfo.pending,(state)=>{
        state.pending = true;
    })
    .addCase(getAllIinfo.rejected,(state,action)=>{
        state.error = action.error.message;
        state.pending = false;
        state.allinfo = null;
    })
    .addCase(getAllCountries.fulfilled,(state,action)=>{
        state.allinfo = action.payload;
        state.pending = false;
    })
    .addCase(getAllCountries.pending,(state)=>{
        state.pending = true;
    })
    .addCase(getAllCountries.rejected,(state,action)=>{
        state.error = action.error.message;
        state.pending = false;
        state.allinfo = null;
    })

 }

})

export default info.reducer;

export const {getInfo,cleanAll} = info.actions;
