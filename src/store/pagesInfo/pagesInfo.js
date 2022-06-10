import { createSlice } from "@reduxjs/toolkit"
import { flashcardHome } from "../../assets/images/flashcard/index"
import { homeMap } from "../../components/Flashcard/FlashcardImage/Maps/HomeMap"

export const pagesInfo = createSlice({
  name: 'pagesInfo',
  initialState: {
    pagesInfo: [{
      pageVisited: flashcardHome,
      pageVisitedName: "home",
      map: homeMap,
    }]
  },
  reducers: {
    addPage: (state, action) => {
      state.pagesInfo = action.payload
    }
  }
})

export const { addPage } = pagesInfo.actions

export default pagesInfo.reducer;
