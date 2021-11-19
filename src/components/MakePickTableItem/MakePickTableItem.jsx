import { TableCell, TableRow } from '@mui/material';
import { isValidElement, useState } from 'react';
import { useDispatch } from 'react-redux';


function MakePickTableItem({ game }) {

    const [selectedTeam, setSelectedTeam] = useState('Pick a team');

    const dispatch = useDispatch();


    const teamSelector = (event) => {
        setSelectedTeam(event.target.innerHTML)
        console.log(selectedTeam);// state is async, will not be updated in time
        dispatch({
            type: 'ADD_PICK_SELECTION',
            payload: {
                pick: event.target.innerHTML,
                schedule_id: game.id,
            }
        })
    } // end teamSelector

    return (
        <TableRow key={game.id}>
            <TableCell className="center">{game.visitor_score}</TableCell>
            <TableCell className="center"
            onClick={(event) => teamSelector(event, game.id)}>{game.visitor_id}</TableCell>
            <TableCell className="center">@</TableCell>
            <TableCell className="center"
            onClick={(event) => teamSelector(event, game.id)}>{game.home_id}</TableCell>
            <TableCell className="center">{game.home_score}</TableCell>
            <TableCell className="center">{game.game_date}</TableCell>
            <TableCell className="center">{game.game_time}</TableCell>
            <TableCell className="center">{selectedTeam}</TableCell>
        </TableRow>
    )
} // end MakePickTableItem

export default MakePickTableItem;