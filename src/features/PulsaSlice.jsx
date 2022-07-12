import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";

export const getPulsas = createAsyncThunk("pulsa/getPulsas", async() => {
    const response = await axios.get('http://44.201.153.46:8081/api/v1/products/pulsa', { headers: authHeader() });
    return response.data.data;
});

export const savePulsa = createAsyncThunk("pulsa/savePulsa", async ({ name, denom, stock, provider_id, gross_amount, provider_name}) => {
  const response = await axios.post('http://44.201.153.46:8081/api/v1/products/pulsa', {
      name,
      denom,
      stock,
      provider_id,
      gross_amount,
      provider_name
  },{ headers: authHeader() });
  return response.data.data;
});

export const updatePulsa = createAsyncThunk("pulsas/updatePulsa", async ({ id, name, denom, stock, provider_id, gross_amount, provider_name }) => {
  const response = await axios.put(`http://44.201.153.46:8081/api/v1/products/pulsa/${id}`, {
      name,
      denom,
      stock,
      provider_id,
      gross_amount,
      provider_name
  },{ headers: authHeader() });
  return response.data;
});

export const deletePulsa = createAsyncThunk("pulsas/deletePulsa", async (id) => {
    await axios.delete(`http://44.201.153.46:8081/api/v1/products/pulsa/${id}` , { headers: authHeader()}) ;
    return id;

});

const pulsaEntity = createEntityAdapter({
    selectId: (pulsa) => pulsa.id
})

const pulsaSlice = createSlice({
    name: "pulsa",
    initialState: pulsaEntity.getInitialState(),
    extraReducers: {
    [getPulsas.fulfilled]: (state, action) => {
      pulsaEntity.setAll(state, action.payload); 
    },
    [savePulsa.fulfilled]: (state, action) => {
      pulsaEntity.addOne(state, action.payload);
    },
    [deletePulsa.fulfilled]: (state, action) => {
      pulsaEntity.removeOne(state, action.payload);
    },
    [updatePulsa.fulfilled]: (state, action) => {
      pulsaEntity.updateOne(state, { 
        id: action.payload.id, 
        changes: action.payload});
    },
    },
});

export const pulsaSelectors = pulsaEntity.getSelectors(state => state.pulsa)
export default pulsaSlice.reducer;