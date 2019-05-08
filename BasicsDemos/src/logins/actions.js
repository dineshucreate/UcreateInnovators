import { Increment, Decrement } from "../login/types";
export const incementClicked = (dispatch) => {
    dispatch({
        type:Increment
    })
}
export const decrementClicked = dispatch => {
    return dispatch({ type: Decrement });
  };
