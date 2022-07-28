import { createSlice } from "@reduxjs/toolkit";

export type Drivers = {
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    date: string;
    age: number;
  };
};

export interface IDriverState {
  length: number;
  page: number;
  maxShown: number;
  latestPage: number;
  term: string;
  data: Drivers[];
}

const initialState: IDriverState = {
  length: 0,
  page: 1,
  maxShown: 5,
  latestPage: 1,
  term: "",
  data: [],
};

export const clinicsSlice = createSlice({
  name: "Drivers",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.length = action.payload.length;
      state.data = action.payload;
      state.latestPage = Math.floor(action.payload.length / state.maxShown);
    },
    search: (state, action) => {
      state.page = 1;
      state.term = action.payload;

      const drivers = [...state.data]?.filter((item) =>
        item.name.first.toLowerCase().includes(action.payload.toLowerCase())
      );

      state.latestPage = Math.floor(drivers.length / state.maxShown) || 1;
    },
    prevPage: (state) => {
      if (+state.page > 0) state.page = state.page - 1;
    },
    nextPage: (state) => {
      if (+state.page <= Math.floor(state.length / state.maxShown))
        state.page = state.page + 1;
    },
  },
});

export const { setList, prevPage, nextPage, search } = clinicsSlice.actions;

export default clinicsSlice.reducer;
