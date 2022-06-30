import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getTopUps = createAsyncThunk("topUps/getTopUps", async() => {
    const response = await axios.get('http://44.201.153.46:8081/api-dev/v1/products/topup', { headers: authHeader() });
    return response.data;
});

export const updateTopUp = createAsyncThunk("topUps/updateTopUp", async ({ id, data: {amount, gross_amount} }) => {
  const response = await axios.patch(`http://44.201.153.46:8081/api-dev/v1/products/topup/${id}`,{
    amount,
    gross_amount
  });
  return response.data;
});

export const deleteTopUp = createAsyncThunk("topUps/deleteTopUp", async (id) => {
    await axios.delete(`http://44.201.153.46:8081/api-dev/v1/products/topup/${id}`) ;
    return id;

});

const topUpEntity = createEntityAdapter({
    selectId: (topup) => topup.id
})


const topUpSlice = createSlice({
  name: "topup",
  initialState: topUpEntity.getInitialState(),
  extraReducers: {
    [getTopUps.fulfilled]: (state, action) => {
      topUpEntity.setAll(state, action.payload); 
    },
    [deleteTopUp.fulfilled]: (state, action) => {
      topUpEntity.removeOne(state, action.payload);
    },
    [updateTopUp.fulfilled]: (state, action) => {
      topUpEntity.updateOne(state, { 
        id: action.payload.id, 
        changes: action.payload});
    }
  },
});

export const topUpSelectors = topUpEntity.getSelectors(state => state.topup)
export default topUpSlice.reducer;