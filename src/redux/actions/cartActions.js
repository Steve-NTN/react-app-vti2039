import { ADD_ITEM, REMOVE_ITEM } from "./actionTypes";

export const onAddItem = (data) => {
  return { type: ADD_ITEM, payload: data };
};

export const onRemoveItem = (data) => {
  return { type: REMOVE_ITEM, payload: data };
};
