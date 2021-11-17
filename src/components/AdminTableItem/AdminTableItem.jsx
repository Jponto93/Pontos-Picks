import { TableCell } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function AdminTableItem ({member}) {

    const dispatch = useDispatch();

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
        <TableCell><button onClick={() => handleDeleteClick(member.id)}>REMOVE</button></TableCell>
        <TableCell>{member.username}</TableCell>
        <TableCell>{member.email}</TableCell>
        <TableCell>{member.pick_score}</TableCell>
        <TableCell>
            <input 
            type="number"
            onChange={(event) => setNewScore(event.target.value)}  />
        </TableCell>
        <TableCell>
            <button onClick={() => handleSaveClick(member.id)}>SAVE</button>
        </TableCell>
    </tr>
    )
} // end AdminTableItem;

export default AdminTableItem;