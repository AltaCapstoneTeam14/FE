import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getTopUps = createAsyncThunk("topUps/getTopUps", async() => {
    const response = await axios.get('/api/v1/products/topup', { headers: authHeader() });
    return response.data.data;
});

export const saveTopUp = createAsyncThunk("topUps/saveTopUp", async ({ amount, gross_amount }) => {
  const response = await axios.post('/api/v1/products/topup', {
      amount,
      gross_amount
  },{ headers: authHeader() });
  return response.data.data;
});

export const updateTopUp = createAsyncThunk("topUps/updateTopUp", async ({ id, amount, gross_amount }) => {
  const response = await axios.put(`/api/v1/products/topup/${id}`, {
      amount,
      gross_amount
  },{ headers: authHeader() });
  return response.data;
});

export const deleteTopUp = createAsyncThunk("topUps/deleteTopUp", async (id) => {
    await axios.delete(`/api/v1/products/topup/${id}` , { headers: authHeader()}) ;
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
    [saveTopUp.fulfilled]: (state, action) => {
      topUpEntity.addOne(state, action.payload);
    },
    [deleteTopUp.fulfilled]: (state, action) => {
      topUpEntity.removeOne(state, action.payload);
    },
    [updateTopUp.fulfilled]: (state, action) => {
      topUpEntity.updateOne(state, { 
        id: action.payload.id, 
        changes: action.payload});
    },
  },
});

export const topUpSelectors = topUpEntity.getSelectors(state => state.topup)
export default topUpSlice.reducer;