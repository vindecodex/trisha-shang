/*
 * Using createAction action type
 * will be the arguments that was passed
 * action will be created manually
 * for this file action was under middleware/api.js
*/
import { createAction } from "@reduxjs/toolkit";
import { addImage } from "../store/images";

/*
 * ACTION CREATORS
*/
export const apiRequestStarted = createAction("api/RequestStarted");
export const apiRequestSuccess = createAction("api/RequestSuccess");
export const apiRequestFailed = createAction("api/RequestFailed");

/*
 * ACTIONS
*/
export const getImages = () => apiRequestStarted({
  url: 'https://source.unsplash.com/random/1600x900',
  method: 'GET',
  onSuccess: addImage.type, // from reducer
});
