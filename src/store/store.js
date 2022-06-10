import { configureStore } from "@reduxjs/toolkit"
import pagesInfoReducer from "./pagesInfo/pagesInfo"

export default configureStore({
  reducer: {
    pagesInfo: pagesInfoReducer
  },
})
