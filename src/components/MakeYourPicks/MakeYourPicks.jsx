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
import MakePickTableItem from "../MakePickTableItem/MakePickTableItem";


function MakeYourPicks() {

    const [pickList, setPickList] = useState({
        schedule_id: 0,
        pick: ''
    })

    const handlePickSelect = (event, prop1, prop2, prop3) => {
        console.log('event happened');
        setPickList({
            ...pickList,
            [prop1]: prop2,
            [prop3]: event.target.value,
        })
    }

    const dispatch = useDispatch();
    const games = useSelector(store => store.games)

    const handlePickSubmit = () => {
        console.log('clicked submit');
    } // end handleSubmit

    console.log('this is pickList', pickList);

    return (
        <>
            <h1>MAKE YOUR PICKS</h1>
            <h2>WEEK</h2>

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

            {games.length > 1 ?
                <TableContainer>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>AWAY SCORE</TableCell>
                                <TableCell>AWAY TEAM</TableCell>
                                <TableCell></TableCell>
                                <TableCell>HOME TEAM</TableCell>
                                <TableCell>HOME SCORE</TableCell>
                                <TableCell>DATE</TableCell>
                                <TableCell>TIME</TableCell>
                                <TableCell>YOUR PICK</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {games.map((game) => {
                            return (
                                <MakePickTableItem game={game}
                                key={game.id}/>
                            )
                        })} */}
                            {games.map((game) => {
                                return (
                                    <TableRow key={game.id}>
                                        <TableCell>{game.visitor_score}</TableCell>
                                        <TableCell>{game.visitor_id}</TableCell>
                                        <TableCell>@</TableCell>
                                        <TableCell>{game.home_id}</TableCell>
                                        {/* <GameItem game={game}/> */}
                                        <TableCell>{game.home_score}</TableCell>
                                        <TableCell>{game.game_date}</TableCell>
                                        <TableCell>{game.game_time}</TableCell>
                                        <TableCell>
                                            <form id="myForm" onSubmit={handlePickSubmit}>
                                            <input
                                                onChange={(event) => handlePickSelect(event, 'schedule_id', game.id, 'pick')}
                                                id={game.id}
                                                name="pick"
                                                maxLength="3"
                                                required
                                                type="text"
                                                form="myForm"></input>
                                            <button type="submit" form="myForm">SUBMIT</button>
                                        </form>
                                    </TableCell>

                                </TableRow>
                        )
                        })}
                    </TableBody>
                </Table>
                
                
            </TableContainer> : <h2>SELECT YOUR WEEK</h2>
}
        </>
    )
} // end MakeYourPicks

export default MakeYourPicks;