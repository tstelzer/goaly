/* tslint:disable no-expression-statement */
import * as util from './state'

// describe('common', () => {
//   describe('util.makeEntityReducer', () => {
//     it('', () => {
//       interface Entity {
//         readonly id: string,
//         readonly name: string,
//       }
//       const reducer = util.makeEntityReducer<Entity>(e => e.id, 'entities')
//       const state = {
//         entities: {1: {name: 'Alice', id: '1'}},
//         result: ['1'],
//       }
//       const action = {
//         type: 'model/ADD',
//         meta: {model: 'entities'},
//         payload: {
//           entity: {
//             id: '2',
//             name: 'Bob',
//           },
//         },
//       }

//       const expected = {
//         entities: {
//           1: {name: 'Alice', id: '1'},
//           2: {name: 'Bob', id: '2'},
//         },
//         result: ['1', '2'],
//       }
//       const result = reducer(state, action)

//       expect(result).toEqual(expected)
//     })
//   })
// })
