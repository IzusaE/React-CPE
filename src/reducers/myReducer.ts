export default function appReducer(state: any, action: any) {
    switch (action.type) {
        case 'SET_ROBOTS':
            return { ...state, robots: action.payload }
        case 'SET_ROBOT_SELECTED':
            return { ...state, robotSelected: action.payload }
        case 'SET_PARTS':
            return { ...state, parts: action.payload }
        case 'SET_PART_SELECTED':
            return { ...state, partSelected: action.payload }
        default:
            return state
    }
}