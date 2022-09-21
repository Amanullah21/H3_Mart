import { set_page } from "./action";
import { SET_PAGE } from "./actiontype";
import { initStates } from "./constatnt";

export const reducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case SET_PAGE: {
      set_page("setpage", payload);
      return {
        ...state,
        page: payload,
      };
    }

    default: {
      return state;
    }
  }
};
