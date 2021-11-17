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
} from '@mui/material'
import AdminTableItem from "../AdminTableItem/AdminTableItem";


function Admin() {

    const dispatch = useDispatch();

    const membersList = useSelector(store => store.members)

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
                            <AdminTableItem 
                            key={member.id} 
                            member={member}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
} // end Admin

export default Admin;