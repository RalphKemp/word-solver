import { FETCH_WORDS } from "./types";

export const setWords = values => {
  return {
    type: "FETCH_WORDS",
    payload: values
  };
};
