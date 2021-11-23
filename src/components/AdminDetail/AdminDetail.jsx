import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    Container
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AdminDetailTableItem from '../AdminDetailTableItem/AdminDetailTableItem';


function AdminDetail() {

    const details = useSelector(store => store.details)
    const dispatch = useDispatch();
    const week = useSelector(store => store.week)

    let points = details.reduce((points, game) => {
        console.log('inside reduce');
        if (game.pick === game.result) {
            console.log('inside if statement');
            return points + 1;
        } else {
            return points
        }
    }, 0)

    dispatch({ type: 'SET_POINT_COUNT', payload: points })

    return (
        <>
            <Container>
                <h2>{details[0].username}'s week {week} pick's</h2>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <th>PICK</th>
                                <th>RESULT</th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {details.map((pick, i) => {
                                return (
                                    <AdminDetailTableItem pick={pick}
                                        i={i} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {details.length > 0 ?
                    <h2>{details[0].username} scored {points} points!</h2>
                    : <p></p>}
            </Container>
        </>
    )
} // end AdminDetail

export default AdminDetail;