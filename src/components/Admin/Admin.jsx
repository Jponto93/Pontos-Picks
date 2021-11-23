import { useDispatch, useSelector } from "react-redux";
import './Admin.css';
import { useEffect } from "react";
import WeekSelect from "../WeekSelect/WeekSelect";
import { useHistory } from "react-router";
import { Container } from '@mui/material';

function Admin() {

    const dispatch = useDispatch();
    const history = useHistory();
    const week = useSelector(store => store.week)

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
            <Container>
                <h1>WELCOME, ADMIN</h1>
                <h2>SELECT WEEK TO GET STARTED</h2>
                <WeekSelect />
                {week > 0 ?
                    <>
                        <button onClick={() => history.push('/admin/games')}>UPDATE GAMES</button>
                        <button onClick={() => history.push('/admin/players')}>UPDATE PLAYERS</button>
                    </> : <p></p>}
            </Container>
        </>


    )
} // end Admin

export default Admin;