
import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem
} from '@mui/material'
import AdminTableItem from "../AdminTableItem/AdminTableItem";
import AdminEditScores from "../AdminEditScores/AdminEditScores";
import { useEffect } from "react";
import AdminDetailTableItem from "../AdminDetailTableItem/AdminDetailTableItem";


function Admin() {

    const dispatch = useDispatch();

    const membersList = useSelector(store => store.members)
    const week = useSelector(store => store.week)
    const details = useSelector(store => store.details)

    let points = details.reduce((points, game) => {
        console.log('inside reduce');
        if(game.pick === game.result){
            console.log('inside if statement');
            return points + 1;
        } else {
            return points
        }
    }, 0)

    dispatch({ type: 'SET_POINT_COUNT', payload: points })



    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
            <h1>WELCOME, ADMIN</h1>
            <h2>MEMBER LIST</h2>
            <form>
                <Select name="" id=""
                    value={week}
                    onChange={((event) => dispatch({ type: 'SET_SELECTED_WEEK', payload: event.target.value }))}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                </Select>
            </form>
            { details.length > 0 ? 
            <>
            <h2>{details[0].username}'s week {details[0].week} picks.</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <th>PICK</th>
                        <th>RESULT</th>
                    </TableRow>
                </TableHead>
                <tbody>
                    {details.map((pick, i) => {
                        return (
                            <AdminDetailTableItem pick={pick}
                            i={i}/>
                        )
                    })}
                    
                </tbody>
            </Table>
            <p>{details[0].username} earned {points} points!</p>
            </> : <p></p>
        }

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <th>DELETE</th>
                            <th>DETAILS</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>CURRENT SCORE</th>
                            <th>NEW SCORE</th>
                            <th>SAVE SCORE</th>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {membersList.map(member => (
                            <AdminTableItem
                                key={member.id}
                                member={member} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AdminEditScores />
        </>


    )
} // end Admin

export default Admin;