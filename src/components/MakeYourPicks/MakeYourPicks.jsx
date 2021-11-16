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
    MenuItem,
} from '@mui/material'
import MakePickTableItem from "../MakePickTableItem/MakePickTableItem";


function MakeYourPicks() {

    const pickList = useSelector(store => store.selection)

    const dispatch = useDispatch();
    const games = useSelector(store => store.games)

    const handlePickSubmit = (action) => {
        console.log('clicked submit');
        dispatch({ type: 'SUBMIT_PICK_LIST', payload: pickList })
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
                            {games.map((game) => {
                            return (
                                <MakePickTableItem game={game}
                                key={game.id}/>
                            )
                        })}
                    </TableBody>
                </Table>
                <button onClick={handlePickSubmit}>SUBMIT PICKS</button>
                
            </TableContainer> : <h2>SELECT YOUR WEEK</h2>
}
        </>
    )
} // end MakeYourPicks

export default MakeYourPicks;