/* tslint:disable no-expression-statement */
import {propEq, find} from 'ramda'

import * as A from "./Actions"
import {workouts} from "./workouts"

describe("Workout", () => {
    describe("workouts", () => {
        it("initializes the state without input", () => {
            expect(workouts(undefined, {type: ''})).toEqual([])
        })

        it("handles ADD", () => {
            const action = {type: A.ADD, payload: {workout: 1}}

            expect(workouts(undefined, action)).toEqual([{id: 1, sets: []}])
        })

        describe('ADD_SET', () => {
            it("adds a set", () => {
                expect(
                    workouts([{id: 1, sets: []}, {id: 2, sets: []}], {
                        type: A.ADD_SET,
                        payload: {workout: 1, set: 5}
                    })
                ).toEqual([{id: 1, sets: [{id: 5, slot: 1}]}, {id: 2, sets: []}])

                expect(
                    workouts(
                        [{id: 1, sets: []}, {id: 2, sets: [{id: 3, slot: 1}]}],
                        {
                            type: A.ADD_SET,
                            payload: {workout: 2, set: 12},
                        }
                    )
                ).toEqual([
                    {id: 1, sets: []},
                    {id: 2, sets: [{id: 3, slot: 1}, {id: 12, slot: 2}]},
                ])
            })
        })

        describe('REORDER_SET', () => {
            it("reorders two slots", () => {
                expect(
                    workouts([
                        {id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]}
                    ], {
                        type: A.REORDER_SET,
                        payload: {workout: 1, oldSlot: 1, newSlot: 2},
                    })
                ).toEqual([{id: 1, sets: [{id: 1, slot: 2}, {id: 2, slot: 1}]}])

                expect(
                    workouts([
                        {id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]},
                        {id: 2, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]},
                    ], {
                        type: A.REORDER_SET,
                        payload: {workout: 1, oldSlot: 1, newSlot: 2},
                    })
                ).toEqual([
                    {id: 1, sets: [{id: 1, slot: 2}, {id: 2, slot: 1}]},
                    {id: 2, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]},
                ])
            })

            it('returns the state unchanged if either slot does not exist', () => {
                expect(
                    workouts([
                        {id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]}
                    ], {
                        type: A.REORDER_SET,
                        payload: {workout: 1, oldSlot: 3, newSlot: 1},
                    })
                ).toEqual([{id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]}])

                expect(
                    workouts([{id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]}], {
                        type: A.REORDER_SET,
                        payload: {workout: 1, oldSlot: 1, newSlot: 3},
                    })
                ).toEqual([{id: 1, sets: [{id: 1, slot: 1}, {id: 2, slot: 2}]}])
            })
        })

        describe('REMOVE_SET', () => {
            it('removes a set', () => {
                expect(workouts([
                    {id: 1, sets: [{id: 1, slot: 1}]},
                    {id: 2, sets: [{id: 1, slot: 1}]},
                    {id: 3, sets: [{id: 1, slot: 1}]},
                ], {
                    type: A.REMOVE_SET,
                    payload: {workout: 2, set: 1},
                })).toEqual([
                    {id: 1, sets: [{id: 1, slot: 1}]},
                    {id: 2, sets: []},
                    {id: 3, sets: [{id: 1, slot: 1}]},
                ])
            })
        })
    })
})
