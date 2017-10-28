import * as React from 'react'
import ReactTable from 'react-table'
import {Dispatch} from 'redux'

import {Action} from 'common'
import 'assets/react-table.css'

interface Column {
  readonly Header: string,
  readonly accessor?: string,
  readonly show?: boolean,
  readonly sortable?: boolean,
  readonly resizable?: boolean,
  readonly filterable?: boolean,
  readonly columns?: Column[]
}

interface Row {
  readonly [column: string]: any
}

type SelectRow = (id: string | number) => (dispatch: Dispatch<any>) => Action<any, any>

export const Table = ({
  rows,
  columns,
  select,
}: {
  readonly rows: Row[],
  readonly columns: Column[],
  readonly select: SelectRow,
}) => {
  const onTr = (state: any, rowInfo: any) => {
    return {
      style: {
        cursor: 'pointer',
      },
      onClick: (e: Event, handleOriginal: any) => {
        /* tslint:disable no-expression-statement */
        select(rowInfo.row.id)
        if (handleOriginal) {handleOriginal()}
        /* tslint:enable no-expression-statement */
      },
    }
  }
  return (
    <ReactTable
      className="m-l-2-u"
      data={rows}
      filterable={true}
      defaultPageSize={15}
      minRows={5}
      showPageJump={false}
      showPageSizeOptions={false}
      columns={columns}
      getTrProps={onTr}
    />
  )
}
