import {
    TableRow,
    TableCell,
} from '@mui/material';

function AdminDetailTableItem ({pick, i}) {

    return (
        <>
        <TableRow key={i}>
            <TableCell align="center">{pick.pick}</TableCell>
            <TableCell align="center">{pick.result}</TableCell>
        </TableRow>
        </>
    )
} // end AdminDetailTableItem

export default AdminDetailTableItem