import {createSlice} from "@reduxjs/toolkit";
import 


export const userSlice = createSlice({
    name:"user",
    initialState:[],
    reducers:{
      LoadUser:(state,action)=>{
        return action.payload;
      },
      removeUser:(state,action)=>{

        return state.filter(item=>item._id!==action.payload)
      }
    },
})

export const {LoadUser,removeUser} = userSlice.actions;
export default userSlice.