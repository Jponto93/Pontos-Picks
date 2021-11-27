import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

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
                                <h4>{member.display_name}</h4>
                                <div></div>
                                <h3>SCORE: {member.pick_score}</h3>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
} // end Leaderboard

export default Leaderboard;