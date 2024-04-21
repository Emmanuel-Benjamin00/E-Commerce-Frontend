import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { brandService } from "./brandService";

export const getBrands = createAsyncThunk(
  "brands/getbrands",
  async (thunkAPI) => {
    try {
      return await brandService.getBrands();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  brand: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const brandSlice = createSlice({
  name: "brand",
  initialState: initialState,
  reducers: {
    brand_reset: (state, action) => {
      state.brand = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.brand = action.payload;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export const { brand_reset } = brandSlice.actions;
export default brandSlice.reducer;
