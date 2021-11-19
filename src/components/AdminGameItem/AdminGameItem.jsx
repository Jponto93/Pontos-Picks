import { TableRow, TableCell } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AdminGameItem({ game }) {

    const [awayScore, setAwayScore] = useState(0);
    const [homeScore, setHomeScore] = useState(0);
    const [result, setResult] = useState('')


    const dispatch = useDispatch();

    const handleSaveClick = (id, week) => {
        console.log('clicked id #:', id);
        dispatch({
            type: 'UPDATE_GAME_SCORE', payload: {
                visitor_score: Number(awayScore),
                home_score: Number(homeScore),
                game_id: id,
                week: week,
                result: result.toUpperCase()
            }
        })
    } // end handleSaveClick

 

    return (
       
        <TableRow key={game.id}>
            <TableCell className="center">
                <input type="number"
                    onChange={(event) => setAwayScore(event.target.value)} />
            </TableCell>
            <TableCell className="center">{game.visitor_score}</TableCell>
            <TableCell className="center">{game.visitor_id}</TableCell>
            <TableCell className="center">@</TableCell>
            <TableCell className="center">{game.home_id}</TableCell>
            <TableCell className="center">{game.home_score}</TableCell>
            <TableCell className="center">
                <input type="number"
                    onChange={(event) => setHomeScore(event.target.value)} />
            </TableCell>
            <TableCell><input maxLength="3" type="text" 
            onChange={(event) => setResult(event.target.value)} /></TableCell>
            <TableCell className="center"><button onClick={() => handleSaveClick(game.id, game.week)}>SAVE</button></TableCell>
        </TableRow>
    )
} // end AdminGameItem

export default AdminGameItem;