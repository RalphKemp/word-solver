import axios from "axios";
import { FETCH_WORDS } from "./types";

export const fetchWords = word => async dispatch => {
  const res = await axios.get(
    `${'https://cors-anywhere.herokuapp.com/'}https://od-api.oxforddictionaries.com:443/api/v1/wordlist/en/regions%3Dbritish%2C?word_length=${word.length}%2C&exact=false&limit=10`,
    {
      headers: {
        'Accept': "application/json",
        'app_id': "4bb65adf",
        'app_key': "f0952a9ea06c8a6b1fc1bbb40a2e5688"
      }
    }
  );
  dispatch({ type: FETCH_WORDS, payload: res.data });
};
