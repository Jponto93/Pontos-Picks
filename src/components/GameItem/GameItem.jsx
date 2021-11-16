import { useState } from "react";
import { TableCell } from '@mui/material';

function GameItem({game}) {

    const [pick, setPick] = useState('')

    const teamSelector = event => {
        setPick(event.target.innerHTML)
    } // end teamSelector
    
    return (
        <span>
            <TableCell onClick={(event) => teamSelector(event)}>{game.visitor_id}</TableCell>
            <TableCell>{pick ? pick : 'pick'}</TableCell>
            <TableCell onClick={(event) => teamSelector(event)}>{game.home_id}</TableCell>
        </span>
    )
} // end GameItem

export default GameItem;