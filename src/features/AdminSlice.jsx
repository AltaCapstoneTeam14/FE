import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../Services/auth-header";


export const getAdmin = createAsyncThunk("admin/getAdmin", async () => {
  const response = await axios.get(
    "http://44.201.153.46:8081/api-dev/v1/admin/users?page=5&size=2",
    { headers: authHeader() }
  );
  return response.data.data;
});

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
  },
});

export const adminSelectors = adminEntity.getSelectors((state) => state.admin);
export default adminSlice.reducer;