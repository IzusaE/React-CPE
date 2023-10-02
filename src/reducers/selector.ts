import { RootState } from "../store";

export const robotListSelector = (state: RootState) => state.robot.robots
export const robotSelectSelector = (state: RootState) => state.robot.robot

export const partListSelector = (state: RootState) => state.part.parts
export const partSelectSelector = (state: RootState) => state.part.part