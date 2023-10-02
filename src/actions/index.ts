import { Part } from "../Interfaces/Part";
import { Robot } from "../Interfaces/Robot";

// Robot liste

export const ROBOT_LIST = "ROBOT_LIST";

export function robotList(robots: Robot[]) {
    return { type: ROBOT_LIST, robots };
}

// Part liste

export const PART_LIST = "PART_LIST";

export function partList(parts: Part[]) {
    return { type: PART_LIST, parts };
}

// Select robot

export const SELECT_ROBOT = "SELECT_ROBOT";

export function selectRobot(robot: Robot) {
    return { type: SELECT_ROBOT, robot };
}

// Select part

export const SELECT_PART = "SELECT_PART";

export function selectPart(part: Part) {
    return { type: SELECT_PART, part };
}