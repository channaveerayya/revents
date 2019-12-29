import { INC, DEC } from "./testConstants";

const initState = {
    data: 42
};
const testReducer = (state = initState,action) => {
    switch (action.type) {
        case INC:
            return { ...state, data: state.data + 1 };
        case DEC:
            return { ...state, data: state.data - 1 };
        default: return state;
    }
}
   

export default testReducer;