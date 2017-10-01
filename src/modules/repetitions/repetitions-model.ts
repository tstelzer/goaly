/**
 * Target muscle group.
 */
export enum Muscle {
 'Abdominals' = 1,
 'Abductors' = 2,
 'Adductors' = 3,
 'Biceps' = 4,
 'Calves' = 5,
 'Forearms' = 6,
 'Glutes' = 7,
 'Hamstrings' = 8,
 'Lats' = 9,
 'Lower Back' = 10,
 'Middle Back' = 11,
 'Neck' = 12,
 'Quadriceps' = 13,
 'Shoulders' = 14,
 'Traps' = 15,
 'Triceps' = 16,
 'Chest' = 17,
}

export enum Level {
  'Beginner' = 1,
  'Intermediate' = 2,
  'Expert' = 3,
}

export enum Type {
  'Cardio' = 1,
  'Strength' = 2,
  'Stretching' = 3,
}

/**
 * An unresolved Repetition.
 */
export interface RepetitionEntity {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly level?: Level,
  readonly type?: Type,
  readonly muscles?: Muscle[]
}

/**
 * A repetition is a single, controlled exercise.
 * A group of repetitions is a set.
 */
export interface Repetition {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly level?: Level,
  readonly type?: Type,
  readonly muscles?: Muscle[]
}
