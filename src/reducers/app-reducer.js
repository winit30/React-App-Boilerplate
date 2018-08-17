import {RETURN_STATE} from "./../actions/action-types";

export default (state = {}, action) => {
    switch(action.type) {
        case RETURN_STATE:
            return action.payload;
        default:
            return state;
    }
}
