import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer, loginsliceReducer } from "./userSlice";

export default configureStore({
reducer:{
        userlist:userSliceReducer,
        login:loginsliceReducer
}


})


 

