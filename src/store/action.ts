import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

export const GET_MOVIES_START = "GET_MOVIES_START";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAIL = "GET_MOVIES_FAIL";

export const getMovies = (
  search?: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const searchQuery = search ? `?search=${search}` : "";
      dispatch({ type: GET_MOVIES_START });

      const response = await fetch(
        `http://localhost:5000/api/v1/movies${searchQuery}`
      );
      const result = await response.json();

      if (result.errors || result.error) {
        dispatch({
          type: GET_MOVIES_FAIL,
          payload: result.errors
            ? {
                message: result.errors[0].msg,
                statusCode: 500,
                requestStatus: "Fail",
              }
            : result.error,
        });
        return;
      }

      dispatch({ type: GET_MOVIES_SUCCESS, payload: result });
    } catch (error) {
      dispatch({ type: GET_MOVIES_FAIL, payload: error });
    }
  };
};
