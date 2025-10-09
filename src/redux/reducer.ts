import type { APICallResponseType, InitialState } from "@/utils/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getSomething } from "./actions";
import { HttpStatusCode } from "axios";
export const initialState: InitialState = {
  loading: true,
  error: false,
  success: false,
  message: "",
  isAuthenticated: false,
  dummyArray: [],
};

export const reducer = createSlice({
  name: "global",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      // *********** getSomething START *********** \\
      .addCase(getSomething.pending, (state) => {
        state.loading = true;
        state.message = "";
        state.success = false;
        state.error = false;
      })
      .addCase(
        getSomething.fulfilled,
        (state, action: PayloadAction<APICallResponseType<Array<string>>>) => {
          if (action.payload.status === HttpStatusCode.Ok) {
            state.dummyArray = action.payload.data;
            state.success = true;
          } else {
            state.message = action.payload.message;
            state.error = true;
          }
          state.loading = false;
        }
      )
      .addCase(getSomething.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.error.message || "Request failed";
      });
    // *********** getSomething END *********** \\
  },
});

export const { login } = reducer.actions;

export default reducer.reducer;
