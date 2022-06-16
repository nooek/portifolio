import { createSlice } from "@reduxjs/toolkit"

export const pagesInfo = createSlice({
  name: 'pagesInfo',
  initialState: {
    data: [{}]
  },
  reducers: {
    addPage: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { addPage } = pagesInfo.actions

export default pagesInfo.reducer;
