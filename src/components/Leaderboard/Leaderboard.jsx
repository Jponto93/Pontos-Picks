import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';


function Leaderboard() {

    const leaderboard = useSelector(store => store.leaderboard)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LEADERBOARD' })
    }, [])
    return (
        <>
            <h1>WELCOME TO THE LEADERBOARDS</h1>
            <div className="container">
                {leaderboard.map(member => (
                    <div className="card">
                        <h4>{member.username}</h4>
                        <h3>SCORE: {member.pick_score}</h3>
                    </div>
                ))}
            </div>
        </>
    )
} // end Leaderboard

export default Leaderboard;