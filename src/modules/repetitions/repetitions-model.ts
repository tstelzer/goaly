/**
 * A repetition is a single, controlled exercise.
 * A group of repetitions is a set.
 */
export interface Repetition {
  readonly id: string
  readonly name?: string
  readonly description?: string
}
