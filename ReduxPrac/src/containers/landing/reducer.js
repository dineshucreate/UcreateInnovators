import * as type from "./types";
const INITIAL_STATE = {
  counter: 0
};
export default (landingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.INCREMENT: 
      return {
        ...state,
        counter: state.counter + 5
      }
    default:
      return state;
  }
});
