import {
    TableRow,
    TableCell
} from '@mui/material'
import { useDispatch } from 'react-redux'

function AdminDetailTableItem ({pick, i}) {

    return (
        <>
        <TableRow key={i}>
            <TableCell className="center">{pick.pick}</TableCell>
            <TableCell className="center">{pick.result}</TableCell>
        </TableRow>
        </>
    )
} // end AdminDetailTableItem

export default AdminDetailTableItem