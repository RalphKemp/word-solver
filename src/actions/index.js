import { FETCH_WORDS } from "./types";

export const setWords = values => async dispatch => {
  dispatch({ type: FETCH_WORDS, payload: values });
};
