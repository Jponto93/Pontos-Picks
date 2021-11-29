import { TableRow, TableCell, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminGameItem({ game }) {

    const schedule = useSelector(store => store.games)
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

    const presentationFunction = () => {
        console.log('clicked');
        setAwayScore(24);
        setHomeScore(34);
        setResult(game.home_id);
    };

    return (

        <TableRow
            // onClick={presentationFunction}
            key={game.id}>
            <TableCell>
                <TextField
                    size="small"
                    // use this value when presenting
                    // value={awayScore}
                    type="number"
                    onChange={(event) => setAwayScore(event.target.value)} />
            </TableCell>
            <TableCell className="center">{game.visitor_score}</TableCell>
            <TableCell className="center">{game.visitor_id}</TableCell>
            <TableCell className="center">@</TableCell>
            <TableCell className="center">{game.home_id}</TableCell>
            <TableCell className="center">{game.home_score}</TableCell>
            <TableCell className="center">
                <TextField
                    size="small"
                    // use this value for presenting
                    // value={homeScore}
                    type="number"
                    onChange={(event) => setHomeScore(event.target.value)} />
            </TableCell>
            <TableCell>
                <TextField
                    size="small"
                    //use this value for presenting
                    // value={result}
                    maxLength="3" type="text"
                    onChange={(event) => setResult(event.target.value)} /></TableCell>
            <TableCell className="center"><Button onClick={() => handleSaveClick(game.id, game.week)}>SAVE</Button></TableCell>
        </TableRow>
    )
} // end AdminGameItem

export default AdminGameItem;