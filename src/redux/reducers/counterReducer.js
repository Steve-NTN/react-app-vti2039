import { DECREASE_COUNTER } from "../actions/actionTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };

    case "counter/increase":
      return { ...state, counter: state.counter + 1 };

    case "counter/decreaseWithNumber":
      return { ...state, counter: state.counter - action.payload };

    default:
      return state;
  }
};

export default counterReducer;
