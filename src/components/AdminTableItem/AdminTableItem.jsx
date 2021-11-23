import { TableCell } from '@mui/material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AdminTableItem ({member}) {

    const dispatch = useDispatch();
    const week = useSelector(store => store.week)

    const handleSaveClick = (id) => {
        console.log('clicked id #:', id);
        dispatch({ type: 'UPDATE_MEMBER_SCORE', payload: {
            score: Number(newScore),
            id: id
        }})
    } // end handleSaveClick

    const handleDeleteClick = (id) => {
        console.log('clicked id#:', id);
        dispatch({ type: 'DELETE_MEMBER', payload: id})
    } // end handleDeleteClick

    const [newScore, setNewScore] = useState(0);

    return (
        <tr key={member.id}>
        <TableCell align="center"><button onClick={() => handleDeleteClick(member.id)}>REMOVE</button></TableCell>
        <TableCell><button onClick={() => dispatch({ type: 'FETCH_MEMBER_WEEK', payload: { id: member.id, week: week} })}>PICKS</button></TableCell>
        <TableCell align="center">{member.username}</TableCell>
        <TableCell align="center">{member.email}</TableCell>
        <TableCell align="center">{member.pick_score}</TableCell>
        <TableCell align="center">
            <input 
            type="number"
            onChange={(event) => setNewScore(event.target.value)}  />
        </TableCell>
        <TableCell className="center">
            <button onClick={() => handleSaveClick(member.id)}>SAVE</button>
        </TableCell>
    </tr>
    )
} // end AdminTableItem;

export default AdminTableItem;