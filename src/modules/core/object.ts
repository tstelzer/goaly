// TODO: throw on illegal property literal
/**
 * Flips an objects property.
 *
 * @example
 * flip('flag')({flag: true}) === {flag: false}
 *
 * @argument {string} prop - Property literal to be flipped.
 */
export const flipProp = (prop: string) => (obj: any) =>
    ({...obj, [prop]: !obj[prop]})

/**
 * Swaps properties on a tuple of objects.
 *
 * @argument {string} prop - Property literal to be swapped.
 * @returns {Function} swap function partially applied with property
 *  literal.
 *
 */
export const swapProp = (prop: string) =>
/**
 * Partially applied swap function.
 *
 * @argument {Tuple} arr - Tuple of objects where properties shall be swapped.
 *
 * @returns {Tuple} Tuple of objects with swapped properties.
 */
    (arr: [any, any]): [any, any] => {
        const a1 = arr[0]
        const a2 = arr[1]

        return [
            {...a1, [prop]: a2[prop]},
            {...a2, [prop]: a1[prop]},
        ]
}
