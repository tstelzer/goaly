export interface ChecklistItem {
    readonly slot: number,
    readonly done: boolean,
}

export interface Checklist {
    readonly [id: number]: ReadonlyArray<ChecklistItem>,
}

export interface ListItem {
    readonly slot: number,
    readonly reps: number,
}

export interface List {
    readonly [id: number]: ReadonlyArray<ListItem>,
}

export interface WorkoutSet {
    readonly slot: number,
    readonly id: number,
}

export interface Workout {
    readonly id: number,
    readonly sets: WorkoutSet[],
}
