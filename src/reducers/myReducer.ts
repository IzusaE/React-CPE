export default function appReducer(state: any, action: any) {
    switch (action.type) {
        case 'SET_ROBOTS':
            return { ...state, robots: action.robotList }
        // case 'SET_ROBOT_SELECTED':
        //     return { ...state, robotSelected: action.robot }
        case 'SET_PARTS':
            return { ...state, parts: action.partList }
        // case 'SET_PART_SELECTED':
        //     return { ...state, partSelected: action.part }
        default:
            return state
    }
}