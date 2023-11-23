import { ADD_ITEM, REMOVE_ITEM } from "../actions/actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      let newItem = action?.payload;
      let isExits =
        state.cart.findIndex((item) => item?.productId === newItem?.productId) >
        -1;
      if (isExits) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item?.productId === newItem?.productId
              ? { ...item, quantity: item?.quantity + 1 }
              : item
          ),
        };
      } else {
        return { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
      }

    case REMOVE_ITEM: {
      let newItem = action?.payload;
      return {
        ...state,
        cart: state.cart?.filter(
          (item) => item?.productId !== newItem?.productId
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
