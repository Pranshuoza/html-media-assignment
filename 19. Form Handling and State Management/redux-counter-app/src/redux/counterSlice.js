// Action types
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// Action creators
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// Initial state
const initialState = {
    value: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 };
        case DECREMENT:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
};

export default counterReducer;