import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';
import { Container, Box, Paper } from '@mui/material';
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
                <h1>LEADERBOARD</h1>
                <h2>Here are the standings if the season ended today...</h2>
                <div className="container">
                    {leaderboard.map((member, i) => {
                        return (
                            
                            <Card
                                // sx=({})
                                key={member.id}
                                class={i < 3 ? `card${i}` : "card"}
                                sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={member.image}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {member.display_name}
                                    </Typography>
                                    <Typography variant="h3" color="text.secondary">
                                        SCORE: {member.pick_score}
                                    </Typography>
                                    <Typography>
                                        {i === 0 ? <h2>1st Place!</h2> : <p></p>}
                                        {i === 1 ? <h2>2nd Place!</h2> : <p></p>}
                                        {i === 2 ? <h2>3rd Place!</h2> : <p></p>}
                                        {i >= 3 ? <h2>{i + 1}th Place!</h2> : <p></p>}
                                    </Typography>
                                </CardContent>
                            </Card>

                        )
                    })}
                </div>
            </Container>
        </>
    )
} // end Leaderboard

export default Leaderboard;