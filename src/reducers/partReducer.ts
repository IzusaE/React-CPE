import { AppState } from "../Interfaces/Part";
import { PART_LIST, SELECT_PART } from "../actions";

const initialState: AppState = {
    // I would like to add type to my array as Part type and for part too
    parts: [],
    part: null
};

const partReducer = (state = initialState, action: any) => {
    if (action.type === PART_LIST)
        return {
            ...state,
            parts: action.parts
        };
    else if (action.type === SELECT_PART)
        return {
            ...state,
            part: action.part
        };
    else
        return state;
}

export default partReducer;