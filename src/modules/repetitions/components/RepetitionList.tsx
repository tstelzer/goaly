import * as React from 'react'
import {connect} from 'react-redux'
import {v4 as hash} from 'uuid'
import {toLower, sortBy, compose, prop} from 'ramda'
import ReactTable from 'react-table'
import 'assets/react-table.css'

import {Store} from 'app/store/store-types'
import {repetitions} from 'app/selectors/global-selectors'
import {model} from 'modules/repetitions/'

const mapState = (state: Store) => ({
  repetitions: repetitions.getRepetitionsList(state),
})

export const RepetitionList = ({
  repetitions,
}: {
  readonly repetitions: model.Repetition[],
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
  return <ReactTable data={rows} filterable={true} columns={columns} />
}

export default connect(mapState)(RepetitionList)
