import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";


export const getAdmin = createAsyncThunk("admin/getAdmin", async (pages) => {
  const response = await axios.get(
    `http://44.201.153.46:8081/api/v1/admin/users?page=${pages}&size=5`,
    { headers: authHeader() }
  );
  return response.data.data.users;
});



export const updateAdmin = createAsyncThunk(
  "admin/updateAdmin",
  async ({ id, name, phone, balance, coin }) => {
   
    const response = await axios.put(
      `http://44.201.153.46:8081/api/v1/admin/users/${id}`,
      {
        name,
        phone,
        balance,
        coin,
        
      },
      { headers: authHeader() }
    );
    return response.data;
  }
);


const adminEntity = createEntityAdapter({
  selectId: (admin) => admin.id,
});

const adminSlice = createSlice({
  name: "admin",
  initialState: adminEntity.getInitialState(),
  extraReducers: {
    [getAdmin.fulfilled]: (state, action) => {
      adminEntity.setAll(state, action.payload);
    },
    [updateAdmin.fulfilled]: (state, action) => {
      adminEntity.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
  },
});

export const adminSelectors = adminEntity.getSelectors((state) => state.admin);
export default adminSlice.reducer;