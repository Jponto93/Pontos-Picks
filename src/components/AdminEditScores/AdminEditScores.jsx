import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AdminEditScores.css';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Container,
    Button,
    Paper,
    Box
} from '@mui/material'
import AdminGameItem from "../AdminGameItem/AdminGameItem";
import { useHistory } from "react-router";
// import AdminEditScores from "../AdminEditScores/AdminEditScores";


function AdminEditScores() {

    const dispatch = useDispatch();
    const history = useHistory();

    // const membersList = useSelector(store => store.members)
    const games = useSelector(store => store.games);
    const week = useSelector(store => store.week);

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES', payload: week })
    }, [])

    return (
        <>
            <Container className="editGameContainer">
                <Paper elevation={24}>
                    <Box padding={5}>
                    <h2>WEEK {week} GAMES</h2>
                    </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <th>UPDATE AWAY</th>
                                <th>AWAY SCORE</th>
                                <th>AWAY</th>
                                <th>@</th>
                                <th>HOME</th>
                                <th>HOME SCORE</th>
                                <th>UPDATE HOME</th>
                                <th>RESULT</th>
                                <th>SAVE SCORES</th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {games?.map(game => (
                                <AdminGameItem
                                    key={game.id} game={game} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box padding={5}
                className="backBtn">
                <Button
                variant="outlined"
                onClick={() => history.push('/admin')}>BACK</Button>
                </Box>
                </Paper>
            </Container>
        </>
    )
} // end AdminEditScores

export default AdminEditScores;