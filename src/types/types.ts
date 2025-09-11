export interface RoutineItemTypes {
    id:string;
    name: string;
    completed: boolean;
}

export interface DailyRoutineTypes {
    id:string;
    name: string;
    items:  RoutineItemTypes[];
}

export interface NewRoutineTypes {
    name: string;
    items: RoutineItemTypes[];
}