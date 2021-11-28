import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';
import { Container, Box } from '@mui/material';

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
                <h2>Here are the standings if the season ended today...</h2>
                <div className="container">
                    {leaderboard.map((member, i) => {
                        return (
                            <div key={member.id}
                                className={i < 3 ? `card${i}` : "card"}>
                                <h4 className="displayName">{member.display_name}</h4>
                                { i === 0 ? <h3>1st Place!</h3> : <p></p>}
                                { i === 1 ? <h3>2nd Place!</h3> : <p></p>}
                                { i === 2 ? <h3>3rd Place!</h3> : <p></p>}
                                { i >= 3 ? <h3>{i + 1}th Place!</h3> : <p></p>}
                                <div className="">
                                    {member.image === null ?  
                                    <p className="filler"></p> 
                                    :
                                    <img className="leaderboardImg"
                                    src={member.image} alt="profile.pic" /> 
                                    }
                                </div>
                                <h3 className="displayScore">SCORE: {member.pick_score}</h3>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
} // end Leaderboard

export default Leaderboard;