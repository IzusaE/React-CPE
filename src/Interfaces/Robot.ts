export interface Robot {
    id: number;
    title: string;
    visual_type: string;
    visual_src: string;
    parts: string[]
}

export interface AppState {
    robots: Robot[]; // Array of Part type
    robot: Robot | null; // Part type or null
}