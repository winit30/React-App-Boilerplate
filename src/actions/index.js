import {RETURN_STATE} from "./action-types";

export const dummyAaction = () => {
  return {
    type: RETURN_STATE,
    payload: {}
  };
}
