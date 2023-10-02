import { createContext, useReducer } from "react";
import { Robot } from "../Interfaces/Robot";
import { Part } from "../Interfaces/Part";
import appReducer from "../reducers/myReducer";

interface APIContextValue {
    robots: Robot[];
    robotSelected: Robot | null;
    parts: Part[];
    partSelected: Part | null;
}

export const LevelContext = createContext<{ state: any; dispatch: React.Dispatch<any> }>({
    state: {},
    dispatch: () => null,
});

export function Provider({ children }: any) {
    const [state, dispatch] = useReducer(appReducer, {
        robots: [],
        robotSelected: null,
        parts: [],
        partSelected: null,
    });

    return <LevelContext.Provider value={{ state, dispatch }}>{children}</LevelContext.Provider>;
}
