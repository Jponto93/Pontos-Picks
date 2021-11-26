import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';
import { Container } from '@mui/material';

function Leaderboard() {

    const leaderboard = useSelector(store => store.leaderboard)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LEADERBOARD' })
    }, [])
    return (
        <>
            <Container>
                <h1>WELCOME TO THE LEADERBOARDS</h1>
                <div className="container">
                    {leaderboard.map(member => (
                        <div key={member.id} 
                        className="card">
                            <h4>{member.username}</h4>
                            <h3>SCORE: {member.pick_score}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    )
} // end Leaderboard

export default Leaderboard;