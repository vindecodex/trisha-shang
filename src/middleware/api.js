import * as actions from "../actions/api";

const api = ({ dispatch }) => next => async action => {
  // check if action type is not apiRequestStarted
  if (action.type !== actions.apiRequestStarted.type) return next(action)
  const {
    url,
    method,
    onSuccess,
  } = action.payload;

  try {
    const resp = await fetch(url,{
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (onSuccess) dispatch({type: onSuccess, payload: resp.url});
  } catch(error) {
    console.log(error);
  }
}

export default api;
