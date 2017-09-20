/* tslint: disable no-expression-statement */
import {flipProp, swapProp} from "./object"

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

    })
  })

})
