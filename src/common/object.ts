import {range} from 'ramda'
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

interface OrderedHash<T> {readonly [i: number]: T}
/**
 * Fixes order in ordered hash.
 */
/* tslint:disable no-let no-expression-statement no-object-mutation readonly-keyword prefer-const*/
export const fixOrder = <T>(input: OrderedHash<T> = {}): OrderedHash<T> => {
  const length = Object.keys(input).length
  const order = range(1, length + 1)
  let output: {[i: number]: any} = {...input}

  order.forEach((value, index) => {
    if (!output[value]) {
      for (let i = 0; i <= length; i++) {
        if (output[value + i]) {
          output[value] = output[value + i]
          delete output[value + i]
          break
        }
      }
    }
  })

  return output
}
/* tslint:enable no-let no-expression-statement no-object-mutation readonly-keyword prefer-const*/

/**
 * Adds a value to an ordered hash.
 */
export const addToOrdered = <T>(o: OrderedHash<T> = {}) => (value: T): OrderedHash<T> => ({
  ...o,
  [Object.keys(o).length + 1]: value,
})
