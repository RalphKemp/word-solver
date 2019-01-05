import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import wordsReducer from "./wordsReducer";

export default combineReducers({
  words: wordsReducer,
  form: reduxForm
});
