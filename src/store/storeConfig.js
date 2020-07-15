import reducer from "./reducer";
import api from "../middleware/api";

/*
 * With the use of @reduxjs/toolkit
 * Everything is already configured
 * With the getDefaultMiddleware()
 * Allows us to use Redux DevTools
*/

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const store = configureStore({
  reducer,
  middleware: [
    ...getDefaultMiddleware(),
  api,
  ],
})


export default store;
