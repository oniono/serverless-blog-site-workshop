import {
    TOGGLE_URL_LOCK,
    SET_URL_TEXT
} from "../constants";


const initialState = {
    urlText: "https://t8pqrt42ti.execute-api.eu-west-2.amazonaws.com/dev/blog",
    // urlText: "",
    isUrlLocked: false, // default: false
};

const searchBlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_URL_LOCK:
            return Object.assign({}, state, {
                isUrlLocked: !state.isUrlLocked
            });
        case SET_URL_TEXT:
            return Object.assign({}, state, {
                urlText: action.data
            });
        default:
            return state;
    }
};

export default searchBlogReducer;
