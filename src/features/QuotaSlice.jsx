import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getQuotas = createAsyncThunk("quota/getQuotas", async() => {
    const response = await axios.get('http://44.201.153.46:8081/api/v1/products/quota', { headers: authHeader() });
    return response.data.data;
});

export const saveQuota = createAsyncThunk("quota/saveQuota", async ({ name, description, stock, provider_id, gross_amount, provider_name}) => {
  const response = await axios.post('http://44.201.153.46:8081/api/v1/products/quota', {
      name,
      description,
      stock,
      provider_id,
      gross_amount,
      provider_name
  },{ headers: authHeader() });
  return response.data.data;
});

export const updateQuota = createAsyncThunk("quota/updateQuota", async ({ id, name, description, stock, provider_id, gross_amount, provider_name }) => {
  const response = await axios.put(`http://44.201.153.46:8081/api/v1/products/quota/${id}`, {
      name,
      description,
      stock,
      provider_id,
      gross_amount,
      provider_name
  },{ headers: authHeader() });
  return response.data;
});

export const deleteQuota = createAsyncThunk("quota/deleteQuota", async (id) => {
    await axios.delete(`http://44.201.153.46:8081/api/v1/products/quota/${id}` , { headers: authHeader()}) ;
    return id;

});

const quotaEntity = createEntityAdapter({
    selectId: (quota) => quota.id
})

const quotaSlice = createSlice({
    name: "quota",
    initialState: quotaEntity.getInitialState(),
    extraReducers: {
    [getQuotas.fulfilled]: (state, action) => {
      quotaEntity.setAll(state, action.payload); 
    },
    [saveQuota.fulfilled]: (state, action) => {
      quotaEntity.addOne(state, action.payload);
    },
    [deleteQuota.fulfilled]: (state, action) => {
      quotaEntity.removeOne(state, action.payload);
    },
    [updateQuota.fulfilled]: (state, action) => {
      quotaEntity.updateOne(state, { 
        id: action.payload.id, 
        changes: action.payload});
    },
    },
});

export const quotaSelectors = quotaEntity.getSelectors(state => state.quota)
export default quotaSlice.reducer;