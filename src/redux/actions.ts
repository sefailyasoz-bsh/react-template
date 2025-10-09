// import axiosClient from "@/utils/axiosClient";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpStatusCode } from "axios";

export const getSomething = createAsyncThunk(
  "something/to-get",
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      //   const response = await axiosClient.get("");

      return {
        data: ["dummy1", "dummy2", "dummy3"],
        // data: response.data,
        message: "Success",
        // status: response.status,
        status: HttpStatusCode.Ok,
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return rejectWithValue({
        data: [],
        message: error?.response?.data?.message || "Request failed",
        status: error?.response?.status || HttpStatusCode.BadRequest,
      });
    }
  }
);
