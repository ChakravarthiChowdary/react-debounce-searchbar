import { AnyAction } from "redux";
import {
  GET_MOVIES_FAIL,
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
} from "./action";

export interface Movie {
  title: string;
  year: string;
  _id: string;
}

const initialState: {
  loading: boolean;
  error: null | { message: string; statusCode: string };
  movies: Movie[];
  apiCallsCount: number;
} = {
  loading: false,
  error: null,
  movies: [],
  apiCallsCount: 0,
};

export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return {
        ...state,
        loading: true,
        error: null,
        apiCallsCount: state.apiCallsCount + 1,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
