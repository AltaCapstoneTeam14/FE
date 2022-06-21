import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async() => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

export const updateUsers = createAsyncThunk("users/updateUsers", async ({ id, name, username }) => {
  const response = await axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,{
    name,
    username
  });
  return response.data;
});


export const deleteUsers = createAsyncThunk("users/deleteUsers", async (id) => {
    await axios.delete('https://jsonplaceholder.typicode.com/users/${Id}') ;
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
    },
    [deleteUsers.fulfilled](state, action) {
      
      userEntity.removeOne(state, action.payload)
    },
    [updateUsers.fulfilled]: (state, action) => {
      userEntity.updateOne(state, { id: action.payload.id, update: action.payload});
    }
  },
});

export const userSelectors = userEntity.getSelectors(state => state.user)
export default userSlice.reducer;