import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem
} from '@mui/material'


function MakeYourPicks() {

    const [weekSelect, setWeekSelect] = useState(1);

    const dispatch = useDispatch();
    const games = useSelector(store => store.games)

    useEffect(() => {
        dispatch({ type: 'FETCH_GAMES', payload: weekSelect })
    }, [])

    const handleSubmit = (event) => {
        setWeekSelect(event.target.value)
        dispatch({ type: 'FETCH_GAMES', payload: weekSelect})
    } // end handleSubmit

    console.log('this is the current week', weekSelect);

    return (
        <>
            <h1>MAKE YOUR PICKS</h1>
            <h2>SELECT WEEK</h2>

                <form>
                <Select name="" id=""
                value={weekSelect}
                    onChange={(event) => handleSubmit(event)}>
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
                                    <TableCell>@</TableCell>
                                    <TableCell>{game.home_id}</TableCell>
                                    <TableCell>{game.home_score}</TableCell>
                                    <TableCell>{game.game_date}</TableCell>
                                    <TableCell>{game.game_time}</TableCell>
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