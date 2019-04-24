import { ADD_CLICKED, DELETE_CLICKED, ON_TEXT_CHANGE } from "./types";
const INITIAL_STATE = {
  data: [],
  textToAdd: ""
};
export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLICKED:
      return {
        ...state,
        data: state.data.concat({ value: action.textToAdd })
      };
    case ON_TEXT_CHANGE:
      return {
        ...state,
        textToAdd: action.text
      };
    case DELETE_CLICKED:
      return {
        ...state,
        data: state.data.filter((value, index) => {
            return action.index !== index
        })
      };
    default:
      return state;
  }
};
