import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
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
import AdminTableItem from "../AdminTableItem/AdminTableItem";


function Admin() {

    // const [newScore, setNewScore] = useState(0);

    const dispatch = useDispatch();

    const membersList = useSelector(store => store.members)

    // const handleClick = (event, id) => {
    //     console.log('clicked id #:', id);
    // } // end handleClick

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
            <h1>WELCOME, ADMIN</h1>
            <h2>MEMBER LIST</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>USERNAME</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>CURRENT SCORE</TableCell>
                            <TableCell>UPDATE SCORE</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {membersList.map(member => (
                            // <tr key={member.id}>
                            //     <TableCell>{member.username}</TableCell>
                            //     <TableCell>{member.email}</TableCell>
                            //     <TableCell>{member.pick_score}</TableCell>
                            //     <TableCell>
                            //         <input 
                            //         type="number"
                            //         onChange={(event) => handleClick(event.target.value, member.id)}  />
                            //     </TableCell>
                            //     <TableCell>
                            //         <button onClick={handleClick}>SAVE</button>
                            //     </TableCell>
                            // </tr>
                            <AdminTableItem member={member}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
} // end Admin

export default Admin;