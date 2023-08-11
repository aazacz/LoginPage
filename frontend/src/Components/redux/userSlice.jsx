import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (userId, { dispatch, rejectWithValue }) => {
   
    try {
      const response = await axios.post("http://localhost:5000/admin/removeuser",{userId: userId});

      if (response.data.Status === "success") {
        return userId; // Return userId to handle the success case
      } else { return rejectWithValue(response.data.error)}

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    LoadUser: (state, action) => {
      return action.payload;
    },
    loginUser:(state,action)=>{
        // state.name  = action.payload.name,
        // state.email = action.payload.email,
        // state.login = action.payload.login,
        // state.token = action.payload.token
        const { name, email, login, token,image } = action.payload;

  return {
    ...state,
    name: name,
    email: email,
    login: login,
    token: token,
    image: image,
  };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeUser.fulfilled, (state, action) => {
        return state.filter((item) => item._id !== action.payload);
      })
      .addCase(removeUser.rejected, (state, action) => {
        console.error("Failed to remove user:", action.payload);
        return state;
      });
  },
});

export const { LoadUser,loginUser } = userSlice.actions;
export default userSlice.reducer;
