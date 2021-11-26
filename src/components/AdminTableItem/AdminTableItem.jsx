import { TableRow, TableCell, TextField } from '@mui/material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';

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
        <TableRow key={member.id}>
        <TableCell align="center"><DeleteForeverTwoToneIcon onClick={() => handleDeleteClick(member.id)}></DeleteForeverTwoToneIcon></TableCell>
        <TableCell align="center"><RemoveRedEyeTwoToneIcon onClick={() => dispatch({ type: 'FETCH_MEMBER_WEEK', payload: { id: member.id, week: week} })}></RemoveRedEyeTwoToneIcon></TableCell>
        <TableCell align="center">{member.username}</TableCell>
        <TableCell align="center">{member.email}</TableCell>
        <TableCell align="center">{member.pick_score}</TableCell>
        <TableCell align="center">
            <TextField size="small" 
            type="number"
            onChange={(event) => setNewScore(event.target.value)}  />
        </TableCell>
        <TableCell align="center">
            <SaveTwoToneIcon onClick={() => handleSaveClick(member.id)}></SaveTwoToneIcon>
        </TableCell>
    </TableRow>
    )
} // end AdminTableItem;

export default AdminTableItem;