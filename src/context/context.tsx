import { createContext, useReducer, useMemo } from "react";
import { Robot } from "../Interfaces/Robot";
import { Part } from "../Interfaces/Part";
import appReducer from "../reducers/myReducer";

interface APIContextValue {
    robots: Robot[];
    robotSelected: Robot | null;
    parts: Part[];
    partSelected: Part | null;
}

const initialState: APIContextValue = {
    robots: [],
    robotSelected: null,
    parts: [],
    partSelected: null,
};  


export const LevelContext = createContext<{ state: APIContextValue; dispatch: React.Dispatch<any> }>({
    state: initialState,
    dispatch: () => null,
});

export function Provider({ children }: any) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const memoValue= useMemo(() =>({state, dispatch}), [state, dispatch])

    return <LevelContext.Provider value={memoValue}>{children}</LevelContext.Provider>;
}
