import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

export const updateUser = createAsyncThunk("users/updateUser", async ({ id, name, username }) => {
  const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    name,
    username
  });
  return response.data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) ;
    return id;

});

const userEntity = createEntityAdapter({
    selectId: (user) => user.id
})


const userSlice = createSlice({
  name: "user",
  initialState: userEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      userEntity.setAll(state, action.payload); 
      console.log(action)
    },
    [deleteUser.fulfilled]: (state, action) => {
      userEntity.removeOne(state, action.payload);
    },
    [updateUser.fulfilled]: (state, action) => {
      userEntity.updateOne(state, { id: action.payload.id, updates: action.payload});
      console.log (state)
    }
  },
});

export const userSelectors = userEntity.getSelectors(state => state.user)
export default userSlice.reducer;