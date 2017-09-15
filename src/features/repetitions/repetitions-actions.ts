import {v4} from 'uuid'

import * as types from './repetitions-model'
import actionTypes from './repetitions-action-types'

export const add = (
    name:string='',
    description:string='',
) => ({
    type: actionTypes.ADD,
    payload: {
        id: v4(),
        name,
        description,
    }
})

export const edit = (
    id: number,
    repetition: types.Repetition
) => ({
    type: actionTypes.EDIT,
    payload: {repetition}
})

export const remove = (
    id: number,
) => ({
    type: actionTypes.REMOVE,
    payload: {id},
})

