import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'


function MakeYourPicks() {

    const dispatch = useDispatch();
    const games = useSelector(store => store.games)

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES' })
    }, [])
    return (
        <>
            <h1>MAKE YOUR PICKS</h1>
            <h2>SELECT WEEK</h2>
            <select name="" id="">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
            </select>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>AWAY SCORE</TableCell>
                            <TableCell>AWAY TEAM</TableCell>
                            <TableCell></TableCell>
                            <TableCell>HOME TEAM</TableCell>
                            <TableCell>HOME SCORE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {games.map((game) => {
                            return (
                                <TableRow key={game.id}>
                                    <TableCell>{game.visitor_score}</TableCell>
                                    <TableCell>{game.visitor_id}</TableCell>
                                    <TableCell>at</TableCell>
                                    <TableCell>{game.home_id}</TableCell>
                                    <TableCell>{game.home_score}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
} // end MakeYourPicks

export default MakeYourPicks;