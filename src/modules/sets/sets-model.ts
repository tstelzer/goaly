/**
 * A set is a collection of repetitions.
 */
export interface Set {
    readonly id: string
    readonly name?: string
    readonly description?: string
    readonly repetitions?: {
      readonly [slot: number]: string,
    }
}
