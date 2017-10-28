/**
 * A set is an ordered collection of repetitions.
 * Each entry is uniquely identifiable by its slot,
 * which is why we can have more than one of the same
 * repetition per set. Sets can be empty.
 */
export interface Set {
    readonly id: string
    readonly name?: string
    readonly description?: string
    readonly repetitions?: {
      readonly [slot: number]: string,
    }
}
