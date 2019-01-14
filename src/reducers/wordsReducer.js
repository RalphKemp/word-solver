import { FETCH_WORDS } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_WORDS:
      return action.payload;
    default:
      return state;
  }
}
