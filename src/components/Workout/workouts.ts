import {AnyAction} from 'redux'
import {find, propEq} from 'ramda'

import * as A from './Actions'
import * as T from 'types'

export const workouts = (state: T.Workout[] = [], action: AnyAction) => {
    const { type, payload } = action
    switch (type) {
        case A.ADD:
            return state.concat([{id: payload.workout, sets: []}])
        case A.ADD_SET:
            return state.map(workout =>
                workout.id === payload.workout
                ? {
                    ...workout,
                    sets: workout.sets.concat([{
                        slot: workout.sets.length+1,
                        id: payload.set,
                    }]),
                }
                : workout
            )
        case A.REORDER_SET:
            return state.map(workout =>
                workout.id === payload.workout
                && find(propEq('slot', payload.oldSlot))(workout.sets)
                && find(propEq('slot', payload.newSlot))(workout.sets)
                ?  {
                    ...workout,
                    sets: workout.sets.map(set =>
                        set.slot === payload.oldSlot
                            ? {...set, slot: payload.newSlot}
                            : set.slot === payload.newSlot
                                ? {...set, slot: payload.oldSlot}
                                : set
                    )
                }
                : workout
            )
        case A.REMOVE_SET:
            return state.map(workout =>
                workout.id === payload.workout
                ? {
                    ...workout,
                    sets: workout.sets.filter(set => set.id !== payload.set),
                }
                : workout
            )
        default: return state
    }
}

