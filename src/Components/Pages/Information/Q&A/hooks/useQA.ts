import { useMemo } from 'react'
import RenderLocked from '../components/renderLocked'

const useQA = () => {
    const columnDefs = useMemo(() => {
        const styleColumns = {
            height: 50,
            borderBottom: '1px solid #ddd',
            fontSize: 14,
        }
        return [
            {
                field: 'number_order',
                headerName: '번호',
                // minWidth: 80,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
            {
                field: 'name',
                headerName: '제목',
                // minWidth: 650,
                paddingLeft: 20,
                headerStyle: 'cell-name',
                ...styleColumns,
                renderCell: (params: any) => {
                    const { row } = params || {}
                    return RenderLocked({ row })
                },
            },

            {
                field: '',
                headerName: '첨부',
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
            {
                field: 'author',
                headerName: '작성자',
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
            },
            {
                field: 'date',
                headerName: '등록일',
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },

            {
                field: 'total',
                headerName: '조회',
                // minWidth: 120,
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
                hide: true,
            },
            {
                field: 'admin_confirm',
                headerName: '관리자확인',
                align: 'center',
                cellStyle: 'cell-dowload',
                ...styleColumns,
            },
        ]
    }, [])

    return {
        columnDefs,
    }
}

export default useQA
