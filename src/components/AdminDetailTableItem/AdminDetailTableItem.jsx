import {
    TableRow,
    TableCell,
} from '@mui/material';
import './AdminDetailTableItem.css';
function AdminDetailTableItem ({pick, i}) {

    return (
        <>
        <TableRow className={pick.pick === pick.result ? "green" : "red"}
        key={i}>
            <TableCell align="center">{pick.pick}</TableCell>
            <TableCell align="center">{pick.result}</TableCell>
        </TableRow>
        </>
    )
} // end AdminDetailTableItem

export default AdminDetailTableItem