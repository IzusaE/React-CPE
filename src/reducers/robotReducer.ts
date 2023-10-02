import { ROBOT_LIST, SELECT_ROBOT } from "../actions";
import { AppState } from "../Interfaces/Robot";

const initialState: AppState = {
    robots: [],
    robot: null
};

const robotReducer = (state = initialState, action: any) => {
    if (action.type === ROBOT_LIST)
        return {
            ...state,
            robots: action.robots
        };
    else if (action.type === SELECT_ROBOT)
        return {
            ...state,
            robot: action.robot
        };
    else
        return state;
}

export default robotReducer;