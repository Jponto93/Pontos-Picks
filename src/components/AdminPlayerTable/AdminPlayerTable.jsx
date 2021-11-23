import {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    Container
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import AdminDetail from '../AdminDetail/AdminDetail';
import AdminTableItem from '../AdminTableItem/AdminTableItem';

function AdminPlayerTable() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details)

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])
    const membersList = useSelector(store => store.members)

    return (
        <>
            <Container>
                <button onClick={() => history.push('/admin')}>BACK</button>
                {details.length > 0 ? <AdminDetail /> : <p></p>}
                <h2>MEMBER LIST</h2>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <th>DELETE</th>
                                <th>VIEW PICKS</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>CURRENT SCORE</th>
                                <th>NEW SCORE</th>
                                <th>SAVE SCORE</th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {membersList.map(member => (
                                <AdminTableItem
                                    key={member.id}
                                    member={member} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default AdminPlayerTable