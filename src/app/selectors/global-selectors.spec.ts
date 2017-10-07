/* tslint:disable no-expression-statement */
import {getSelected} from './global-selectors'
import {Store} from 'app/store/store-types'
import {fakeData} from 'app/store/fakeData'
import {model as repsModel} from 'modules/repetitions/'

describe('global selectors', () => {
  describe('ui', () => {
    describe('getSelectedRepetition', () => {
      it('returns the currently selected repetition', () => {
        const fakeData: Store = {
          repetitions: {
            byId: {
              1: {
                id: '1',
                name: 'ONE',
                description: 'ONE',
                muscles: [1],
                level: 1,
                type: 2,
              },
              2: {
                id: '2',
                name: 'TWO',
                description: 'TWO',
                muscles: [2],
                level: 1,
                type: 3,
              },
            },
            allIds: ['1', '2'],
          },
          ui: {repetitions: {selected: '1'}},
        }
        const result = getSelected(fakeData)
        const expected = fakeData.repetitions.byId[1]

        expect(result).toEqual(expected)
      })
    })
  })
})
