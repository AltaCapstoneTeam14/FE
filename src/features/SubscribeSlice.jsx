import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getSubscribe = createAsyncThunk("subscribe/getSubscribe", async() => {
    const response = await axios.get('http://44.201.153.46:8081/api/v1/subscribers', { headers: authHeader() });
    return response.data.data;
});

export const saveSubscribe = createAsyncThunk("subscribe/saveSubscribe", async ({ email }) => {
  const response = await axios.post('http://44.201.153.46:8081/api/v1/subscribers', {
    email
  },{ headers: authHeader() });
  return response.data.data;
});

export const deleteSubscribe = createAsyncThunk("subscribe/deleteSubscribe", async (email) => {
    await axios.delete(`http://44.201.153.46:8081/api/v1/subscribers/${email}` , { headers: authHeader()}) ;
    return email;

});

const subscribeEntity = createEntityAdapter({
    selectId: (subscribe) => subscribe.id
})

const subscribeSlice = createSlice({
    name: "subscribe",
    initialState: subscribeEntity.getInitialState(),
    extraReducers: {
    [getSubscribe.fulfilled]: (state, action) => {
      subscribeEntity.setAll(state, action.payload); 
    },
    [saveSubscribe.fulfilled]: (state, action) => {
      subscribeEntity.addOne(state, action.payload);
    },
    [deleteSubscribe.fulfilled]: (state, action) => {
      subscribeEntity.removeOne(state, action.payload);
    },
    },
});

export const subscribeSelectors = subscribeEntity.getSelectors(state => state.subscribe)
export default subscribeSlice.reducer;