import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/config";

const initialState = {
  isloadRegister: false,
};

export const getRegister = createAsyncThunk(
  "user/getRegister",
  async (data) => {
    try {
      const response = await http.post("/register", data);
      return response.data;
    } catch (error) {
      throw new Error("Có lỗi xảy ra trong quá trình kết nối");
    }
  }
);

const createRegister = createSlice({
  name: "createRegister",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // tạo tài khoản
      .addCase(getRegister.pending, (state) => {
        state.isloadRegister = true;
      })
      .addCase(getRegister.fulfilled, (state, action) => {
        state.isloadRegister = false;
      })
      .addCase(getRegister.rejected, (state, action) => {
        state.isloadRegister = false;
        state.error = action.error.message;
      });
  },
});

export const {} = createRegister.actions;

export default createRegister.reducer;
