import { combineReducers } from "redux";

import imagesReducer from "./images";

/*
 * We add or combine reducers from here
 * By adding new member of the object
 * key images will be the name of the state
 * access it from components mapStateToProps with
 * state.images
*/
export default combineReducers({
  images: imagesReducer,
});
