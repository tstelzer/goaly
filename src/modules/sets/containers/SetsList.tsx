import * as React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'

import {Store} from 'app/store/store-types'
import {sets} from 'app/selectors/global-selectors'
import {model} from 'modules/sets/'
import {Action, Table} from 'common'

import 'assets/react-table.css'

type SelectRow = (id: string | number) => (dispatch: Dispatch<any>) => Action<any, any>

const mapState = (state: Store) => ({
  sets: sets.getSetsList(state),
})

const mapDispatch = (dispatch: Dispatch<any>) => ({
  select: (id: string | number) => (dispatch: Dispatch<any>) => ({type: ''}),
})

export const SetsList = ({
  sets,
  select,
}: {
  readonly sets: model.Set[],
  readonly select: SelectRow,
}) => {
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
      Header: 'Description',
      accessor: 'description',
    },
  ]
  const rows = [
    {id: '1', name: 'bla', description: 'hi'},
  ]
  return (
    <Table
      columns={columns}
      rows={rows}
      select={select}
    />
  )
}

export default connect(mapState, mapDispatch)(SetsList)
