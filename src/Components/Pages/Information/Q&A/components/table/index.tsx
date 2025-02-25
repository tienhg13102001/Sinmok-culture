import React from 'react'
import '../table/table.scss'

type Options = {
    data: any[]
    columnDefs: any[]
    rowHeight?: number
    headerHeight?: number
    className?: string
    style?: React.CSSProperties
    headerStyle?: string
    cellStyle?: string
}
const Table = (options: Options) => {
    const { data, columnDefs, rowHeight, className, headerStyle } = options || {}

    return (
        <table className="table-header ">
            <thead>
                <tr className={`${className}`}>
                    {columnDefs.map((column, index) => {
                        return (
                            <th key={index} className={`${headerStyle} ${column?.hide === true ? 'table_hide' : ''}`}>
                                {column.headerName}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ height: rowHeight }}>
                        {columnDefs.map((column, columnIndex) => (
                            <td
                                key={`${rowIndex}-${columnIndex}`}
                                className={`table-cell ${column?.hide === true ? 'table_hide' : ''}`}
                                style={{
                                    textAlign: column?.align || 'left',
                                    ...column,
                                }}
                            >
                                {column.renderCell
                                    ? column.renderCell({ column: row[column.field], row, id: rowIndex })
                                    : column.field === 'admin_confirm'
                                    ? row[column.field]
                                        ? '확인됨'
                                        : '미확인'
                                    : row[column.field]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
