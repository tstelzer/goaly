/* tslint:disable no-expression-statement */
import {flipProp, swapProp, addToOrdered, fixOrder} from "./object"

describe("core", () => {
  describe("object utility", () => {

    describe("flipProp", () => {

      it("flips a given boolean property of an object", () => {
        const obj = {prop: true}

        expect(flipProp("prop")(obj)).toEqual({prop: false})
      })

    })

    describe("swapProp", () => {

      it("swapProps properties of two objects", () => {
        const obj1 = {id: 1, slot: 1}
        const obj2 = {id: 2, slot: 2}

        expect(swapProp("slot")([obj1, obj2])).toEqual([
          {id: 1, slot: 2},
          {id: 2, slot: 1},
        ])

      })

      it("returns the objects untouched if the property does not exist", () => {
        expect(
          swapProp("non-existent")([{id: 1, slot: 1}, {id: 2, slot: 2}]),
        ).toEqual([{id: 1, slot: 1}, {id: 2, slot: 2}])
      })

      describe('fixOrder', () => {
        it('fixes order in a numerically indexed hash', () => {
          expect(fixOrder({
            1: 'a',
            3: 'b',
          })).toEqual({1: 'a', 2: 'b'})
          expect(fixOrder({
            3: 'a',
            4: 'b',
            6: 'c',
          })).toEqual({1: 'a', 2: 'b', 3: 'c'})
        })
      })

      describe('addToOrdered', () => {
        it('adds a value to a numerically indexed hash', () => {
          expect(addToOrdered({})('a')).toEqual({
            1: 'a',
          })
          expect(addToOrdered({
              1: 'a',
              2: 'b',
            })('c')).toEqual({1: 'a', 2: 'b', 3: 'c'})
        })
      })
    })
  })

})
