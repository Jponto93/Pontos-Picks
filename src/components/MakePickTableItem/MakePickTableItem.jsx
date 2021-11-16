import { TableCell, TableRow } from '@mui/material';
import { isValidElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import GameItem from '../GameItem/GameItem';


function MakePickTableItem({ game }) {

    const [selectedTeam, setSelectedTeam] = useState('Pick a team');

    const dispatch = useDispatch();


    const teamSelector = (event) => {
        setSelectedTeam( event.target.innerHTML )
        console.log(selectedTeam);
        dispatch({ type: 'ADD_PICK_SELECTION', payload: selectedTeam })

    } // end teamSelector

    return (
        <TableRow key={game.id}>
            <TableCell>{game.visitor_score}</TableCell>
            <TableCell onClick={(event) => teamSelector(event)}>{game.visitor_id}</TableCell>
            <TableCell>@</TableCell>
            <TableCell onClick={(event) => teamSelector(event)}>{game.home_id}</TableCell>
            {/* <GameItem game={game}/> */}
            <TableCell>{game.home_score}</TableCell>
            <TableCell>{game.game_date}</TableCell>
            <TableCell>{game.game_time}</TableCell>
            <TableCell><input 
            required
            maxLength={3}></input></TableCell>
        </TableRow>
    )
} // end MakePickTableItem

export default MakePickTableItem;