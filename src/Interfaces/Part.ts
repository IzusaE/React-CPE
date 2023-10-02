export interface Part {
    id: string;
    title: string;
    price: number;
    visual_type: string;
    visual_src: string;
    description: string;
}

export interface AppState {
    parts: Part[]; // Array of Part type
    part: Part | null; // Part type or null
}
