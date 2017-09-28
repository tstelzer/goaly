/**
 * A SetRep, or set-repetition joins the repetitions and sets table.
 * @prop {String} id: PK: ID of set-rep.
 * @prop {String} setId FK: ID of set.
 * @prop {String} repId FK: ID of repetition.
 * @prop {Number} slot The order of the SetRep. Must be unique.
 * @prop {Number} iterations The number of iterations.
 */
export interface SetRep {
    readonly id: string
    readonly repId: string
    readonly setId: string
    readonly slot?: number
    readonly iterations?: number
}
