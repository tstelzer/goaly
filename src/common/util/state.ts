import * as R from 'ramda'

/**
 * Updates the state with an entity.
 */
export const edit = (state: any, entity: any): any => ({
  ...state,
  [entity.id]: {
    ...R.merge(state[entity.id], entity),
  },
})

type Accessor<E> = <K extends keyof E>(entity: E) => E[K]


// export const addEntity = <S, E>(state: S, entity: E): S => {
//     return Object.assign({}, state, [entity.id]: entity)
//   }
