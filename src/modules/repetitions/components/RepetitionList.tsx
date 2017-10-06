import * as React from 'react'
import {connect} from 'react-redux'
import {v4 as hash} from 'uuid'
import {toLower, sortBy, compose, prop} from 'ramda'
import ReactTable from 'react-table'
import {Dispatch} from 'redux'

import {Store} from 'app/store/store-types'
import {repetitions} from 'app/selectors/global-selectors'
import {model} from 'modules/repetitions/'
import * as core from 'modules/core'
import 'assets/react-table.css'

const mapState = (state: Store) => ({
  repetitions: repetitions.getRepetitionsList(state),
})

// TODO: refactor
const SELECT_ROW = 'SELECT_ROW'
interface SELECT_ROW {readonly id: string}

const _selectRow = (id: string): core.Action<SELECT_ROW> => ({type: SELECT_ROW, payload: {id}})
const mapDispatch = (dispatch: Dispatch<any>) => ({
  selectRow: (id: string) => dispatch(_selectRow(id))
})

export const RepetitionList = ({
  repetitions,
  selectRow,
}: {
  readonly repetitions: model.Repetition[],
  readonly selectRow: typeof _selectRow,
}) => {
  const rows = repetitions.map(rep => {
    const {
      id,
      name,
      description,
    } = rep
    const muscles = rep.muscles && rep.muscles.map(x => model.Muscle[x])
    const level = rep.level && model.Level[rep.level]
    const type = rep.type && model.Type[rep.type]

    return {name, description, id, muscles, type, level}
  })

  const columns = [
    {
      Header: 'id',
      accessor: 'id',
      show: false,
    },
    {
      Header: 'Name',
      accessor: 'name',
      minWidth: 300,
    },
    {
      Header: 'Muscles',
      accessor: 'muscles',
    },
    {
      Header: 'Level',
      accessor: 'level',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
  ]
  return <ReactTable
    className='m-l-2-u'
    data={rows}
    filterable={true}
    defaultPageSize={15}
    minRows={5}
    showPageJump={false}
    showPageSizeOptions={false}
    columns={columns}
    getTrProps={(state: any, rowInfo: any) => {
      return {
        style: {
          cursor: 'pointer',
        },
        onClick: (e: Event, handleOriginal: any) => {
          selectRow(rowInfo.row.id)
          if (handleOriginal)
            handleOriginal()
        }
      }
    }}
  />
}

export default connect(mapState, mapDispatch)(RepetitionList)
