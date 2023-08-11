   import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
   import axios from "axios";
   //  import {userlist}  from "../Data" 
   

   const getuserlist = createAsyncThunk(
      "users/getuserlist", 
      async () => {
      try {
         const response = await axios.get("http://localhost:5000/admin/userlist");
         return response.data;
      } catch (error) {
         console.error(error);
      }
   });
   

   const userSlice=createSlice({
      name:"users",
      initialState:{
         userlist:[],
         isLoading:false,
         hasError:false},
         extraReducers: (data) => {
            data
            .addCase(getuserlist.pending, (state, action) => {
                              state.isLoading = true;
                              state.hasError = false;
            })
            .addCase(getuserlist.fulfilled, (state, action) => {
                              state.userlist = action.payload; 
                              state.isLoading = false;
                              state.hasError = false;
           })
            .addCase(getuserlist.rejected, (state, action) => {
                              state.hasError = true
                              state.isLoading = false;
            })
         }
   })

   export const selectUsers = state => state.users.userlist;
   export const selectLoadingState = state => state.users.isLoading;
   export const selectErrorState = state => state.users.hasError;

   export default userSlice.reducer

   // console.log(userlist);
   //  const userSlice=createSlice({
   //     name:"users",
   //     initialState:userlist,
   //     reducers:{
   //     } }) 
  