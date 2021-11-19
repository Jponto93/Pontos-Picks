import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem
} from '@mui/material'
import AdminTableItem from "../AdminTableItem/AdminTableItem";
import AdminGameItem from "../AdminGameItem/AdminGameItem";


function Admin() {

    const dispatch = useDispatch();

    const [editScores, setEditScores] = useState(false)

    const membersList = useSelector(store => store.members)
    const games = useSelector(store => store.games)

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
            <h1>WELCOME, ADMIN</h1>
            <h2>MEMBER LIST</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>DELETE</th>
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
            <button onClick={() => setEditScores(!editScores)}>EDIT GAMES</button>

            {editScores ?
                <>  
                    <form>
                        <Select name="week" id=""
                            onChange={((event) => dispatch({ type: 'FETCH_GAMES', payload: event.target.value }))}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={11}>11</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={13}>13</MenuItem>
                            <MenuItem value={14}>14</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                            <MenuItem value={16}>16</MenuItem>
                            <MenuItem value={17}>17</MenuItem>
                            <MenuItem value={18}>18</MenuItem>
                        </Select>
                    </form>
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
                                    <th>SAVE SCORES</th>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {games.map(game => (
                                    <AdminGameItem 
                                    key={game.id} game={game}/>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
                :
                <p></p>}
        </>


    )
} // end Admin

export default Admin;