import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/config";
import { message } from "antd";

const initialState = {
  isloadLogin: false,
};

export const postLogin = createAsyncThunk("user/postLogin", async (data) => {
  try {
    const response = await http.post("/login", data);
    return response.data;
  } catch (error) {
    throw new Error("Có lỗi xảy ra trong quá trình kết nối");
  }
});

const loginUser = createSlice({
  name: "loginUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // tạo tài khoản
      .addCase(postLogin.pending, (state) => {
        state.isloadLogin = true;
      })
      .addCase(postLogin.fulfilled, (state, action) => {
        state.isloadLogin = false;
      })
      .addCase(postLogin.rejected, (state, action) => {
        state.isloadLogin = false;
        state.error = action.error.message;
      });
  },
});

export const {} = loginUser.actions;

export default loginUser.reducer;
