import { TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './MakePickTableItem.css';

function MakePickTableItem({ game }) {

    const [selectedTeam, setSelectedTeam] = useState('');
    const dispatch = useDispatch();

    // teams
    // const teams = useSelector(store => store.teams)
    // teams.filter((team) => team.team_id === game.visitor_id || team.team_id === game.home_id)

    const teamSelector = (event) => {
        setSelectedTeam(event.target.innerHTML)
        console.log(selectedTeam);// state is async, will not be updated in time
        dispatch({
            type: 'ADD_PICK_SELECTION',
            payload: {
                pick: event.target.innerHTML,
                schedule_id: String(game.id),
                week: game.week
            }
        })
    } // end teamSelector


    return (
        <TableRow key={game.id}>
            <TableCell align="center">{game.visitor_score}</TableCell>
            <TableCell align="center"
            onClick={(event) => teamSelector(event, game.id)}>{game.visitor_id}</TableCell>
            <TableCell align="center">vs.</TableCell>
            <TableCell align="center"
            onClick={(event) => teamSelector(event, game.id)}>{game.home_id}</TableCell>
            <TableCell align="center">{game.home_score}</TableCell>
            <TableCell align="center">{game.game_date.split('T')[0]}</TableCell>
            <TableCell align="center">{game.game_time}</TableCell>
            <TableCell className={selectedTeam !== '' ? "green" : "red" }
            align="center">{selectedTeam}</TableCell>
            {/* <TableCell>{game.result ? game.result : <p>TBD</p>}</TableCell> */}
        </TableRow>
    )
} // end MakePickTableItem

export default MakePickTableItem;