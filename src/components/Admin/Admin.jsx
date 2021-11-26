import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
import { useEffect } from "react";
import WeekSelect from "../WeekSelect/WeekSelect";
import { useHistory } from "react-router";
import { Container, Paper, Button, Box } from '@mui/material';

function Admin() {

    const dispatch = useDispatch();
    const history = useHistory();
    const week = useSelector(store => store.week)

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
            <Container className="container">
                <Paper elevation={24}>
                    
                    <h1 className="mainAdminHead">WELCOME, ADMIN</h1>
                    <h2>Select a week to update</h2>
                    <Box padding={5}
                    className="center">
                        <WeekSelect />
                    </Box>
                    {week > 0 ?
                        <>
                            <Box padding={5}
                            className="center">
                                <Button 
                                variant="outlined" onClick={() => history.push('/admin/games')}>UPDATE GAMES</Button>
                                <Button variant="outlined" onClick={() => history.push('/admin/players')}>UPDATE PLAYERS</Button>
                            </Box>
                        </> : <p></p>}
                </Paper>
            </Container>
        </>


    )
} // end Admin

export default Admin;