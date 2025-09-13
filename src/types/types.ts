export interface RoutineItemTypes {
    id:string;
    name: string;
    completed: boolean;
}

export interface DailyRoutineTypes {
    id:string;
    name: string;
    time: string;
    items:  RoutineItemTypes[];
}

export interface NewRoutineTypes {
    name: string;
    time: string;
    items: RoutineItemTypes[];
}

export interface AppTitle {
    appTitle: string;
}

export interface ButtonTextTypes {
    addButton: string;
    deleteButton: string;
}