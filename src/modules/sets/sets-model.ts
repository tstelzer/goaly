/**
 * @prop {String} description A short description of the set.
 * @prop {String} name A terse identifier for the set.
 */
export interface Set {
    readonly id: string
    readonly name?: string
    readonly description?: string
}
