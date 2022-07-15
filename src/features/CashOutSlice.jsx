import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getCashOut = createAsyncThunk("cashOut/getCashOut", async() => {
    const response = await axios.get('http://44.203.0.77/api/v1/products/cashout', { headers: authHeader() });
    return response.data.data;
});

export const saveCashOut = createAsyncThunk("cashOut/saveCashOut", async ({ name, coin_amount, balance_amount }) => {
  const response = await axios.post('http://44.203.0.77/api/v1/products/cashout', {
      name,
      coin_amount,
      balance_amount
  },{ headers: authHeader() });
  return response.data.data;
});

export const updateCashOut = createAsyncThunk("cashOut/updateCashOut", async ({ id, name, coin_amount, balance_amount }) => {
  const response = await axios.put(`http://44.203.0.77/api/v1/products/cashout/${id}`, {
      name,
      coin_amount,
      balance_amount
  },{ headers: authHeader() });
  return response.data;
});

export const deleteCashOut = createAsyncThunk("cashOut/deleteCashOut", async (id) => {
    await axios.delete(`http://44.203.0.77/api/v1/products/cashout/${id}` , { headers: authHeader()}) ;
    return id;

});

const cashOutEntity = createEntityAdapter({
    selectId: (cashout) => cashout.id
})

const cashOutSlice = createSlice({
    name: "cashOut",
    initialState: cashOutEntity.getInitialState(),
    extraReducers: {
    [getCashOut.fulfilled]: (state, action) => {
      cashOutEntity.setAll(state, action.payload); 
    },
    [saveCashOut.fulfilled]: (state, action) => {
      cashOutEntity.addOne(state, action.payload);
    },
    [deleteCashOut.fulfilled]: (state, action) => {
      cashOutEntity.removeOne(state, action.payload);
    },
    [updateCashOut.fulfilled]: (state, action) => {
      cashOutEntity.updateOne(state, { 
        id: action.payload.id, 
        changes: action.payload});
    },
    },
});

export const cashOutSelectors = cashOutEntity.getSelectors(state => state.cashout)
export default cashOutSlice.reducer;