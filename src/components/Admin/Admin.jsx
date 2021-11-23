import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
import { useEffect } from "react";
import WeekSelect from "../WeekSelect/WeekSelect";
import { useHistory } from "react-router";
import { Container, Paper, Button } from '@mui/material';
import { padding } from "@mui/system";

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
                    <h1>WELCOME, ADMIN</h1>
                    <h2>SELECT WEEK TO GET STARTED</h2>
                    <div className="center">
                        <WeekSelect />
                    </div>
                    {week > 0 ?
                        <>
                            <div className="center">
                                <Button 
                                variant="outlined" onClick={() => history.push('/admin/games')}>UPDATE GAMES</Button>
                                <Button variant="outlined" onClick={() => history.push('/admin/players')}>UPDATE PLAYERS</Button>
                            </div>
                        </> : <p></p>}
                </Paper>
            </Container>
        </>


    )
} // end Admin

export default Admin;