import { createSlice } from "@reduxjs/toolkit";

export interface IDriverState {
  sidebar: {
    isActive: boolean;
  };
}

const initialState: IDriverState = {
  sidebar: {
    isActive: false,
  },
};

export const clinicsSlice = createSlice({
  name: "Drivers",
  initialState,
  reducers: {
    toggleSidebar: (
      state,
      action: {
        type: string;
        payload: boolean | undefined;
      }
    ) => {
      state.sidebar.isActive =
        typeof action.payload === "boolean"
          ? !!action?.payload
          : !state.sidebar.isActive;
    },
  },
});

export const { toggleSidebar } = clinicsSlice.actions;

export default clinicsSlice.reducer;
