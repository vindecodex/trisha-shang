/*
 * If Using createSlice there is no need
 * To create Action types and action creator.
 * Function name under reducers object will be the action type.
 * The Function itself will be the action.
*/
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "images",
  initialState: {
    imageURL: "",
    loading: false,
  },
  reducers: {
    addImage: function(images, action) {
      images.imageURL = action.payload;
    }
  }
})

// Will be used during dispatch
export const { addImage } = slice.actions;

// Will be used under combined reducer
export default slice.reducer;
