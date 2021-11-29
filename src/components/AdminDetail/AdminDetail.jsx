import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    Container,
    Box
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AdminDetailTableItem from '../AdminDetailTableItem/AdminDetailTableItem';


function AdminDetail() {

    const details = useSelector(store => store.details)
    const dispatch = useDispatch();
    const week = useSelector(store => store.week)
    const user = useSelector(store => store.user)

    let points = details.reduce((points, game) => {
        console.log('inside reduce');
        if (game.pick === game.result) {
            console.log('inside if statement');
            return points + 1;
        } else {
            return points
        }
    }, 0)

    const combinedTotal = points + user.pick_score;
    console.log('combinedTotal = ',combinedTotal);
    dispatch({ type: 'SET_POINT_COUNT', payload: points })

    return (
        <>
            <Container>
                <Box padding={5}>
                    {details[0].username === user.username ?  <h2>Your week {week} picks!</h2> : <h2>{details[0].username}'s week {week} pick's</h2>}
                </Box>
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
                    <Box pt={5}>
                        {details[0].username === user.username ?  <h2>You scored {points} points for week {week}!</h2>
                        :  
                        <>
                        <h2>{details[0].username} scored {points} points for week {week}!</h2>
                        {/* <h2>{details[0].username} now has {combinedTotal} points!</h2> */}
                        </>}
                    </Box>
                    : <p></p>}
            </Container>
        </>
    )
} // end AdminDetail

export default AdminDetail;